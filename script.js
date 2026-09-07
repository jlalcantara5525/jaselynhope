/* ================================================================
   MERMAID PRINCESS — 1ST BIRTHDAY & CHRISTENING INVITATION
   script.js
================================================================ */

// ===============================
// EDIT INVITATION INFORMATION HERE
// ===============================
const invitationData = {

  siteTitle: "Jaselyn Hope's Magical Day",

  celebrant: {
    name:        "Jaselyn Hope",
    nickname:    "Jasy",
    birthday:    "September 20, 2026",
    description: "Our little mermaid princess who fills every corner of our hearts with joy, laughter, and endless wonder. From the very first moment we held you, our world became a more magical place.",
    mainImage:   "images/celebrant/main.jpg"
  },

  parents: {
    father: "Daddy Jason",
    mother: "Mommy Evalyn"
  },

  event: {
    // ISO 8601 date-time for the countdown. Change to your actual event date.
    date:            "2026-09-20T08:30:00",
    displayDate:     "September 20, 2026",
    baptismTime:     "8:30 AM",
    churchName:      "San Isidro A Dumaralos Church",
    churchAddress:   "Zone 1, Botao, Santa Barbara, Pangasinan",
    // ↓ Paste your exact Google Maps URL here (right-click a pin → Share → Copy link)
    churchMapUrl:    "https://maps.app.goo.gl/thzosG5jcMcWvMmi8",

    receptionName:   "Dacasin Residence",
    receptionAddress:"Zone 1, Botao, Santa Barbara, Pangasinan",
    // ↓ Paste your exact Google Maps URL here
    receptionMapUrl: "https://maps.app.goo.gl/Q8VAb52RD3ASVwQ1A"
  },

  attire: {
    baptism: {
      icon:        "🕊️",
      title:       "Baptismal Attire",
      color:       "White",
      description: "Ninong and Ninang are requested to wear white for the holy baptismal ceremony as a symbol of purity and new beginnings.",
      swatches:    ["#ffffff", "#f5f0ff", "#e8f8f5"]
    },
    birthday: {
      icon:        "🧜‍♀️",
      title:       "Birthday Motif",
      color:       "Purple & Pink",
      description: "Guests are invited to wear purple, lavender, pink, or any mermaid-inspired pastel color to complement our under the sea celebration.",
      swatches:    ["#c8a8e9", "#9b59b6", "#f4a7c3", "#fce4ec", "#b2ede8", "#7ecec4"]
    }
  },

  giftGuide: [
    { title: "Books",          icon: "📚", description: "Storybooks, picture books, and early learning books to spark her love of reading." },
    { title: "Toys",           icon: "🧸", description: "Age-appropriate and educational toys that nurture creativity and development." },
    { title: "Clothes",        icon: "👗", description: "Adorable outfits and cute little dresses for our growing princess." },
    { title: "Baby Essentials",icon: "🍼", description: "Practical everyday essentials that make parenthood a little easier." },
    { title: "Monetary Gift",  icon: "💰", description: "A thoughtful contribution towards her future and dreams." },
    { title: "Experiences",    icon: "🎠", description: "Gift cards or experiences that create beautiful family memories." }
  ],

  godparents: {
    ninongs: [
      { name: "Megan Jude Calimlim" },
      { name: "Marvin Capinpin" },
      { name: "Ahron Wardy Palaganas" },
      { name: "Allan Untalan" },
      { name: "Ronnie Gabat" },
      { name: "Nelson Salinas" },
      { name: "Marc Lennon Ferrer" },
      { name: "Peter George Untalan" },
      { name: "Reymart Peralta" },
      { name: "Jerby Salinas" }
    ],
    ninangs: [
      { name: "Vanessa Bautista" },
      { name: "Janica Criselle Dacasin" },
      { name: "Chabelita Sanchez" },
      { name: "Krystal Mia Dacasin" },
      { name: "Melody Palaganas" },
      { name: "Ellyza Grace Idos" },
      { name: "April Joy Cruz" },
      { name: "Rochelle Peralta" },
      { name: "Vea Lykha Rosario" },
      { name: "Roda Palaganas" }
    ]
  },

  gallery: [
    { month: "1 Month",   image: "images/gallery/month-01.jpg", caption: "Our little mermaid's first month — tiny, perfect, and already loved beyond measure." },
    { month: "2 Months",  image: "images/gallery/month-02.jpg", caption: "Growing sweeter every single day." },
    { month: "3 Months",  image: "images/gallery/month-03.jpg", caption: "Those eyes — deep and full of wonder." },
    { month: "4 Months",  image: "images/gallery/month-04.jpg", caption: "Discovering the world, one smile at a time." },
    { month: "5 Months",  image: "images/gallery/month-05.jpg", caption: "Giggles that fill the whole room with light." },
    { month: "6 Months",  image: "images/gallery/month-06.jpg", caption: "Halfway to one — and already our whole world." },
    { month: "7 Months",  image: "images/gallery/month-07.jpg", caption: "Curious little explorer finding magic everywhere." },
    { month: "8 Months",  image: "images/gallery/month-08.jpg", caption: "Adventures begin — no surface is safe anymore!" },
    { month: "9 Months",  image: "images/gallery/month-09.jpg", caption: "Standing tall and ready to take on the world." },
    { month: "10 Months", image: "images/gallery/month-10.jpg", caption: "Dancing to her own little melody." },
    { month: "11 Months", image: "images/gallery/month-11.jpg", caption: "Almost one — our hearts are so full." },
    { month: "12 Months", image: "images/gallery/month-12.jpg", caption: "A whole year of pure, endless magic. Happy birthday, my love." }
  ],

  memories: [
    { icon: "😊", image: "images/decorations/memory-01.jpg", title: "First Smile",      description: "The smile that melted us completely." },
    { icon: "😂", image: "images/decorations/memory-02.jpg", title: "First Laugh",      description: "A sound we never want to forget." },
    { icon: "👣", image: "images/decorations/memory-03.jpg", title: "First Steps",      description: "Tiny feet taking on the world." },
    { icon: "🎵", image: "images/decorations/memory-04.jpg", title: "First Gala",       description: "She travels with laughter." },
    { icon: "🍼", image: "images/decorations/memory-05.jpg", title: "First Food",       description: "The face she made — priceless." },
    { icon: "🌊", image: "images/decorations/memory-06.jpg", title: "First Beach",      description: "Already a little mermaid at heart." },
    { icon: "😴", image: "images/decorations/memory-07.jpg", title: "Sweetest Dreams",  description: "Sleeping like an angel every night." },
    { icon: "🧸", image: "images/decorations/memory-08.jpg", title: "Favorite Place",     description: "Firstime playing in playground." },
    { icon: "🌸", image: "images/decorations/memory-09.jpg", title: "Little Explorer",  description: "Curious about every little thing." },
    { icon: "💕", image: "images/decorations/memory-10.jpg", title: "Pure Love",        description: "She taught us what love really means." }
  ],

  characters: {
    ariel:    "images/characters/ariel.png",
    sebastian:"images/characters/sebastian.png",
    flounder: "images/characters/flounder.png",
    ursula:   "images/characters/ursula.png",
    triton:   "images/characters/triton.png",
    eric:     "images/characters/eric.png"
  },

  music: {
    enabled: true,
    source:  "music/background-music.mp3",
    volume:  0.35
  }

};
// ===============================
// END OF EDITABLE CONTENT
// ===============================


