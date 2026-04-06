// theme.js — Tailwind config + utility formatters

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
};

const Theme = {
  formatCost(value) {
    if (value >= 1000) return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return '$' + value.toFixed(2);
  },

  formatTokens(value) {
    if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
    if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
    return value.toString();
  },

  formatPercent(value) {
    return Math.round(value) + '%';
  },

  formatNumber(value) {
    return value.toLocaleString('en-US');
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  getMember(id) {
    return DATA.currentMonth.members.find(m => m.id === id);
  },

  memberBadge(member) {
    return `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium" style="background:${member.color}15;color:${member.color};border:1px solid ${member.color}30">
      <span class="w-2 h-2 rounded-full" style="background:${member.color}"></span>
      ${Theme.escapeHtml(member.short)}
    </span>`;
  },

  initials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  },

  pageHeader(title, subtitle) {
    const month = DATA.currentMonth;
    return `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-xl sm:text-2xl font-semibold text-slate-100">${title}</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">${subtitle || DATA.meta.organization + ' — ' + DATA.meta.team}</p>
        </div>
        <div class="flex items-center gap-3" data-hide-pdf>
          <select id="month-selector" class="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg px-3 py-1.5 text-sm font-mono focus:outline-none focus:border-slate-600">
            ${DATA.months.map(m => `<option value="${m.id}" ${m.id === DATA.selectedMonthId ? 'selected' : ''}>${m.label}</option>`).join('')}
          </select>
          <button onclick="exportToPDF()" class="flex items-center gap-2 px-4 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:border-slate-600 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Download PDF
          </button>
        </div>
        <div class="hidden items-center" data-show-pdf>
          <span class="text-sm text-slate-400 font-mono">${DATA.currentMonth.label}</span>
        </div>
      </div>`;
  },

  statCard(label, value, subtitle, color) {
    return `
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-3 sm:p-5 hover:border-slate-700 transition-colors">
        <p class="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider">${label}</p>
        <p class="text-lg sm:text-2xl font-semibold text-slate-100 mt-1 font-mono" ${color ? `style="color:${color}"` : ''}>${value}</p>
        ${subtitle ? `<p class="text-[10px] sm:text-xs text-slate-500 mt-1">${subtitle}</p>` : ''}
      </div>`;
  },
};
