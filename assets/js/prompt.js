// Collapsible prompt box with copy button (used on README and Pseudo-Data pages).
// Each box is a .prompt-section whose data-prompt-src attribute names the prompt file to load.
document.querySelectorAll('.prompt-section[data-prompt-src]').forEach(function (section) {
  var src = section.getAttribute('data-prompt-src');
  var textEl = section.querySelector('.prompt-text');
  var btn = section.querySelector('.copy-prompt-btn');

  fetch(src)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function (text) {
      textEl.textContent = text;
    })
    .catch(function () {
      textEl.textContent = 'Could not load the prompt file. See ' + src + ' in the repository.';
    });

  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(textEl.textContent).then(function () {
      var original = btn.textContent;
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 2000);
    }).catch(function () {
      btn.textContent = 'Copy failed';
      setTimeout(function () { btn.textContent = 'Copy to clipboard'; }, 2000);
    });
  });
});
