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

  /* Uploads: FormSubmit rejects a send much over 5 MB, so photos are resized in the browser */
  var MAX_BYTES = 5 * 1024 * 1024, MAX_EDGE = 2400, SHRINK_OVER = 900 * 1024;
  function mb(n) { return (n / 1048576).toFixed(1); }
  function setMediaError(field, msg) {
    var err = field.querySelector('[data-media-error]');
    if (err && msg) err.textContent = msg;
    field.classList.toggle('invalid', !!msg);
  }
  function shrink(file) {
    return new Promise(function (resolve) {
      if (!/^image\/(jpeg|png|webp|heic|heif)$/i.test(file.type) || file.size <= SHRINK_OVER) return resolve(file);
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var scale = Math.min(1, MAX_EDGE / Math.max(img.naturalWidth, img.naturalHeight));
        var c = doc.createElement('canvas');
        c.width = Math.round(img.naturalWidth * scale); c.height = Math.round(img.naturalHeight * scale);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        c.toBlob(function (blob) {
          if (!blob || blob.size >= file.size) return resolve(file);
          var name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
          try { resolve(new File([blob], name, { type: 'image/jpeg' })); } catch (e) { resolve(file); }
        }, 'image/jpeg', 0.85);
      };
      img.onerror = function () { URL.revokeObjectURL(url); resolve(file); };
      img.src = url;
    });
  }
  function shrinkAll(files) { return Promise.all(files.map(shrink)); }

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
      var media = form.hasAttribute('data-files') ? form.querySelector('[data-media]') : null;
      var picker = media ? media.querySelector('input[type="file"]') : null;
      var link = form.querySelector('input[name="Link"]');
      if (media) {
        var none = !(picker && picker.files.length) && !(link && link.value.trim());
        setMediaError(media, none ? 'Add a photo, a video, or a link.' : '');
        if (none) { ok = false; if (!first) first = picker; }
      }
      if (!ok) {
        e.preventDefault();
        if (first) first.focus();
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      var label = btn && (btn.querySelector('.label') || btn);
      var idle = label ? label.textContent : '';
      if (btn) { btn.disabled = true; label.textContent = 'Sending…'; }
      if (!picker || !picker.files.length) return;

      /* Photos and videos: shrink photos, keep the total under FormSubmit's limit,
         and give every file its own field so none is dropped. */
      e.preventDefault();
      shrinkAll(Array.prototype.slice.call(picker.files)).then(function (files) {
        var total = files.reduce(function (n, f) { return n + f.size; }, 0);
        if (total > MAX_BYTES) {
          setMediaError(media, 'Too large to send (' + mb(total) + ' MB, limit 5 MB). Send fewer at a time, or share a link below.');
          if (btn) { btn.disabled = false; label.textContent = idle; }
          picker.focus();
          return;
        }
        if (typeof DataTransfer === 'function') {
          form.querySelectorAll('input[data-upload]').forEach(function (n) { n.remove(); });
          files.forEach(function (f, k) {
            var dt = new DataTransfer(); dt.items.add(f);
            var input = doc.createElement('input');
            input.type = 'file'; input.name = 'File ' + (k + 1); input.hidden = true;
            input.setAttribute('data-upload', '');
            input.files = dt.files;
            form.appendChild(input);
          });
          picker.disabled = true;
        }
        form.submit();
      });
    });
    var mediaField = form.querySelector('[data-media]');
    if (mediaField) {
      form.querySelectorAll('[data-media] input[type="file"], input[name="Link"]').forEach(function (input) {
        input.addEventListener('change', function () { setMediaError(mediaField, ''); });
        input.addEventListener('input', function () { setMediaError(mediaField, ''); });
      });
    }
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
