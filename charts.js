// charts.js — Pure CSS/JS chart renderers

const Charts = {
  donut(data, size = 180, formatter, showPercent = true) {
    const fmt = formatter || Theme.formatCost;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const r = size / 2;
    const strokeWidth = size * 0.2;
    const innerR = r - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerR;

    // Build SVG arcs
    let offset = 0;
    const arcs = data.map(item => {
      const pct = item.value / total;
      const dashLen = pct * circumference;
      const dashGap = circumference - dashLen;
      const arc = `<circle cx="${r}" cy="${r}" r="${innerR}" fill="none" stroke="${item.color}" stroke-width="${strokeWidth}" stroke-dasharray="${dashLen} ${dashGap}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${r} ${r})"/>`;
      offset += dashLen;
      return arc;
    }).join('');

    const legendHTML = data.map(item => {
      const percentage = ((item.value / total) * 100).toFixed(1);
      return `
        <div class="flex items-center justify-between gap-3 py-1.5">
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${item.color}"></span>
            <span class="text-xs text-slate-400 truncate">${Theme.escapeHtml(item.label)}</span>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <span class="text-xs font-medium text-slate-300 font-mono">${item.displayValue || fmt(item.value)}</span>
            ${showPercent ? `<span class="text-[10px] text-slate-500">(${percentage}%)</span>` : ''}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="flex flex-col items-center">
        <div class="relative flex items-center justify-center" style="width:${size}px;height:${size}px">
          <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            ${arcs}
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <p class="text-xs text-slate-500 uppercase tracking-wider">Total</p>
              <p class="text-lg font-semibold text-slate-100 font-mono mt-0.5">${fmt(total)}</p>
            </div>
          </div>
        </div>
        <div class="w-full mt-6 space-y-0.5">
          ${legendHTML}
        </div>
      </div>`;
  },

  horizontalBar(data, maxValue) {
    const max = maxValue || Math.max(...data.map(d => d.value));

    return data.map(item => {
      const widthPct = (item.value / max) * 100;
      const displayVal = item.displayValue || Theme.formatCost(item.value);

      return `
        <div class="flex items-center gap-2 sm:gap-3 py-2.5">
          <div class="flex items-center gap-1.5 sm:gap-2 w-20 sm:w-28 flex-shrink-0">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0" style="background:${item.color}"></span>
            <span class="text-[11px] sm:text-xs text-slate-400 truncate">${Theme.escapeHtml(item.name)}</span>
          </div>
          <div class="flex-1 relative h-5 sm:h-6 bg-slate-800 rounded overflow-hidden">
            <div class="absolute inset-y-0 left-0 rounded" style="background:${item.color};opacity:0.35;width:${widthPct}%"></div>
            <div class="absolute inset-y-0 left-0 rounded" style="background:${item.color};width:${Math.min(widthPct, 3)}px;"></div>
            <div class="absolute inset-y-0 rounded" style="border-right:2px solid ${item.color};width:${widthPct}%"></div>
          </div>
          <span class="text-[11px] sm:text-xs font-medium text-slate-300 font-mono w-16 sm:w-24 text-right">${displayVal}</span>
        </div>`;
    }).join('');
  },

  progressBar(value, max, color, label) {
    const percentage = (value / max) * 100;

    return `
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-xs text-slate-400">${Theme.escapeHtml(label)}</span>
          <span class="text-xs font-medium text-slate-300 font-mono">${value} / ${max} days</span>
        </div>
        <div class="relative h-2 bg-slate-800 rounded-full overflow-hidden">
          <div class="absolute inset-y-0 left-0 rounded-full" style="background:${color};width:${Math.min(percentage, 100)}%"></div>
        </div>
        <p class="text-[10px] text-slate-500 text-right">${Theme.formatPercent(percentage)} adoption</p>
      </div>`;
  },

  tokenBar(inputTokens, outputTokens, totalTokens) {
    const inputPct = (inputTokens / totalTokens) * 100;
    const outputPct = (outputTokens / totalTokens) * 100;

    return `
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="text-slate-500">Token Distribution</span>
          <span class="text-slate-400 font-mono">${Theme.formatTokens(totalTokens)}</span>
        </div>
        <div class="relative h-3 bg-slate-800 rounded-full overflow-hidden flex">
          <div style="background:#22c55e;width:${inputPct}%" title="Input: ${Theme.formatTokens(inputTokens)}"></div>
          <div style="background:#a855f7;width:${outputPct}%" title="Output: ${Theme.formatTokens(outputTokens)}"></div>
        </div>
        <div class="flex items-center justify-between text-[10px]">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span class="text-slate-500">Input: ${Theme.formatTokens(inputTokens)} (${inputPct.toFixed(1)}%)</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-slate-500">Output: ${Theme.formatTokens(outputTokens)} (${outputPct.toFixed(1)}%)</span>
          </div>
        </div>
      </div>`;
  },
};
