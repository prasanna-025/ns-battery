// Configuration
const POLLING_INTERVAL = 3000; // 3 seconds
const MAX_DATA_POINTS = 20;

// State
let isDemoMode = true;
let cpuData = [];
let instanceData = [];
let timeLabels = [];
let currentInstances = new Set();
let baseRequestRate = 100; // Starting baseline for demo

// Charts instances
let cpuChartRef = null;
let instancesChartRef = null;

// DOM Elements
const cpuValueEl = document.getElementById('cpu-value');
const instanceCountEl = document.getElementById('instance-count');
const requestRateEl = document.getElementById('request-rate');
const systemStatusEl = document.getElementById('system-status');
const statusDot = systemStatusEl.querySelector('.status-dot');
const statusText = systemStatusEl.querySelector('.status-text');
const mockToggle = document.getElementById('mock-toggle');
const instancesGrid = document.getElementById('instances-grid');
const activityFeed = document.getElementById('activity-feed');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    setupEventListeners();

    // Initial fetch
    fetchData();

    // Start polling
    setInterval(fetchData, POLLING_INTERVAL);
});

function setupEventListeners() {
    mockToggle.addEventListener('change', (e) => {
        isDemoMode = e.target.checked;

        // If switching to demo mode, reset data
        if (isDemoMode) {
            cpuData = [];
            instanceData = [];
            timeLabels = [];
            currentInstances.clear();
            instancesGrid.innerHTML = '';
            activityFeed.innerHTML = '';
            addLog('Switched to Demo Mode. Generating live synthetic data...', 'normal');
        } else {
            addLog('Attempting to fetch real AWS metadata. Ensure IAM & AWS credentials are set.', 'normal');
        }
    });
}

function initCharts() {
    // Set global chart defaults for dark theme
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    // CPU Chart
    const cpuCtx = document.getElementById('cpuChart').getContext('2d');

    // Create gradient
    const cpuGradient = cpuCtx.createLinearGradient(0, 0, 0, 400);
    cpuGradient.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
    cpuGradient.addColorStop(1, 'rgba(56, 189, 248, 0.05)');

    cpuChartRef = new Chart(cpuCtx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'CPU Utilization (%)',
                data: cpuData,
                borderColor: '#38bdf8',
                backgroundColor: cpuGradient,
                borderWidth: 2,
                pointBackgroundColor: '#0a0e17',
                pointBorderColor: '#38bdf8',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4 // Smooth curve
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 23, 0.9)',
                    titleColor: '#38bdf8',
                    bodyColor: '#f8fafc',
                    borderColor: 'rgba(56, 189, 248, 0.3)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false
                }
            },
            animation: {
                duration: 500
            }
        }
    });

    // Instances Chart
    const instancesCtx = document.getElementById('instancesChart').getContext('2d');

    instancesChartRef = new Chart(instancesCtx, {
        type: 'bar',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'EC2 Instances',
                data: instanceData,
                backgroundColor: '#4ade80',
                borderRadius: 4,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 5,
                    ticks: {
                        stepSize: 1
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 14, 23, 0.9)',
                    titleColor: '#4ade80',
                    bodyColor: '#f8fafc',
                    padding: 10,
                    displayColors: false
                }
            },
            animation: {
                duration: 500
            }
        }
    });
}

// Data Fetching
async function fetchData() {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let cpu, instances, requestRate, events = [];

    if (isDemoMode) {
        // Generate simulated realistic demo data
        const demoData = generateDemoData();
        cpu = demoData.cpu;
        instances = demoData.instances;
        requestRate = demoData.requestRate;

        // Check for scaling events in demo mode
        const previousInstanceCount = instanceData.length > 0 ? instanceData[instanceData.length - 1] : 0;

        if (instances.length > previousInstanceCount) {
            events.push({
                Description: `Launching a new EC2 instance...`,
                StatusCode: 'InProgress'
            });
            events.push({
                Description: `Instance ${instances[instances.length - 1].id} launched successfully based on CPU scaling policy`,
                StatusCode: 'Successful'
            });
        } else if (instances.length < previousInstanceCount) {
            events.push({
                Description: `Terminating EC2 instance... CPU load returned to normal`,
                StatusCode: 'InProgress'
            });
        }
    } else {
        // Fetch from real API endpoints
        try {
            const [cpuRes, instancesRes, eventsRes] = await Promise.all([
                fetch('/api/cpu').catch(() => ({ ok: false })),
                fetch('/api/instances').catch(() => ({ ok: false })),
                fetch('/api/events').catch(() => ({ ok: false }))
            ]);

            cpu = cpuRes.ok ? (await cpuRes.json()).cpu : 0;
            const instData = instancesRes.ok ? await instancesRes.json() : { instances: [] };
            instances = instData.instances;

            const evData = eventsRes.ok ? await eventsRes.json() : { events: [] };
            events = evData.events || [];

            // Generate some random request rate based on CPU
            requestRate = Math.floor(cpu * 12.5 + Math.random() * 50);

        } catch (error) {
            console.error("API Fetch Error:", error);
            addLog("Error connecting to real AWS metadata endpoints.", "error");
            return;
        }
    }

    // Update UI
    updateDashboard(timeNow, cpu, instances, requestRate, events);
}