/* ================================================================
   UTILITY HELPERS
================================================================ */

/**
 * Try to set an <img> src. If the image 404s or fails, hide the
 * element's nearest meaningful ancestor (.char-deco, the img itself,
 * or a provided fallback selector).
 */
function safeImage(imgEl, src, fallbackSelector) {
  if (!src) { hideImageParent(imgEl, fallbackSelector); return; }
  imgEl.src = src;
  imgEl.onerror = () => hideImageParent(imgEl, fallbackSelector);
}
function hideImageParent(imgEl, fallbackSelector) {
  const target = fallbackSelector
    ? imgEl.closest(fallbackSelector) || imgEl
    : imgEl.closest('.char-deco') || imgEl;
  target.style.display = 'none';
}

/** Zero-pad a number to 2 digits */
function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

/** Generate a Google Maps search URL from an address string */
function mapsUrl(address) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address);
}

/** Check if a date string represents today or the past */
function isEventPast(dateStr) {
  return new Date(dateStr) <= new Date();
}


/* ================================================================
   PARTICLE / UNDERWATER CANVAS SYSTEM
================================================================ */
function setupParticles() {
  const canvas = document.getElementById('underwater-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const isMobile = () => window.innerWidth < 768;

  let W, H, particles, fish, jellies, seaweeds;
  let mouseX = -999, mouseY = -999;

  // Track mouse for parallax
  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticles();
  }

  function randRange(min, max) { return Math.random() * (max - min) + min; }

  function initParticles() {
    const count = isMobile() ? 35 : 70;
    particles = Array.from({ length: count }, () => createParticle());
    fish = Array.from({ length: isMobile() ? 3 : 6 }, () => createFish());
    jellies = Array.from({ length: isMobile() ? 2 : 4 }, () => createJelly());
    seaweeds = Array.from({ length: isMobile() ? 4 : 8 }, () => createSeaweed());
  }

  function createParticle() {
    const types = ['bubble', 'sparkle', 'pearl'];
    return {
      x:     randRange(0, W),
      y:     randRange(0, H),
      r:     randRange(1.5, 6),
      vy:    randRange(-0.4, -1.2),
      vx:    randRange(-0.3, 0.3),
      alpha: randRange(0.1, 0.5),
      type:  types[Math.floor(Math.random() * types.length)],
      hue:   Math.floor(randRange(0, 4)) // index into color array
    };
  }
  function createFish() {
    const dir = Math.random() > 0.5 ? 1 : -1;
    return {
      x:     dir === 1 ? -60 : W + 60,
      y:     randRange(H * 0.1, H * 0.8),
      vx:    dir * randRange(0.6, 1.8),
      scale: randRange(0.5, 1.2),
      alpha: randRange(0.25, 0.55),
      color: `hsl(${randRange(170,300)},60%,70%)`
    };
  }
  function createJelly() {
    return {
      x:     randRange(0, W),
      y:     H + randRange(20, 80),
      vy:    randRange(-0.3, -0.7),
      r:     randRange(10, 28),
      alpha: randRange(0.1, 0.3),
      phase: randRange(0, Math.PI * 2),
      color: `hsl(${randRange(250,320)},60%,70%)`
    };
  }
  function createSeaweed() {
    return {
      x:     randRange(0, W),
      h:     randRange(60, 160),
      phase: randRange(0, Math.PI * 2),
      speed: randRange(0.005, 0.015),
      color: `hsl(${randRange(150,200)},45%,35%)`
    };
  }

  const particleColors = [
    [200, 168, 233], // lavender
    [178, 237, 232], // aqua-light
    [244, 167, 195], // pink
    [240, 208, 128]  // gold
  ];

  function drawParticle(p) {
    const [r, g, b] = particleColors[p.hue];
    ctx.save();
    ctx.globalAlpha = p.alpha;
    if (p.type === 'bubble') {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${r},${g},${b},0.7)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      // highlight
      ctx.beginPath();
      ctx.arc(p.x - p.r * 0.3, p.y - p.r * 0.3, p.r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,0.4)`;
      ctx.fill();
    } else if (p.type === 'sparkle') {
      const s = p.r;
      ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y - s);
      ctx.lineTo(p.x + s * 0.3, p.y - s * 0.3);
      ctx.lineTo(p.x + s, p.y);
      ctx.lineTo(p.x + s * 0.3, p.y + s * 0.3);
      ctx.lineTo(p.x, p.y + s);
      ctx.lineTo(p.x - s * 0.3, p.y + s * 0.3);
      ctx.lineTo(p.x - s, p.y);
      ctx.lineTo(p.x - s * 0.3, p.y - s * 0.3);
      ctx.closePath();
      ctx.fill();
    } else {
      // pearl
      const grad = ctx.createRadialGradient(p.x - p.r * 0.3, p.y - p.r * 0.3, 0, p.x, p.y, p.r);
      grad.addColorStop(0, 'rgba(255,255,255,0.9)');
      grad.addColorStop(1, `rgba(${r},${g},${b},0.4)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
    ctx.restore();
  }

  function drawFish(f) {
    ctx.save();
    ctx.globalAlpha = f.alpha;
    ctx.translate(f.x, f.y);
    ctx.scale(f.vx < 0 ? -f.scale : f.scale, f.scale);
    // body
    ctx.beginPath();
    ctx.ellipse(0, 0, 20, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = f.color;
    ctx.fill();
    // tail
    ctx.beginPath();
    ctx.moveTo(-18, 0);
    ctx.lineTo(-30, -9);
    ctx.lineTo(-30, 9);
    ctx.closePath();
    ctx.fillStyle = f.color;
    ctx.fill();
    // eye
    ctx.beginPath();
    ctx.arc(10, -2, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10,5,32,0.8)';
    ctx.fill();
    ctx.restore();
  }

  function drawJelly(j) {
    ctx.save();
    ctx.globalAlpha = j.alpha;
    // dome
    ctx.beginPath();
    ctx.arc(j.x, j.y, j.r, Math.PI, 0);
    ctx.fillStyle = j.color;
    ctx.fill();
    // tentacles
    for (let i = 0; i < 5; i++) {
      const tx = j.x - j.r * 0.6 + i * (j.r * 0.3);
      ctx.beginPath();
      ctx.moveTo(tx, j.y);
      ctx.quadraticCurveTo(
        tx + Math.sin(j.phase + i) * 8, j.y + j.r * 0.8,
        tx + Math.sin(j.phase + i) * 4, j.y + j.r * 1.4
      );
      ctx.strokeStyle = j.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = j.alpha * 0.6;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawSeaweed(sw, t) {
    ctx.save();
    ctx.strokeStyle = sw.color;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.moveTo(sw.x, H);
    const segments = 8;
    for (let i = 1; i <= segments; i++) {
      const segH = sw.h / segments;
      const y = H - i * segH;
      const sway = Math.sin(t * sw.speed + sw.phase + i * 0.5) * (i * 3);
      ctx.lineTo(sw.x + sway, y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawLightRays(t) {
    const rayPositions = [0.1, 0.3, 0.5, 0.7, 0.9];
    rayPositions.forEach((pos, i) => {
      ctx.save();
      const x = W * pos + Math.sin(t * 0.001 + i) * 30;
      const grad = ctx.createLinearGradient(x, 0, x + 40, H);
      grad.addColorStop(0, 'rgba(180,140,255,0.06)');
      grad.addColorStop(0.5, 'rgba(180,140,255,0.03)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(x - 20, 0);
      ctx.lineTo(x + 40, 0);
      ctx.lineTo(x + 20, H);
      ctx.lineTo(x - 40, H);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });
  }

  function updateParticle(p) {
    // Subtle mouse parallax
    const dx = mouseX - p.x;
    const dy = mouseY - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      p.vx -= dx / dist * 0.04;
      p.vy -= dy / dist * 0.04;
    }
    p.x += p.vx;
    p.y += p.vy;
    // dampen
    p.vx *= 0.99;
    // reset when off screen
    if (p.y < -10) { p.y = H + 10; p.x = randRange(0, W); }
    if (p.x < -10) p.x = W + 10;
    if (p.x > W + 10) p.x = -10;
  }

  let t = 0;
  function loop() {
    ctx.clearRect(0, 0, W, H);

    // Background gradient — pinkish purple
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   'rgba(60,10,80,0.94)');   // deep purple-pink top
    bg.addColorStop(0.3, 'rgba(100,20,110,0.91)'); // rich magenta-purple
    bg.addColorStop(0.6, 'rgba(130,30,100,0.88)'); // warm pink-purple mid
    bg.addColorStop(1,   'rgba(80,10,70,0.90)');   // deep plum bottom
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    drawLightRays(t);

    seaweeds.forEach(sw => drawSeaweed(sw, t));

    jellies.forEach(j => {
      j.y += j.vy;
      j.x += Math.sin(t * 0.01 + j.phase) * 0.4;
      j.phase += 0.02;
      if (j.y < -j.r * 2) { j.y = H + 20; j.x = randRange(0, W); }
      drawJelly(j);
    });

    fish.forEach(f => {
      f.x += f.vx;
      if (f.x > W + 80 || f.x < -80) {
        const nf = createFish();
        Object.assign(f, nf);
      }
      drawFish(f);
    });

    particles.forEach(p => { updateParticle(p); drawParticle(p); });

    t++;
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  resize();
  loop();
}


/* ================================================================
   ENVELOPE & INTRO SEQUENCE
================================================================ */
function setupEnvelope() {
  const screen   = document.getElementById('envelope-screen');
  const envelope = document.getElementById('envelope');
  const overlay  = document.getElementById('invited-overlay');
  const app      = document.getElementById('app');
  const nav      = document.getElementById('main-nav');
  const musicBtn = document.getElementById('music-btn');

  if (!envelope) return;

  // Lock scroll while envelope is showing so scrollbar is never visible
  document.body.style.overflow = 'hidden';

  let opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;

    // 1. Shake
    envelope.classList.add('shaking');
    setTimeout(() => {
      envelope.classList.remove('shaking');

      // 2. Open flap
      envelope.classList.add('opening');

      // 3. Show "You're Invited" full-screen overlay once flap finishes (0.8s)
      setTimeout(() => {
        overlay.classList.add('visible');

        // 4. Hold overlay for 2s, then reveal main site at the very top
        setTimeout(() => {
          overlay.classList.remove('visible');

          setTimeout(() => {
            screen.classList.add('hidden');
            // Restore scrolling and guarantee hero is the first section visible
            document.body.style.overflow = '';
            window.scrollTo({ top: 0, behavior: 'instant' });
            app.style.opacity = '1';
            nav.classList.add('visible');
            musicBtn.classList.add('visible');
            setupMusic();
            setupScrollSpy();
          }, 700);
        }, 2000);
      }, 800);
    }, 500);
  }

  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
  });

  // Also add click ripple to body for feel
  document.addEventListener('click', e => {
    const rip = document.createElement('div');
    rip.className = 'ripple';
    rip.style.left = e.clientX + 'px';
    rip.style.top  = e.clientY + 'px';
    document.body.appendChild(rip);
    setTimeout(() => rip.remove(), 700);
  });
}


/* ================================================================
   BACKGROUND MUSIC
================================================================ */
function setupMusic() {
  const audio  = document.getElementById('bg-music');
  const btn    = document.getElementById('music-btn');
  if (!audio || !btn) return;
  if (!invitationData.music.enabled) return;

  audio.src    = invitationData.music.source;
  audio.volume = invitationData.music.volume;

  audio.play().then(() => {
    btn.textContent = '🎵';
    btn.classList.add('playing');
  }).catch(() => {
    // Autoplay blocked — that's okay, user can tap
    btn.textContent = '🔇';
  });

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = '🎵';
      btn.classList.add('playing');
    } else {
      audio.pause();
      btn.textContent = '🔇';
      btn.classList.remove('playing');
    }
  });
}


