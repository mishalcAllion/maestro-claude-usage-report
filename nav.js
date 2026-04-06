// nav.js — Sidebar navigation

(function() {
  const navItems = [
    { id: 'summary', label: 'Executive Summary', href: 'index.html', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'team', label: 'Team Overview', href: 'team.html', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'individual', label: 'Individual Detail', href: 'individual.html', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'cost', label: 'Cost Analysis', href: 'cost-analysis.html', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'adoption', label: 'Adoption Metrics', href: 'adoption.html', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  ];

  const currentPage = window.CURRENT_PAGE || 'summary';

  function renderNav() {
    const summary = DATA.currentMonth.summary;

    const navHTML = `
      <aside id="sidebar" class="fixed top-0 left-0 w-[260px] h-full bg-slate-950 border-r border-slate-800 z-40 transform -translate-x-full lg:translate-x-0 transition-transform duration-300">
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="p-6 border-b border-slate-800">
            <h2 class="text-lg font-semibold text-slate-100">${DATA.meta.reportTitle}</h2>
            <p class="text-xs text-slate-500 mt-1 font-mono">${DATA.meta.organization}</p>
          </div>

          <!-- Navigation Items -->
          <nav class="flex-1 overflow-y-auto py-4">
            ${navItems.map(item => {
              const isActive = item.id === currentPage;
              return `
                <a href="${item.href}"
                   class="flex items-center gap-3 px-6 py-3 text-sm transition-colors ${isActive ? 'bg-slate-800 text-slate-100 border-l-2 border-slate-100' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}"
                   data-nav-item="${item.id}">
                  <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${item.icon}"/>
                  </svg>
                  <span>${item.label}</span>
                </a>`;
            }).join('')}
          </nav>

          <!-- Footer Stats -->
          <div class="p-6 border-t border-slate-800 space-y-3">
            <div>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Total Cost</p>
              <p class="text-lg font-semibold text-slate-100 font-mono">${Theme.formatCost(summary.totalCost)}</p>
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Team Size</p>
              <p class="text-lg font-semibold text-slate-100 font-mono">${summary.teamSize} Members</p>
            </div>
            <div>
              <p class="text-[10px] text-slate-600 mt-2">${DATA.currentMonth.label}</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Mobile Hamburger -->
      <button id="mobile-menu-toggle" class="fixed top-4 left-4 z-50 lg:hidden p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:bg-slate-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Mobile Overlay -->
      <div id="mobile-overlay" class="hidden fixed inset-0 bg-black/50 z-30 lg:hidden"></div>
    `;

    document.getElementById('nav-root').innerHTML = navHTML;

    // Mobile menu handlers
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('mobile-overlay');

    function openMenu() {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
    }

    function closeMenu() {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    }

    toggleBtn.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu on nav item click (mobile)
    document.querySelectorAll('[data-nav-item]').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
  } else {
    renderNav();
  }
})();
