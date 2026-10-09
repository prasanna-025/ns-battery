export interface SolarCalculationResult {
  recommendedKw: number;
  panelCount: number;
  monthlyGenerationKwh: number;
  annualGenerationKwh: number;
  estimatedMonthlySavings: number;
  estimatedAnnualSavings: number;
  estimatedSystemCost: number;
  estimatedSubsidy: number;
  netInvestmentCost: number;
  estimatedPaybackYears: number;
  roofAreaSqFt: number;
  co2ReductionTonsPerYear: number;
  treesEquivalent: number;
}

export function calculateSolarSavings(
  monthlyBill: number,
  connectionType: 'residential' | 'commercial' | 'industrial' = 'residential'
): SolarCalculationResult {
  // Average TANGEDCO tariff slab estimation (Rs per unit)
  // Residential average: ~Rs 7.0/kWh across higher tiers; Commercial: ~Rs 9.5/kWh
  const tariffPerUnit = connectionType === 'residential' ? 7.2 : connectionType === 'commercial' ? 9.8 : 8.5;
  
  // Monthly units consumed
  const monthlyUnits = Math.max(50, Math.round(monthlyBill / tariffPerUnit));
  
  // In Tamil Nadu / Ramanathapuram, 1kW of solar yields ~4 to 4.5 units per day (~125 to 135 units per month)
  const unitsPerKwPerMonth = 125;
  
  // Recommended kW rounded to nearest 0.5 kW (minimum 1 kW)
  let rawKw = monthlyUnits / unitsPerKwPerMonth;
  let recommendedKw = Math.max(1, Math.round(rawKw * 2) / 2);
  if (recommendedKw > 50) recommendedKw = 50;

  // Assuming 550W mono PERC panels
  const panelCount = Math.ceil((recommendedKw * 1000) / 550);
  
  // Roof area required (~80 - 100 sq ft per kW)
  const roofAreaSqFt = Math.round(recommendedKw * 85);
  
  // Monthly and annual generation
  const monthlyGenerationKwh = Math.round(recommendedKw * unitsPerKwPerMonth);
  const annualGenerationKwh = monthlyGenerationKwh * 12;
  
  // Savings
  const estimatedMonthlySavings = Math.min(monthlyBill, Math.round(monthlyGenerationKwh * tariffPerUnit));
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  
  // Indicative Gross System Cost (~Rs 55,000 to 62,000 per kW on-grid turnkey)
  const estimatedSystemCost = Math.round(recommendedKw * 58000);
  
  // PM Surya Ghar Muft Bijli Yojana Central Subsidy (approximate 2024-2026 guidelines):
  // 1 kW: Rs 30,000; 2 kW: Rs 60,000; 3 kW+: max Rs 78,000 for residential
  let estimatedSubsidy = 0;
  if (connectionType === 'residential') {
    if (recommendedKw <= 1) {
      estimatedSubsidy = 30000;
    } else if (recommendedKw <= 2) {
      estimatedSubsidy = 60000;
    } else {
      estimatedSubsidy = 78000;
    }
    // Subsidy cannot exceed 50% of cost
    estimatedSubsidy = Math.min(estimatedSubsidy, Math.round(estimatedSystemCost * 0.45));
  }
  
  const netInvestmentCost = Math.max(20000, estimatedSystemCost - estimatedSubsidy);
  
  // Payback years
  const estimatedPaybackYears = Number((netInvestmentCost / Math.max(1, estimatedAnnualSavings)).toFixed(1));
  
  // CO2 savings (~0.82 kg CO2 per kWh solar in India)
  const co2ReductionTonsPerYear = Number(((annualGenerationKwh * 0.82) / 1000).toFixed(1));
  const treesEquivalent = Math.round(co2ReductionTonsPerYear * 45);

  return {
    recommendedKw,
    panelCount,
    monthlyGenerationKwh,
    annualGenerationKwh,
    estimatedMonthlySavings,
    estimatedAnnualSavings,
    estimatedSystemCost,
    estimatedSubsidy,
    netInvestmentCost,
    estimatedPaybackYears,
    roofAreaSqFt,
    co2ReductionTonsPerYear,
    treesEquivalent,
  };
}
