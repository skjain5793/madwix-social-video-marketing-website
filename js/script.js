/* =========================================================
   GrowVision Media — Custom Scripts
   Vanilla JS + Bootstrap 5 + AOS + GLightbox
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------------------
     Theme Toggle
     --------------------------------------------------------- */
  var themeToggle = document.getElementById('themeToggle');
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  /* ---------------------------------------------------------
     AOS — scroll reveal animations
     --------------------------------------------------------- */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }

  /* ---------------------------------------------------------
     GLightbox — video modal / lightbox
     --------------------------------------------------------- */
  if (window.GLightbox) {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: false,
      autoplayVideos: true,
      zoomable: false
    });
  }

  /* ---------------------------------------------------------
     Sticky nav background on scroll
     --------------------------------------------------------- */
  var siteNav = document.getElementById('siteNav');

  function handleScrollState() {
    var scrolled = window.scrollY > 40;
    if (siteNav) siteNav.classList.toggle('scrolled', scrolled);
  }
  handleScrollState();
  window.addEventListener('scroll', handleScrollState, { passive: true });

  /* ---------------------------------------------------------
     Smooth scrolling for in-page nav links
     (collapses mobile menu automatically after click)
     --------------------------------------------------------- */
  var navCollapseEl = document.getElementById('navMain');
  var bsCollapse = navCollapseEl && window.bootstrap ? new bootstrap.Collapse(navCollapseEl, { toggle: false }) : null;

  document.querySelectorAll('.scroll-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href.charAt(0) !== '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      var navHeight = siteNav ? siteNav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
      window.scrollTo({ top: top, behavior: 'smooth' });

      if (bsCollapse && navCollapseEl.classList.contains('show')) {
        bsCollapse.hide();
      }
      history.pushState(null, '', href);
    });
  });

  /* ---------------------------------------------------------
     Scrollspy — highlight active nav link based on section in view
     --------------------------------------------------------- */
  var sections = Array.from(document.querySelectorAll('section[id], header[id]'));
  var navLinks = Array.from(document.querySelectorAll('.nav-link.scroll-link'));

  function setActiveLink() {
    var scrollPos = window.scrollY + (siteNav ? siteNav.offsetHeight : 0) + 40;
    var currentId = sections.length ? sections[0].id : null;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var linkId = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', linkId === currentId);
    });
  }
  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ---------------------------------------------------------
     Animated counters for stats (IntersectionObserver)
     --------------------------------------------------------- */
  var counters = document.querySelectorAll('.counter');

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var duration = 1400;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(animateCounter);
  }

});