// Update the DOM based on fetched data
function updateDashboard(time, cpu, instances, requestRate, events) {
    // 1. Update Metrics Cards
    cpuValueEl.textContent = cpu.toFixed(1);
    instanceCountEl.textContent = instances.length;

    // Format request rate with commas
    requestRateEl.textContent = requestRate.toLocaleString();

    // Update System Status based on CPU
    updateSystemStatus(cpu);

    // 2. Manage Chart Data Arrays
    timeLabels.push(time);
    cpuData.push(cpu);
    instanceData.push(instances.length);

    if (timeLabels.length > MAX_DATA_POINTS) {
        timeLabels.shift();
        cpuData.shift();
        instanceData.shift();
    }

    // 3. Render Charts
    cpuChartRef.update();
    instancesChartRef.update();

    // 4. Update Visualizer (animated boxes)
    updateVisualizer(instances);

    // 5. Update Activity Logs
    if (events && events.length > 0) {
        events.forEach(ev => {
            const isLaunch = ev.Description.toLowerCase().includes('launch');
            const type = isLaunch ? 'launch' : 'terminate';
            addLog(ev.Description, type);
        });
    }
}

function updateSystemStatus(cpu) {
    // Reset classes
    systemStatusEl.className = 'status-badge';
    statusText.className = 'status-text';
    statusDot.className = 'status-dot';

    const cpuCard = document.getElementById('cpu-card');

    if (cpu > 80) {
        // Critical / Scaling state
        systemStatusEl.classList.add('bg-alert');
        statusText.classList.add('text-alert');
        statusDot.classList.add('dot-alert');
        statusText.textContent = 'Scaling Triggered';
        cpuCard.style.borderColor = 'var(--neon-red)';
        cpuCard.style.boxShadow = '0 0 20px rgba(248, 113, 113, 0.2)';
    } else if (cpu > 65) {
        // Warning state
        systemStatusEl.classList.add('bg-warning');
        statusText.classList.add('text-warning');
        statusDot.classList.add('dot-warning');
        statusText.textContent = 'High Load';
        cpuCard.style.borderColor = 'var(--neon-yellow)';
        cpuCard.style.boxShadow = 'none';
    } else {
        // Normal state
        systemStatusEl.classList.add('bg-normal');
        statusText.classList.add('text-normal');
        statusDot.classList.add('dot-normal');
        statusText.textContent = 'Normal';
        cpuCard.style.borderColor = 'var(--card-border)';
        cpuCard.style.boxShadow = 'none';
    }
}

function updateVisualizer(newInstancesList) {
    const newInstanceIds = new Set(newInstancesList.map(i => i.id));

    // Find instances to terminate (removals)
    for (const oldId of currentInstances) {
        if (!newInstanceIds.has(oldId)) {
            // Animate removal
            const el = document.getElementById(`inst-${oldId}`);
            if (el) {
                el.classList.add('terminating');
                addLog(`Instance ${oldId} is terminating (Scaling In)`, 'terminate');

                setTimeout(() => {
                    if (el.parentNode) el.parentNode.removeChild(el);
                }, 500); // match animation duration
            }
            currentInstances.delete(oldId);
        }
    }

    // Find new instances to add
    newInstancesList.forEach(inst => {
        if (!currentInstances.has(inst.id)) {
            currentInstances.add(inst.id);
            // Don't log launch here because we do it from events.
            // Just add box.

            // Create element
            const box = document.createElement('div');
            box.className = 'instance-box';
            box.id = `inst-${inst.id}`;

            box.innerHTML = `
                <svg class="instance-icon-small" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                <span class="instance-id">${inst.id.substring(0, 8)}...</span>
            `;

            instancesGrid.appendChild(box);
        }
    });
}

