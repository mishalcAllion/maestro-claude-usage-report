// export.js — PDF export with proper formatting

function exportToPDF() {
  const element = document.getElementById('export-content');
  const monthLabel = DATA.currentMonth.label.replace(' ', '_');

  // Show loading toast
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 shadow-2xl z-50 flex items-center gap-3';
  toast.innerHTML = `
    <svg class="w-5 h-5 animate-spin text-slate-400" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="text-sm text-slate-300">Generating PDF...</span>
  `;
  document.body.appendChild(toast);

  // Add export-mode class to hide controls and add page-break rules
  document.body.classList.add('export-mode');

  // Force desktop layout and explicit dark background so html2canvas captures correctly
  const prevStyles = {
    paddingTop: element.style.paddingTop,
    backgroundColor: element.style.backgroundColor,
    minWidth: element.style.minWidth,
    maxWidth: element.style.maxWidth,
  };
  element.style.paddingTop = '32px';
  element.style.backgroundColor = '#020617';
  element.style.minWidth = '1200px';
  element.style.maxWidth = '1200px';

  const restoreStyles = () => {
    element.style.paddingTop = prevStyles.paddingTop;
    element.style.backgroundColor = prevStyles.backgroundColor;
    element.style.minWidth = prevStyles.minWidth;
    element.style.maxWidth = prevStyles.maxWidth;
  };

  const options = {
    margin: [8, 8, 8, 8],
    filename: `Claude_Usage_Report_${monthLabel}.pdf`,
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: {
      scale: 2,
      backgroundColor: '#020617',
      logging: false,
      useCORS: true,
      letterRendering: true,
      windowWidth: 1400,
      windowHeight: 900,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'landscape',
    },
    pagebreak: {
      mode: ['avoid-all', 'css'],
      before: '.pdf-page-break-before',
      after: '.pdf-page-break-after',
      avoid: '.pdf-no-break',
    },
  };

  html2pdf().set(options).from(element).save().then(() => {
    document.body.classList.remove('export-mode');
    restoreStyles();
    toast.innerHTML = `
      <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-sm text-slate-300">PDF downloaded!</span>
    `;
    setTimeout(() => {
      toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }).catch(err => {
    document.body.classList.remove('export-mode');
    restoreStyles();
    toast.innerHTML = `
      <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
      <span class="text-sm text-slate-300">PDF export failed</span>
    `;
    setTimeout(() => toast.remove(), 3000);
    console.error('PDF export error:', err);
  });
}