/* ================================================================
   NAVIGATION
================================================================ */
function setupNavigation() {
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('nav-mobile-drawer');
  const overlay   = document.getElementById('nav-overlay');

  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    overlay.classList.toggle('visible', isOpen);
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  overlay.addEventListener('click', closeMobileNav);
}

function closeMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('nav-mobile-drawer');
  const overlay   = document.getElementById('nav-overlay');
  if (!drawer) return;
  drawer.classList.remove('open');
  overlay.classList.remove('visible');
  if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded', 'false'); }
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => obs.observe(s));
}


/* ================================================================
   COUNTDOWN TIMER
================================================================ */
function setupCountdown() {
  const eventDate = new Date(invitationData.event.date);
  const wrap      = document.getElementById('countdown-wrap');
  const message   = document.getElementById('countdown-message');
  const dEl       = document.getElementById('cd-days');
  const hEl       = document.getElementById('cd-hours');
  const mEl       = document.getElementById('cd-minutes');
  const sEl       = document.getElementById('cd-seconds');
  if (!dEl) return;

  function tick() {
    const now  = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
      if (wrap)    wrap.style.display    = 'none';
      if (message) message.style.display = 'block';
      return;
    }
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);
    dEl.textContent = pad(days);
    hEl.textContent = pad(hours);
    mEl.textContent = pad(minutes);
    sEl.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
}


