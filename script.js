// Healing Souls Wellness Center — shared behavior

// Paste the HSMT links here; every "HSMT App" / "HSMT Companion" button on the site uses them.
var HSMT_LINKS = {
  app: 'https://healingsoulsenergy.github.io/HSMTAPP/',
  companion: 'https://healingsoulsenergy.github.io/HSMT/soundings-wellness-companion.html'
};

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // HSMT App / Companion buttons: fill from HSMT_LINKS, mark pending until a link is set
  document.querySelectorAll('a[data-hsmt-link]').forEach(function (a) {
    var url = HSMT_LINKS[a.getAttribute('data-hsmt-link')];
    if (url) { a.href = url; return; }
    a.classList.add('link-pending');
    a.title = 'Link coming soon';
    a.removeAttribute('target');
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // Photo placeholder handling:
  // Every real photo <img> has class "photo" and a data-label describing
  // the exact filename + recommended size to drop into /images/.
  // If the file isn't there yet (or fails to load), we show a friendly
  // placeholder instead of a broken image icon.
  document.querySelectorAll('img.photo').forEach(function (img) {
    function showPlaceholder() {
      var slot = img.closest('.photo-slot');
      if (!slot || slot.dataset.fallbackApplied) return;
      slot.dataset.fallbackApplied = 'true';
      img.remove();
      var note = document.createElement('div');
      note.className = 'placeholder-note';
      note.innerHTML = 'Add photo here<code>' + (img.getAttribute('data-label') || '') + '</code>';
      slot.appendChild(note);
    }
    img.addEventListener('error', showPlaceholder);
    // the error may already have fired before this script ran
    if (img.complete && img.naturalWidth === 0) showPlaceholder();
  });
});
