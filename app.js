/* Highlight the active section in the left index as you scroll. */
(function () {
  "use strict";
  var ids = ["about", "work", "news", "publications", "press", "awards"];
  var links = {};
  ids.forEach(function (id) {
    var a = document.querySelector('.nav a[href="#' + id + '"]');
    if (a) links[id] = a;
  });

  function setActive(id) {
    ids.forEach(function (x) {
      if (links[x]) links[x].classList.toggle("is-active", x === id);
    });
  }

  if (!("IntersectionObserver" in window)) { setActive("about"); return; }

  var visible = {};
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    // pick the first section (in document order) currently crossing the reading line
    for (var i = 0; i < ids.length; i++) {
      if (visible[ids[i]]) { setActive(ids[i]); return; }
    }
  }, { rootMargin: "-12% 0px -82% 0px", threshold: 0 });

  ids.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });

  setActive("about");
})();