/* ================================================================
   LOAD INVITATION DATA INTO DOM
================================================================ */
function loadInvitationData() {
  const d = invitationData;

  // Site title
  const titleEl = document.getElementById('site-title');
  if (titleEl) titleEl.textContent = d.siteTitle;

  // Nav logo
  const logo = document.querySelector('.nav-logo');
  if (logo) logo.textContent = '✦ ' + d.celebrant.name + ' ✦';

  // ----- HERO -----
  setText('hero-name',    d.celebrant.name);
  setText('hero-event',   `on her Christening & 1st Birthday`);
  setText('hero-date',    d.event.displayDate);
  setText('hero-welcome', `Come dive into a magical celebration as we welcome you to our little one's Christening and 1st Birthday. Your presence makes this day truly complete.`);

  // Hero photo
  const heroPhoto = document.getElementById('hero-main-photo');
  if (heroPhoto) {
    if (d.celebrant.mainImage) {
      heroPhoto.src = d.celebrant.mainImage;
      heroPhoto.alt = `Photo of ${d.celebrant.name}`;
      heroPhoto.onerror = function () {
        // Replace img with placeholder
        const wrap = heroPhoto.parentElement;
        if (wrap) {
          wrap.innerHTML = `
            <div class="photo-placeholder">
              🌸<p>Add photo to<br>images/celebrant/main.jpg</p>
            </div>`;
        }
      };
    }
  }

  // ----- DETAILS -----
  setText('baptism-date',    d.event.displayDate);
  setText('baptism-time',    d.event.baptismTime);
  setText('church-name',     d.event.churchName);
  setText('church-address',  d.event.churchAddress);
  setText('reception-name',  d.event.receptionName);
  setText('reception-address', d.event.receptionAddress);

  // Map buttons — use exact URL from invitationData if provided, otherwise
  // fall back to generating a Google Maps search from the address string
  const churchBtn = document.getElementById('church-map-btn');
  const receptBtn = document.getElementById('reception-map-btn');
  if (churchBtn) churchBtn.href = d.event.churchMapUrl    || mapsUrl(d.event.churchAddress);
  if (receptBtn) receptBtn.href = d.event.receptionMapUrl || mapsUrl(d.event.receptionAddress);

  // ----- ATTIRE -----
  buildAttire();

  // ----- GIFT GUIDE -----
  buildGiftGuide();

  // ----- GODPARENTS -----
  buildGodparents();

  // ----- CELEBRANT -----
  setText('celebrant-name',     d.celebrant.name);
  setText('celebrant-nickname', `"${d.celebrant.nickname}"`);
  setText('celebrant-bday',     d.celebrant.birthday);
  setText('celebrant-desc',     d.celebrant.description);

  const celPhoto = document.getElementById('celebrant-photo');
  if (celPhoto) {
    if (d.celebrant.mainImage) {
      celPhoto.src = d.celebrant.mainImage;
      celPhoto.alt = `Photo of ${d.celebrant.name}`;
      celPhoto.onerror = function () {
        const frame = document.getElementById('celebrant-frame');
        if (frame) {
          frame.innerHTML = `
            <div class="celebrant-frame-placeholder">
              🧜‍♀️<p>images/celebrant/main.jpg</p>
            </div>`;
        }
      };
    }
  }

  // Parents inline
  const parentStr = `${d.parents.father} & ${d.parents.mother}`;
  setText('parents-footer-inline', parentStr);

  // ----- FOOTER -----
  setText('footer-name',    d.celebrant.name);
  setText('footer-parents', parentStr);

  // ----- CHARACTERS -----
  loadCharacter('char-ariel',    d.characters.ariel,    `Ariel decoration`);
  loadCharacter('char-flounder', d.characters.flounder, `Flounder decoration`);
  loadCharacter('char-sebastian',d.characters.sebastian,`Sebastian decoration`);
  loadCharacter('char-eric',     d.characters.eric,     `Eric decoration`);
  loadCharacter('char-triton',   d.characters.triton,   `Triton decoration`);
  loadCharacter('char-ursula',   d.characters.ursula,   `Ursula decoration`);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.textContent = value;
}

