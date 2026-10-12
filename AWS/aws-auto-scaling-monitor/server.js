const express = require('express');
const cors = require('cors');
const { AutoScalingClient, DescribeAutoScalingGroupsCommand, DescribeScalingActivitiesCommand } = require('@aws-sdk/client-auto-scaling');
const { CloudWatchClient, GetMetricStatisticsCommand } = require('@aws-sdk/client-cloudwatch');
const { ElasticLoadBalancingV2Client, DescribeLoadBalancersCommand, DescribeTargetGroupsCommand, DescribeTargetHealthCommand } = require('@aws-sdk/client-elastic-load-balancing-v2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public')); // Serve the static frontend

// AWS configuration handling
// IAM Role-based authentication is automatically handled by the SDK if running on EC2.
// Alternatively, standard local credentials logic works too.
const region = process.env.AWS_REGION || 'us-east-1';
const autoScalingGroup = process.env.ASG_NAME || 'MyAutoScalingGroup';

const asgClient = new AutoScalingClient({ region });
const cwClient = new CloudWatchClient({ region });
const elbClient = new ElasticLoadBalancingV2Client({ region });

// API: CPU Utilization from CloudWatch
app.get('/api/cpu', async (req, res) => {
    try {
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - 5 * 60 * 1000); // last 5 minutes

        const command = new GetMetricStatisticsCommand({
            Namespace: 'AWS/EC2',
            MetricName: 'CPUUtilization',
            Dimensions: [
                { Name: 'AutoScalingGroupName', Value: autoScalingGroup }
            ],
            StartTime: startTime,
            EndTime: endTime,
            Period: 60,
            Statistics: ['Average']
        });

        const response = await cwClient.send(command);
        const datapoints = response.Datapoints.sort((a, b) => b.Timestamp - a.Timestamp);
        const latestCpu = datapoints.length > 0 ? datapoints[0].Average : 0;

        res.json({ cpu: latestCpu });
    } catch (error) {
        console.error('Error fetching CPU metrics:', error);
        res.status(500).json({ error: 'Failed to fetch CPU metrics', details: error.message });
    }
});

// API: Number of Instances in ASG
app.get('/api/instances', async (req, res) => {
    try {
        const command = new DescribeAutoScalingGroupsCommand({
            AutoScalingGroupNames: [autoScalingGroup]
        });

        const response = await asgClient.send(command);
        const groups = response.AutoScalingGroups;

        if (groups.length > 0) {
            const instances = groups[0].Instances;
            res.json({ 
                count: instances.length,
                instances: instances.map(i => ({
                    id: i.InstanceId,
                    lifecycleState: i.LifecycleState,
                    healthStatus: i.HealthStatus
                }))
            });
        } else {
            res.json({ count: 0, instances: [] });
        }
    } catch (error) {
        console.error('Error fetching ASG instances:', error);
        res.status(500).json({ error: 'Failed to fetch ASG instances', details: error.message });
    }
});

// API: Scaling Events Log
app.get('/api/events', async (req, res) => {
    try {
        const command = new DescribeScalingActivitiesCommand({
            AutoScalingGroupName: autoScalingGroup,
            MaxRecords: 10
        });

        const response = await asgClient.send(command);
        const activities = response.Activities;

        res.json({ events: activities });
    } catch (error) {
        console.error('Error fetching scaling events:', error);
        res.status(500).json({ error: 'Failed to fetch scaling events', details: error.message });
    }
});

// Mock/Fallback endpoints if AWS is not configured properly or testing locally without credentials
app.get('/api/mock/cpu', (req, res) => {
    // Return a random CPU value between 40 and 90 for demo purposes
    const mockCpu = Math.floor(Math.random() * (90 - 40 + 1)) + 40;
    res.json({ cpu: mockCpu });
});

app.get('/api/mock/instances', (req, res) => {
    // Return a mock instance count
    const mockInstances = [
        { id: 'i-0abcdef1234567890', lifecycleState: 'InService', healthStatus: 'Healthy' },
        { id: 'i-0abcdef1234567891', lifecycleState: 'InService', healthStatus: 'Healthy' }
    ];
    res.json({ count: mockInstances.length, instances: mockInstances });
});

app.get('/api/mock/events', (req, res) => {
    // Return mock events
    const mockEvents = [
        { Description: 'Instance i-0abcdef1234567891 launched', StatusCode: 'Successful', StartTime: new Date().toISOString() },
        { Description: 'Instance i-0abcdef1234567890 launched', StatusCode: 'Successful', StartTime: new Date(Date.now() - 60000).toISOString() }
    ];
    res.json({ events: mockEvents });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});
