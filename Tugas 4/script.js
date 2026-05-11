// ===== TYPED TEXT EFFECT =====
const phrases = ["Front-End Developer", "Pixel Art Enthusiast", "UI / UX Explorer", "Code Artisan"];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById("typed-text");

function typeLoop() {
  const current = phrases[phraseIdx];
  typedEl.textContent = current.substring(0, charIdx);
  if (!deleting) {
    charIdx++;
    if (charIdx > current.length) { setTimeout(() => { deleting = true; typeLoop(); }, 1800); return; }
  } else {
    charIdx--;
    if (charIdx < 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; charIdx = 0; }
  }
  setTimeout(typeLoop, deleting ? 40 : 90);
}
typeLoop();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.add("hidden")));

// ===== FLOATING PIXEL PARTICLES =====
const particlesContainer = document.getElementById("particles");
const colors = ["#7c3aed", "#06b6d4", "#f472b6", "#34d399", "#fbbf24"];
for (let i = 0; i < 25; i++) {
  const p = document.createElement("div");
  p.className = "pixel-particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  p.style.animationDuration = 6 + Math.random() * 10 + "s";
  p.style.animationDelay = Math.random() * 8 + "s";
  p.style.width = p.style.height = (4 + Math.random() * 6) + "px";
  particlesContainer.appendChild(p);
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const bar = e.target;
      bar.style.width = bar.dataset.width;
      bar.classList.add("animated");
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-bar-fill").forEach(bar => barObserver.observe(bar));

// ===== SWIPER INIT =====
new Swiper(".projects-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

// ===== CONTACT FORM =====
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✉ Message sent! (demo)");
  e.target.reset();
});
