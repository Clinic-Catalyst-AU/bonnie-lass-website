// Bonnie Lass Beauty - shared script for sub-pages
(function () {
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if (!burger || !navlinks) return;

  burger.addEventListener('click', function () {
    var open = navlinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navlinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navlinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();
