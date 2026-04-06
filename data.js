// data.js — Claude AI Usage Report Data
// All data extracted from ClaudeScope PDF reports
// To add a new month: append to months[] array
// To add a new member: append to members[] array inside the month

const DEFAULT_DATA = {
  meta: {
    reportTitle: 'Claude AI Usage Report',
    organization: 'Allion Technologies',
    team: 'Maestro Engineering Team',
    generatedDate: '2026-04-06',
    source: 'ClaudeScope by CrytonixLabs',
    workingDaysPerMonth: 22,
  },

  months: [
    {
      id: '2026-03',
      label: 'March 2026',
      startDate: '2026-03-01',
      endDate: '2026-03-31',
      workingDays: 22,

      members: [
        {
          id: 'shashila',
          name: 'Shashila Heshan',
          short: 'Shashila',
          role: 'AI & Integrations Lead',
          color: '#a855f7',
          totalCost: 2503.81,
          totalTokens: 4500000,
          inputTokens: 1015400,
          outputTokens: 3505700,
          projects: 5,
          activeDays: 25,
          pdfFile: 'reports/2026-03/shashila.pdf',
          sessions: [
            { name: 'Command Center', cost: 1870.11, inputTokens: 695200, outputTokens: 2600000, totalTokens: 3300000, days: 24 },
            { name: 'Notion API', cost: 549.70, inputTokens: 122100, outputTokens: 709200, totalTokens: 831300, days: 8 },
            { name: 'DevOps', cost: 64.62, inputTokens: 159000, outputTokens: 133200, totalTokens: 292200, days: 8 },
            { name: 'Desktop meaw', cost: 18.41, inputTokens: 31500, outputTokens: 46000, totalTokens: 77400, days: 2 },
            { name: 'Maestro Deals Engine', cost: 0.98, inputTokens: 7600, outputTokens: 17300, totalTokens: 24900, days: 1 },
          ],
        },
        {
          id: 'thushal',
          name: 'Thushal',
          short: 'Thushal',
          role: 'Mobile App Development',
          color: '#ec4899',
          totalCost: 2613.81,
          totalTokens: 3500000,
          inputTokens: 714600,
          outputTokens: 2800000,
          projects: 1,
          activeDays: 15,
          pdfFile: 'reports/2026-03/mobile-dev.pdf',
          sessions: [
            { name: 'Maestro Mobile App', cost: 2613.81, inputTokens: 714600, outputTokens: 2800000, totalTokens: 3500000, days: 15 },
          ],
        },
        {
          id: 'mishal',
          name: 'Mishal Chowdhury',
          short: 'Mishal',
          role: 'BA / Scrum Master',
          color: '#3b82f6',
          totalCost: 1768.80,
          totalTokens: 2800000,
          inputTokens: 347400,
          outputTokens: 2416500,
          projects: 6,
          activeDays: 16,
          pdfFile: 'reports/2026-03/mishal.pdf',
          sessions: [
            { name: 'Maestro (Main Workspace)', cost: 1399.95, inputTokens: 262000, outputTokens: 1900000, totalTokens: 2200000, days: 16 },
            { name: 'Deals Feature Research (Prototype)', cost: 96.85, inputTokens: 69800, outputTokens: 187300, totalTokens: 257100, days: 1 },
            { name: 'Trip Details Use Cases', cost: 95.06, inputTokens: 12900, outputTokens: 61100, totalTokens: 74000, days: 1 },
            { name: 'Deals Feature Research', cost: 76.33, inputTokens: 389, outputTokens: 139000, totalTokens: 139400, days: 1 },
            { name: 'CC SLA Notifications', cost: 59.30, inputTokens: 2000, outputTokens: 71100, totalTokens: 73100, days: 1 },
            { name: 'Bug Dashboard', cost: 41.30, inputTokens: 292, outputTokens: 58100, totalTokens: 58400, days: 1 },
          ],
        },
        {
          id: 'pasindu',
          name: 'Pasindu',
          short: 'Pasindu',
          role: 'Backend Developer',
          color: '#14b8a6',
          totalCost: 1000.97,
          totalTokens: 2200000,
          inputTokens: 712500,
          outputTokens: 1540200,
          projects: 2,
          activeDays: 22,
          pdfFile: 'reports/2026-03/pasindu.pdf',
          sessions: [
            { name: 'Command Center', cost: 979.31, inputTokens: 643000, outputTokens: 1500000, totalTokens: 2100000, days: 22 },
            { name: 'WhatsApp API', cost: 21.66, inputTokens: 69500, outputTokens: 40200, totalTokens: 109700, days: 6 },
          ],
        },
        {
          id: 'thiranjaya',
          name: 'Thiranjaya Munasinghe',
          short: 'Thiranjaya',
          role: 'Flight Module / Validation',
          color: '#f97316',
          totalCost: 819.93,
          totalTokens: 2186800,
          inputTokens: 859300,
          outputTokens: 1315500,
          projects: 5,
          activeDays: 22,
          pdfFile: 'reports/2026-03/thiranjaya-1.pdf',
          pdfFile2: 'reports/2026-03/thiranjaya-2.pdf',
          sessions: [
            { name: 'Command Center (Report 2)', cost: 669.90, inputTokens: 714900, outputTokens: 1100000, totalTokens: 1900000, days: 19 },
            { name: 'Command Center (Report 1)', cost: 84.55, inputTokens: 50400, outputTokens: 136400, totalTokens: 186800, days: 3 },
            { name: 'DevOps', cost: 41.33, inputTokens: 59700, outputTokens: 38800, totalTokens: 98400, days: 5 },
            { name: 'Flight Validation Backend', cost: 20.75, inputTokens: 17100, outputTokens: 24000, totalTokens: 41100, days: 1 },
            { name: 'Maestro MCP Tools', cost: 3.40, inputTokens: 17200, outputTokens: 16300, totalTokens: 33400, days: 3 },
          ],
        },
        {
          id: 'tharaka',
          name: 'Tharaka',
          short: 'Tharaka',
          role: 'Software Architect',
          color: '#6366f1',
          totalCost: 607.24,
          totalTokens: 1100000,
          inputTokens: 353400,
          outputTokens: 792000,
          projects: 4,
          activeDays: 20,
          pdfFile: 'reports/2026-03/tharaka.pdf',
          sessions: [
            { name: 'ForClaude', cost: 299.85, inputTokens: 185300, outputTokens: 488400, totalTokens: 673700, days: 9 },
            { name: 'Command Center', cost: 281.95, inputTokens: 147100, outputTokens: 274500, totalTokens: 421600, days: 13 },
            { name: 'MaestroCode Command Center', cost: 23.58, inputTokens: 21000, outputTokens: 28400, totalTokens: 49300, days: 4 },
            { name: 'WhatsApp API', cost: 1.86, inputTokens: 9, outputTokens: 671, totalTokens: 680, days: 1 },
          ],
        },
        {
          id: 'kalpa',
          name: 'Kalpa Thathsara',
          short: 'Kalpa',
          role: 'Mobile Backend / Logic',
          color: '#22c55e',
          note: 'Partial data — report covers Mar 18-31 only (history reset after re-sign-in)',
          totalCost: 189.03,
          totalTokens: 484100,
          inputTokens: 186100,
          outputTokens: 298000,
          projects: 4,
          activeDays: 11,
          pdfFile: 'reports/2026-03/kalpa.pdf',
          sessions: [
            { name: 'Command Center', cost: 181.83, inputTokens: 185900, outputTokens: 289600, totalTokens: 475500, days: 11 },
            { name: 'Maestro Mobile App', cost: 5.00, inputTokens: 142, outputTokens: 6400, totalTokens: 6600, days: 4 },
            { name: 'DBS Conci Migrate', cost: 1.19, inputTokens: 27, outputTokens: 1400, totalTokens: 1400, days: 2 },
            { name: 'Notion API', cost: 1.02, inputTokens: 14, outputTokens: 592, totalTokens: 606, days: 1 },
          ],
        },
        {
          id: 'yasiru',
          name: 'Yasiru Nilan',
          short: 'Yasiru',
          role: 'Tech Lead / Validation Engine',
          color: '#ef4444',
          totalCost: 4444.00,
          totalTokens: 3600000,
          inputTokens: 551566,
          outputTokens: 3009400,
          projects: 4,
          activeDays: 21,
          pdfFile: 'reports/2026-03/yasiru.pdf',
          sessions: [
            { name: 'Command Center', cost: 4353.25, inputTokens: 540100, outputTokens: 2800000, totalTokens: 3400000, days: 21 },
            { name: 'Notion API', cost: 54.14, inputTokens: 229, outputTokens: 143700, totalTokens: 144000, days: 8 },
            { name: 'Dynamic Trip Mongo Schema', cost: 35.53, inputTokens: 11200, outputTokens: 63600, totalTokens: 74900, days: 1 },
            { name: 'DevOps', cost: 1.07, inputTokens: 37, outputTokens: 2100, totalTokens: 2100, days: 2 },
          ],
        },
        // Pending reports — Waruna and Kugapriyan (to be added when available)
        {
          id: 'waruna',
          name: 'Waruna Samarasinghe',
          short: 'Waruna',
          role: 'Mobile UI / UX',
          color: '#06b6d4',
          totalCost: 0,
          totalTokens: 0,
          inputTokens: 0,
          outputTokens: 0,
          projects: 0,
          activeDays: 0,
          pending: true,
          pdfFile: null,
          sessions: [],
        },
        {
          id: 'kugapriyan',
          name: 'Kugapriyan',
          short: 'Kugapriyan',
          role: 'Developer',
          color: '#84cc16',
          totalCost: 0,
          totalTokens: 0,
          inputTokens: 0,
          outputTokens: 0,
          projects: 0,
          activeDays: 0,
          pending: true,
          pdfFile: null,
          sessions: [],
        },
      ],
    },
  ],
};

