// JavaScript code will go here
document.addEventListener('DOMContentLoaded', function () {
 
  function setupMenu(buttonId, navSelector) {
    var btn = document.getElementById(buttonId);
    if (!btn) return;
    btn.addEventListener('click', function () {
      var nav = document.querySelector(navSelector);
      if (!nav) return;
      // toggle simple inline styles for mobile nav
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        btn.textContent = '☰';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(0,0,0,0.8)';
        nav.style.padding = '0.8rem';
        btn.textContent = '✕';
      }
    });
  }
  setupMenu('menu-btn', '#main-nav');
  setupMenu('menu-btn-2', '#main-nav-2');

  // smooth scroll: any link to anchors on same page
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
