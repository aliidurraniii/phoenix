export const dqTrendData = [
  { month: 'Jul', overall: 94.2, sales: 95.1, purchase: 93.8, stock: 93.7 },
  { month: 'Aug', overall: 95.8, sales: 96.2, purchase: 95.1, stock: 96.0 },
  { month: 'Sep', overall: 93.1, sales: 94.0, purchase: 92.5, stock: 92.8 },
  { month: 'Oct', overall: 96.5, sales: 97.2, purchase: 96.0, stock: 96.3 },
  { month: 'Nov', overall: 97.8, sales: 98.1, purchase: 97.5, stock: 97.8 },
  { month: 'Dec', overall: 98.2, sales: 98.5, purchase: 97.9, stock: 98.2 },
];

export const countryData: Array<{
  country: string;
  code: string;
  score: number;
  missing: number;
  status: string;
  trend: 'up' | 'down' | 'stable';
}> = [
  { country: 'IE', code: 'Ireland', score: 99.2, missing: 0, status: 'healthy', trend: 'up' },
  { country: 'NL', code: 'Netherlands', score: 98.8, missing: 1, status: 'healthy', trend: 'up' },
  { country: 'BE', code: 'Belgium', score: 98.5, missing: 1, status: 'healthy', trend: 'stable' },
  { country: 'NO', code: 'Norway', score: 97.9, missing: 2, status: 'healthy', trend: 'up' },
  { country: 'CH', code: 'Switzerland', score: 97.2, missing: 2, status: 'healthy', trend: 'down' },
  { country: 'IT', code: 'Italy', score: 96.8, missing: 3, status: 'moderate', trend: 'up' },
  {
    country: 'CZ',
    code: 'Czech Republic',
    score: 96.1,
    missing: 3,
    status: 'moderate',
    trend: 'stable',
  },
  { country: 'HU', code: 'Hungary', score: 95.5, missing: 4, status: 'moderate', trend: 'down' },
  { country: 'SK', code: 'Slovakia', score: 94.8, missing: 4, status: 'moderate', trend: 'up' },
  { country: 'RO', code: 'Romania', score: 93.2, missing: 6, status: 'critical', trend: 'down' },
  { country: 'RS', code: 'Serbia', score: 92.5, missing: 7, status: 'critical', trend: 'down' },
  { country: 'BA', code: 'Bosnia', score: 91.8, missing: 8, status: 'critical', trend: 'stable' },
  { country: 'LT', code: 'Lithuania', score: 97.5, missing: 2, status: 'healthy', trend: 'up' },
  { country: 'LV', code: 'Latvia', score: 96.9, missing: 3, status: 'moderate', trend: 'up' },
  { country: 'ME', code: 'Montenegro', score: 94.1, missing: 5, status: 'moderate', trend: 'down' },
];

export const alertsData = [
  {
    id: 'ALT-001',
    country: 'RO',
    company: 'RO-2145',
    category: 'Temporal',
    severity: 'Critical',
    delta: 6,
    created: '2024-12-01 08:15',
    status: 'NEW',
  },
  {
    id: 'ALT-002',
    country: 'RS',
    company: 'RS-1089',
    category: 'Temporal',
    severity: 'Critical',
    delta: 7,
    created: '2024-12-01 08:15',
    status: 'SENT',
  },
  {
    id: 'ALT-003',
    country: 'BA',
    company: 'BA-3421',
    category: 'Temporal',
    severity: 'Critical',
    delta: 8,
    created: '2024-12-01 08:15',
    status: 'SENT',
  },
  {
    id: 'ALT-004',
    country: 'HU',
    company: 'HU-7823',
    category: 'CrossSource',
    severity: 'High',
    delta: 4,
    created: '2024-12-01 08:15',
    status: 'NEW',
  },
  {
    id: 'ALT-005',
    country: 'ME',
    company: 'ME-1156',
    category: 'Duplicate',
    severity: 'Medium',
    delta: 3,
    created: '2024-12-01 08:15',
    status: 'NEW',
  },
];

export const ticketsData = [
  {
    ticket: 'INC0012345',
    country: 'RO',
    category: 'Temporal',
    severity: 'Critical',
    created: '2024-11-28',
    status: 'In Progress',
    sla: '4h remaining',
  },
  {
    ticket: 'INC0012344',
    country: 'RS',
    category: 'Temporal',
    severity: 'Critical',
    created: '2024-11-28',
    status: 'In Progress',
    sla: '2h remaining',
  },
  {
    ticket: 'INC0012340',
    country: 'BA',
    category: 'CrossSource',
    severity: 'High',
    created: '2024-11-27',
    status: 'Resolved',
    sla: 'Met',
  },
  {
    ticket: 'INC0012338',
    country: 'HU',
    category: 'Duplicate',
    severity: 'Medium',
    created: '2024-11-26',
    status: 'Resolved',
    sla: 'Met',
  },
];

export const validationSummary = [
  { type: 'Temporal', passed: 42, failed: 3, total: 45 },
  { type: 'Duplicates', passed: 44, failed: 1, total: 45 },
  { type: 'Value Validity', passed: 43, failed: 2, total: 45 },
  { type: 'Referential', passed: 45, failed: 0, total: 45 },
  { type: 'Cross-Source', passed: 41, failed: 4, total: 45 },
  { type: 'Holiday', passed: 45, failed: 0, total: 45 },
];

export const domainBreakdown = [
  { name: 'Sales', value: 98.5, color: '#3B82F6' },
  { name: 'Purchase', value: 97.2, color: '#10B981' },
  { name: 'Stock', value: 96.8, color: '#F59E0B' },
];

