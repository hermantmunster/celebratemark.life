/* celebratemark.life — small, dependency-free behaviour. Everything works without it. */
(function () {
  var doc = document, root = doc.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Menu */
  var header = doc.querySelector('.site-header');
  var toggle = doc.querySelector('.menu-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('open')) {
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* Reveal on scroll, once */
  var reveals = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
  /* Insurance: whatever happens, nothing stays hidden for long */
  setTimeout(function () { reveals.forEach(function (el) { el.classList.add('in'); }); }, 2500);
  window.addEventListener('pageshow', function () { reveals.forEach(function (el) { el.classList.add('in'); }); });

  /* Ridge: leaves drift only while the ridge is on screen */
  var ridge = doc.querySelector('.ridge');
  if (ridge && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { ridge.classList.toggle('live', en.isIntersecting); });
    }, { threshold: 0.05 }).observe(ridge);
  } else if (ridge) {
    ridge.classList.add('live');
  }
  doc.addEventListener('visibilitychange', function () {
    if (ridge) ridge.classList.toggle('live', !doc.hidden && ridge.classList.contains('live'));
  });

  /* Last-mile map draws itself when seen */
  var map = doc.querySelector('.lastmile');
  if (map && 'IntersectionObserver' in window) {
    var mo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { map.classList.add('in'); mo.unobserve(map); } });
    }, { threshold: 0.3 });
    mo.observe(map);
  } else if (map) { map.classList.add('in'); }

  /* Copy buttons */
  doc.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('.label');
    var original = label ? label.textContent : btn.textContent;
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        if (label) label.textContent = 'Copied'; else btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(function () {
          if (label) label.textContent = original; else btn.textContent = original;
          btn.classList.remove('copied');
        }, 2200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = doc.createElement('textarea');
        ta.value = text; doc.body.appendChild(ta); ta.select();
        try { doc.execCommand('copy'); } catch (e) {}
        doc.body.removeChild(ta); done();
      }
    });
  });

  /* Sticky action bar on the home page: appears once the sign scrolls away */
  var bar = doc.querySelector('.action-bar');
  var hero = doc.querySelector('.hero');
  if (bar && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { bar.classList.toggle('show', !en.isIntersecting); });
    }, { threshold: 0.15 }).observe(hero);
  } else if (bar) { bar.classList.add('show'); }

  /* Send-to-phone helpers on the directions page */
  var share = doc.querySelector('[data-share-directions]');
  if (share) {
    var body = share.getAttribute('data-share-directions');
    var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    var sms = doc.querySelector('[data-sms]');
    var mail = doc.querySelector('[data-mail]');
    if (sms) {
      if (coarse) { sms.href = 'sms:?&body=' + encodeURIComponent(body); }
      else { sms.hidden = true; }
    }
    if (mail) { mail.href = 'mailto:?subject=' + encodeURIComponent('Directions to Mark’s celebration of life') + '&body=' + encodeURIComponent(body); }
  }

  /* Lodging filters */
  var chips = doc.querySelectorAll('.chip[data-filter]');
  var groups = doc.querySelectorAll('.stay-group[data-group]');
  if (chips.length && groups.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        groups.forEach(function (g) { g.hidden = !(f === 'all' || g.getAttribute('data-group') === f); });
        var status = doc.getElementById('filter-status');
        if (status) status.textContent = f === 'all' ? 'Showing every area.' : 'Showing ' + chip.textContent.trim() + '.';
      });
    });
  }

  /* Forms: gentle checks, and the thank-you address follows wherever the site is hosted */
  doc.querySelectorAll('form[data-check]').forEach(function (form) {
    try {
      var to = form.getAttribute('data-mail'), cc = form.getAttribute('data-cc');
      if (to) form.action = 'https://formsubmit.co/' + atob(to);
      var ccField = form.querySelector('input[name="_cc"]');
      if (cc && ccField) ccField.value = atob(cc);
    } catch (e) {}
    var next = form.querySelector('input[name="_next"]');
    if (next) {
      next.value = location.origin + location.pathname.replace(/[^\/]*$/, '') + 'thanks.html';
    }
    form.addEventListener('submit', function (e) {
      var ok = true, first = null;
      form.querySelectorAll('[required]').forEach(function (input) {
        var field = input.closest('.field');
        var bad = !input.value.trim() || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value));
        if (field) field.classList.toggle('invalid', bad);
        input.setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (bad) { ok = false; if (!first) first = input; }
      });
      if (!ok) {
        e.preventDefault();
        if (first) first.focus();
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.querySelector('.label') ? (btn.querySelector('.label').textContent = 'Sending…') : (btn.textContent = 'Sending…'); }
    });
    form.querySelectorAll('[required]').forEach(function (input) {
      input.addEventListener('input', function () {
        var field = input.closest('.field');
        if (field && field.classList.contains('invalid') && input.value.trim()) {
          field.classList.remove('invalid'); input.setAttribute('aria-invalid', 'false');
        }
      });
    });
  });
})();