function loadCharacter(wrapperId, src, altText) {
  const wrap = document.getElementById(wrapperId);
  if (!wrap) return;
  const img = wrap.querySelector('img');
  if (!img || !src) { wrap.style.display = 'none'; return; }
  img.alt = altText;
  img.src = src;
  img.onerror = () => { wrap.style.display = 'none'; };
}


/* ================================================================
   BUILD ATTIRE CARDS
================================================================ */
function buildAttire() {
  const grid = document.getElementById('attire-grid');
  if (!grid) return;

  const cards = [invitationData.attire.baptism, invitationData.attire.birthday];
  const labels= ['Baptismal Attire', 'Birthday Motif'];

  grid.innerHTML = cards.map((card, i) => `
    <div class="attire-card anim-fade-up anim-delay-${i + 1}">
      <span class="attire-icon">${card.icon}</span>
      <p class="attire-type">${card.title}</p>
      <div class="attire-name">${card.color}</div>
      <p class="attire-desc">${card.description}</p>
      <div class="attire-swatches">
        ${card.swatches.map(c => `<div class="swatch" style="background:${c}" title="${c}"></div>`).join('')}
      </div>
    </div>
  `).join('');
}


/* ================================================================
   BUILD GIFT GUIDE
================================================================ */
function buildGiftGuide() {
  const grid = document.getElementById('gift-grid');
  if (!grid) return;

  grid.innerHTML = invitationData.giftGuide.map((g, i) => `
    <div class="gift-card anim-scale-in anim-delay-${Math.min(i + 1, 6)}"
         role="button" tabindex="0"
         aria-label="Gift idea: ${g.title}. Click to learn more."
         onclick="this.classList.toggle('flipped')"
         onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.classList.toggle('flipped')}">
      <div class="gift-card-inner">
        <div class="gift-card-front">
          <div class="gift-icon">${g.icon}</div>
          <div class="gift-title">${g.title}</div>
        </div>
        <div class="gift-card-back">
          <p class="gift-desc">${g.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}


/* ================================================================
   BUILD GODPARENT CARDS
================================================================ */
function buildGodparents() {
  buildGPList('ninongs-list', invitationData.godparents.ninongs, 'Ninong', 'ninong');
  buildGPList('ninangs-list', invitationData.godparents.ninangs, 'Ninang', 'ninang');
}

function buildGPList(containerId, list, role, type) {
  const el = document.getElementById(containerId);
  if (!el) return;

  // One shared PNG per role — drop your files here:
  //   images/godparents/ninong.png  (used for ALL ninongs)
  //   images/godparents/ninang.png  (used for ALL ninangs)
  const iconSrc = type === 'ninong'
    ? 'images/godparents/ninong.png'
    : 'images/godparents/ninang.png';

  // Fallback emoji if PNG is not yet placed
  const fallbackEmoji = type === 'ninong' ? '👨' : '👩';

  el.innerHTML = list.map((gp, i) => {
    const delay     = Math.min(i + 1, 6);
    const animDelay = (i * 0.18).toFixed(2);
    return `
      <div class="gp-card anim-fade-up anim-delay-${delay}" role="listitem">
        <div class="gp-avatar gp-avatar--${type}" style="animation-delay:${animDelay}s">
          <img
            src="${iconSrc}"
            alt="${role} icon"
            class="gp-avatar-img"
            draggable="false"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          />
          <span class="gp-avatar-fallback" style="display:none">${fallbackEmoji}</span>
        </div>
        <div>
          <div class="gp-name">${gp.name}</div>
          <div class="gp-role">${role}</div>
        </div>
      </div>`;
  }).join('');
}


/* ================================================================
   GALLERY
================================================================ */
function setupGallery() {
  const track   = document.getElementById('gallery-track');
  const dotsEl  = document.getElementById('gallery-dots');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  if (!track) return;

  const items = invitationData.gallery;
  const slidesVisible = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 3 : 4;
  let current = 0;
  let autoTimer = null;

  // Build slides
  track.innerHTML = items.map((item, i) => `
    <div class="gallery-slide" role="listitem"
         tabindex="0"
         aria-label="${item.month}: ${item.caption}"
         data-index="${i}">
      <img class="gallery-slide-img"
           src="${item.image}"
           alt="${item.month} — ${item.caption}"
           loading="lazy"
           onerror="this.outerHTML='<div class=\\'gallery-slide-placeholder\\'><span>🐚</span><p>${item.month}</p></div>'" />
      <div class="gallery-slide-info">
        <div class="gallery-slide-month">${item.month}</div>
        <div class="gallery-slide-caption">${item.caption}</div>
      </div>
    </div>
  `).join('');

  function buildDots() {
    const total = Math.ceil(items.length / slidesVisible());
    dotsEl.innerHTML = Array.from({ length: total }, (_, i) =>
      `<div class="gallery-dot ${i === 0 ? 'active' : ''}"
            role="tab" tabindex="0"
            aria-label="Go to page ${i + 1}"
            data-page="${i}"></div>`
    ).join('');
    dotsEl.querySelectorAll('.gallery-dot').forEach(dot => {
      dot.addEventListener('click', () => { goTo(parseInt(dot.dataset.page)); resetAutoSlide(); });
      dot.addEventListener('keydown', e => { if (e.key === 'Enter') { goTo(parseInt(dot.dataset.page)); resetAutoSlide(); } });
    });
  }

  function goTo(page) {
    const vis = slidesVisible();
    const max = Math.max(0, Math.ceil(items.length / vis) - 1);
    current   = Math.max(0, Math.min(page, max));
    const slideEl = track.querySelector('.gallery-slide');
    const slideW  = slideEl ? slideEl.offsetWidth : 260;
    // On mobile we use gap:0 so step = slideW exactly; otherwise include the gap
    const isMob   = window.innerWidth < 600;
    const gap      = isMob ? 0 : 19;
    track.style.transform = `translateX(-${current * vis * (slideW + gap)}px)`;
    dotsEl.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function nextPage() {
    const vis  = slidesVisible();
    const max  = Math.max(0, Math.ceil(items.length / vis) - 1);
    goTo(current >= max ? 0 : current + 1);
  }

  function startAutoSlide() {
    autoTimer = setInterval(nextPage, 3000);
  }

  function resetAutoSlide() {
    clearInterval(autoTimer);
    startAutoSlide();
  }

  prevBtn?.addEventListener('click', () => { goTo(current - 1); resetAutoSlide(); });
  nextBtn?.addEventListener('click', () => { nextPage();         resetAutoSlide(); });

  // Pause on hover / touch
  track.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.addEventListener('mouseleave', () => startAutoSlide());

  // Swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; clearInterval(autoTimer); }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    startAutoSlide();
  });

  // Keyboard navigation on slides
  track.addEventListener('keydown', e => {
    const slide = e.target.closest('.gallery-slide');
    if (!slide) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(parseInt(slide.dataset.index));
    }
  });

  track.addEventListener('click', e => {
    const slide = e.target.closest('.gallery-slide');
    if (slide) openLightbox(parseInt(slide.dataset.index));
  });

  window.addEventListener('resize', () => { buildDots(); goTo(current); });
  buildDots();
  startAutoSlide();
}


/* ================================================================
   LIGHTBOX
================================================================ */
function setupLightbox() {
  const lb       = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbMonth  = document.getElementById('lightbox-month');
  const lbCap    = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn  = document.getElementById('lightbox-prev');
  const nextBtn  = document.getElementById('lightbox-next');
  if (!lb) return;

  let current = 0;
  const items = invitationData.gallery;

  window.openLightbox = function(index) {
    current = index;
    showLightboxItem(current);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  function showLightboxItem(i) {
    const item = items[i];
    if (!item) return;
    lbImg.src     = item.image;
    lbImg.alt     = `${item.month} — ${item.caption}`;
    lbMonth.textContent  = item.month;
    lbCap.textContent    = item.caption;
    lbImg.onerror = () => { lbImg.src = ''; lbImg.alt = 'Image not available'; };
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showLightboxItem(current);
  });
  nextBtn?.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showLightboxItem(current);
  });

  // Click outside inner
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { current = (current - 1 + items.length) % items.length; showLightboxItem(current); }
    if (e.key === 'ArrowRight') { current = (current + 1) % items.length; showLightboxItem(current); }
  });
}


/* ================================================================
   MEMORIES
================================================================ */
function buildMemories() {
  const grid = document.getElementById('memories-grid');
  if (!grid) return;

  grid.innerHTML = invitationData.memories.map((m, i) => `
    <div class="memory-card anim-fade-up anim-delay-${(i % 6) + 1}"
         role="button"
         tabindex="0"
         aria-label="View memory: ${m.title}"
         data-memory-index="${i}">
      <div class="memory-img-wrap">
        <img
          class="memory-img"
          src="${m.image || ''}"
          alt="${m.title}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <span class="memory-icon-fallback" style="display:none">${m.icon}</span>
      </div>
      <div class="memory-title">${m.title}</div>
      <div class="memory-desc">${m.description}</div>
    </div>
  `).join('');
}


/* ================================================================
   MEMORY LIGHTBOX
================================================================ */
function setupMemoryLightbox() {
  const lb          = document.getElementById('memory-lightbox');
  const lbImg       = document.getElementById('mlb-img');
  const lbPlaceholder = document.getElementById('mlb-placeholder');
  const lbFallback  = document.getElementById('mlb-fallback-icon');
  const lbTitle     = document.getElementById('mlb-title');
  const lbDesc      = document.getElementById('mlb-desc');
  const closeBtn    = document.getElementById('mlb-close');
  const prevBtn     = document.getElementById('mlb-prev');
  const nextBtn     = document.getElementById('mlb-next');
  if (!lb) return;

  const items = invitationData.memories;
  let current = 0;

  function openMemory(index) {
    current = index;
    showItem(current);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function showItem(i) {
    const m = items[i];
    if (!m) return;

    lbTitle.textContent = m.title;
    lbDesc.textContent  = m.description;

    // Reset state
    lbImg.style.display        = '';
    lbPlaceholder.style.display = 'none';
    lbImg.alt = m.title;

    if (m.image) {
      lbImg.src = m.image;
      lbImg.onerror = () => {
        lbImg.style.display         = 'none';
        lbPlaceholder.style.display = 'flex';
        lbFallback.textContent      = m.icon;
      };
    } else {
      lbImg.style.display         = 'none';
      lbPlaceholder.style.display = 'flex';
      lbFallback.textContent      = m.icon;
    }
  }

  function closeMemory() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeMemory);

  prevBtn?.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });
  nextBtn?.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
  });

  // Click outside modal inner → close
  lb.addEventListener('click', e => { if (e.target === lb) closeMemory(); });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      closeMemory();
    if (e.key === 'ArrowLeft')  { current = (current - 1 + items.length) % items.length; showItem(current); }
    if (e.key === 'ArrowRight') { current = (current + 1) % items.length; showItem(current); }
  });

  // Delegate clicks / keyboard on memory cards (built after this runs)
  document.getElementById('memories-grid')?.addEventListener('click', e => {
    const card = e.target.closest('[data-memory-index]');
    if (card) openMemory(parseInt(card.dataset.memoryIndex));
  });
  document.getElementById('memories-grid')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-memory-index]');
      if (card) { e.preventDefault(); openMemory(parseInt(card.dataset.memoryIndex)); }
    }
  });
}


/* ================================================================
   INTERACTIVE DETAIL CARDS
================================================================ */
function setupInteractiveCards() {
  document.querySelectorAll('.detail-card').forEach(card => {
    function toggle() {
      const isExpanded = card.classList.toggle('expanded');
      card.setAttribute('aria-expanded', isExpanded);
    }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}


/* ================================================================
   SCROLL ANIMATIONS (IntersectionObserver)
================================================================ */
function setupScrollAnimations() {
  const animClasses = ['.anim-fade-up', '.anim-fade-in', '.anim-scale-in', '.anim-slide-left', '.anim-slide-right'];
  const elements = document.querySelectorAll(animClasses.join(','));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => obs.observe(el));
}


/* ================================================================
   PARALLAX (desktop only)
================================================================ */
function setupParallax() {
  if (window.innerWidth < 900) return;

  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    document.querySelectorAll('.char-deco').forEach((el, i) => {
      const factor = (i % 3 + 1) * 6;
      el.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    });

    document.querySelectorAll('.frame-deco').forEach((el, i) => {
      const f = (i % 2 + 1) * 3;
      el.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
    });
  });
}


/* ================================================================
   MAIN INIT
================================================================ */
function initInvitation() {
  loadInvitationData();
  setupHeroNameAnimation();
  setupEnvelope();
  setupNavigation();
  setupCountdown();
  setupGallery();
  setupLightbox();
  buildMemories();
  setupMemoryLightbox();
  setupInteractiveCards();
  setupScrollAnimations();
  setupParallax();
  setupParticles();
}

/* ================================================================
   HERO NAME — ANIMATED LETTER WAVE
================================================================ */
function setupHeroNameAnimation() {
  const el = document.getElementById('hero-name');
  if (!el) return;

  const name = el.textContent.trim();
  if (!name) return;

  // Split into letter spans, each with a staggered animation delay
  let html = '';
  let letterIndex = 0;
  for (let i = 0; i < name.length; i++) {
    const ch = name[i];
    if (ch === ' ') {
      html += '<span class="hero-name-space" aria-hidden="true"> </span>';
    } else {
      const delay = (letterIndex * 0.08).toFixed(2);
      html += `<span class="hero-name-letter" style="animation-delay:${delay}s" aria-hidden="true">${ch}</span>`;
      letterIndex++;
    }
  }
  // Keep accessible text for screen readers, wrap all letters in one inline container
  el.innerHTML = `<span class="sr-only">${name}</span><span class="hero-name-letters" aria-hidden="true">${html}</span>`;
}

// Boot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInvitation);
} else {
  initInvitation();
}