function computeMetrics(data) {
  const month = data.months[data.months.length - 1];
  const members = month.members;
  const active = members.filter(m => !m.pending);
  const pending = members.filter(m => m.pending);

  const totalCost = active.reduce((s, m) => s + m.totalCost, 0);
  const totalTokens = active.reduce((s, m) => s + m.totalTokens, 0);
  const totalInputTokens = active.reduce((s, m) => s + m.inputTokens, 0);
  const totalOutputTokens = active.reduce((s, m) => s + m.outputTokens, 0);
  const totalActiveDays = active.reduce((s, m) => s + m.activeDays, 0);
  const totalProjects = active.reduce((s, m) => s + m.projects, 0);

  month.activeMembers = active;
  month.pendingMembers = pending;

  month.summary = {
    totalCost: totalCost,
    totalTokens: totalTokens,
    totalInputTokens: totalInputTokens,
    totalOutputTokens: totalOutputTokens,
    teamSize: active.length,
    pendingCount: pending.length,
    totalProjects: totalProjects,
    totalActiveDays: totalActiveDays,
    avgCostPerPerson: totalCost / active.length,
    avgCostPerActiveDay: totalCost / totalActiveDays,
    avgActiveDays: totalActiveDays / active.length,
  };

  month.computed = {
    costRanking: [...active].sort((a, b) => b.totalCost - a.totalCost),
    activityRanking: [...active].sort((a, b) => b.activeDays - a.activeDays),
    costPerActiveDay: active.map(m => ({
      id: m.id, name: m.short, color: m.color,
      value: m.activeDays > 0 ? m.totalCost / m.activeDays : 0,
    })).sort((a, b) => b.value - a.value),
    adoptionRates: active.map(m => ({
      id: m.id, name: m.short, color: m.color,
      rate: (m.activeDays / month.workingDays) * 100,
      activeDays: m.activeDays,
    })).sort((a, b) => b.rate - a.rate),
    teamAdoptionRate: (totalActiveDays / (active.length * month.workingDays)) * 100,
    tokenEfficiency: active.map(m => ({
      id: m.id, name: m.short, color: m.color,
      ratio: m.inputTokens > 0 ? m.outputTokens / m.inputTokens : 0,
    })).sort((a, b) => b.ratio - a.ratio),
  };

  data.currentMonth = month;
  data.selectedMonthId = month.id;
  return data;
}

function loadData() {
  return computeMetrics(JSON.parse(JSON.stringify(DEFAULT_DATA)));
}

const DATA = loadData();