function addLog(message, type = 'normal') {
    const li = document.createElement('li');
    li.className = 'feed-item';

    const timeStr = new Date().toLocaleTimeString();

    let typeClass = '';
    if (type === 'launch') typeClass = 'launch';
    if (type === 'terminate') typeClass = 'terminate';

    li.innerHTML = `
        <span class="feed-time">[${timeStr}]</span>
        <span class="feed-desc ${typeClass}">${message}</span>
    `;

    activityFeed.insertBefore(li, activityFeed.firstChild);

    // Keep list somewhat short
    if (activityFeed.children.length > 50) {
        activityFeed.removeChild(activityFeed.lastChild);
    }
}

// DEMO DATA GENERATOR LOGIC
let demoPhase = 0; // 0=Normal, 1=Spike, 2=ScalingOut, 3=Recovery, 4=ScalingIn
let demoTick = 0;
let demoCpu = 35;
let currentDemoInstances = [
    { id: generateInstanceId() },
    { id: generateInstanceId() }
];

function generateInstanceId() {
    return 'i-' + Math.random().toString(16).substring(2, 12);
}

function generateDemoData() {
    demoTick++;

    // Cycle randomly between phases to create a live demo story
    if (demoTick % 50 === 0) {
        demoPhase = 0; // reset
    }

    /* Simulate a lifecycle:
       1. load spikes
       2. hits 85%+ CPU
       3. auto-scaling provisions instances
       4. load balances out, CPU drops
       5. eventually load drops further, triggers scale in
    */

    if (demoTick === 5) {
        // Sudden spike
        demoPhase = 1;
        baseRequestRate = 2500;
        addLog('Simulated: Sudden spike in incoming traffic detected', 'warning');
    } else if (demoTick === 12) {
        demoPhase = 2; // CPU highly loaded
    } else if (demoTick === 16) {
        // Trigger scale out
        currentDemoInstances.push({ id: generateInstanceId() });
        currentDemoInstances.push({ id: generateInstanceId() });
    } else if (demoTick === 22) {
        // Scale out effective, CPU drops
        demoPhase = 3;
        baseRequestRate = 1800; // Stabilizing
    } else if (demoTick === 35) {
        // Traffic drops completely
        demoPhase = 4;
        baseRequestRate = 150;
    } else if (demoTick === 40) {
        // Trigger scale in
        if (currentDemoInstances.length > 2) {
            currentDemoInstances.pop();
            currentDemoInstances.pop();
        }
    }

    // Calculate simulated metrics
    let variation = (Math.random() - 0.5) * 10;

    if (demoPhase === 0) {
        demoCpu = 30 + variation;
        requestRate = 200 + variation * 10;
    } else if (demoPhase === 1) {
        demoCpu += 15; // Rapid rise
        if (demoCpu > 95) demoCpu = 95 - Math.random() * 5;
        requestRate = baseRequestRate + variation * 50;
    } else if (demoPhase === 2) {
        demoCpu = 90 + variation * 0.5; // Pegged
        requestRate = baseRequestRate + variation * 50;
    } else if (demoPhase === 3) {
        demoCpu -= 10; // Rapid drop as instances help
        if (demoCpu < 50) demoCpu = 50 + variation;
        requestRate = baseRequestRate + variation * 30;
    } else if (demoPhase === 4) {
        demoCpu -= 5;
        if (demoCpu < 20) demoCpu = 20 + variation;
        requestRate = baseRequestRate + variation * 5;
    }

    // Ensure realistic bounds
    if (demoCpu < 5) demoCpu = 5 + Math.random() * 5;
    if (demoCpu > 98) demoCpu = 98 - Math.random() * 3;

    return {
        cpu: demoCpu,
        instances: [...currentDemoInstances], // clone to prevent reference issues
        requestRate: Math.max(10, Math.floor(requestRate))
    };
}
