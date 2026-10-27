const D = PORTFOLIO_DATA;
const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
function applyTheme(t) { root.classList.remove("dark", "light"); root.classList.add(t); localStorage.setItem("theme", t); }
const saved = localStorage.getItem("theme");
applyTheme(saved || "dark");
themeBtn.addEventListener("click", () => { applyTheme(root.classList.contains("dark") ? "light" : "dark"); });

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open"); navToggle.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false");
}));

const typingEl = document.getElementById("typing-text");
const phrases = D.typingPhrases;
let pi = 0, ci = 0, deleting = false;
function typeLoop() {
  const current = phrases[pi];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ci + 1);
    ci++;
    if (ci === current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
    setTimeout(typeLoop, 60);
  } else {
    typingEl.textContent = current.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
    setTimeout(typeLoop, 35);
  }
}
typeLoop();

function iconSvg(name) {
  const icons = {
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.14-.02-2.07-3.2.69-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  };
  return icons[name] || "";
}
function socialLink(href, name, label) {
  const a = document.createElement("a");
  a.href = href; a.className = "social-icon"; a.setAttribute("aria-label", label);
  a.target = "_blank"; a.rel = "noopener noreferrer";
  a.innerHTML = iconSvg(name);
  return a;
}
const heroSocials = document.getElementById("hero-socials");
heroSocials.appendChild(socialLink(D.github, "github", "GitHub"));
heroSocials.appendChild(socialLink(D.linkedin, "linkedin", "LinkedIn"));
heroSocials.appendChild(socialLink("mailto:" + D.email, "email", "Email"));
document.getElementById("bio-text").textContent = D.bio;
document.getElementById("meta-role").textContent = D.role;
document.getElementById("meta-location").textContent = D.location;
document.getElementById("meta-avail").textContent = D.availability;
const skillsContainer = document.getElementById("skills-container");
Object.entries(D.skills).forEach(([group, items]) => {
  const div = document.createElement("div");
  div.className = "skill-group";
  div.innerHTML = `<h4>${group}</h4><div class="skill-tags">${items.map((s) => `<span class="tag">${s}</span>`).join("")}</div>`;
  skillsContainer.appendChild(div);
});

const projectsGrid = document.getElementById("projects-grid");
D.projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.innerHTML = `
    <div class="card-top">
      <h3>${p.title}</h3>
      <div class="card-links">
        <a class="card-link" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository for ${p.title}">${iconSvg("github")}</a>
        <a class="card-link" href="${p.demo}" target="_blank" rel="noopener noreferrer" aria-label="Live demo for ${p.title}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </div>
    <p>${p.description}</p>
    <div class="project-tags">${p.tech.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
  `;
  projectsGrid.appendChild(card);
});

const timeline = document.getElementById("timeline");
D.experience.forEach((e) => {
  const item = document.createElement("div");
  const typeClass = e.type === "edu" ? "edu" : e.type === "cert" ? "cert" : "";
  item.className = `tl-item ${typeClass} reveal`;
  item.innerHTML = `
    <div class="tl-dot"></div>
    <div class="tl-period">${e.period}</div>
    <h3 class="tl-title">${e.title}</h3>
    <p class="tl-org">${e.org}</p>
    <ul class="tl-points">${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
  `;
  timeline.appendChild(item);
});

const blogGrid = document.getElementById("blog-grid");
D.blog.forEach((b) => {
  const card = document.createElement("article");
  card.className = "blog-card reveal";
  card.innerHTML = `
    <span class="blog-tag">${b.tag}</span>
    <h3>${b.title}</h3>
    <p>${b.excerpt}</p>
    <div class="blog-meta"><span>${b.date}</span><a class="blog-link" href="${b.link}">Read →</a></div>
  `;
  blogGrid.appendChild(card);
});

const contactLinks = document.getElementById("contact-links");
const cl = [
  { href: D.github, name: "github", label: "GitHub" },
  { href: D.linkedin, name: "linkedin", label: "LinkedIn" },
  { href: "mailto:" + D.email, name: "email", label: D.email },
];
cl.forEach((c) => {
  const a = document.createElement("a");
  a.href = c.href; a.target = c.name === "email" ? "_self" : "_blank"; a.rel = "noopener noreferrer";
  a.innerHTML = `${iconSvg(c.name)}<span>${c.label}</span>`;
  contactLinks.appendChild(a);
});

const footerSocials = document.getElementById("footer-socials");
[["github", D.github, "GitHub"], ["linkedin", D.linkedin, "LinkedIn"]].forEach(([name, href, label]) => {
  footerSocials.appendChild(socialLink(href, name, label));
});
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Contact form ----------
const form = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
const toast = document.getElementById("toast");
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 3200);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) { formNote.textContent = "Please fill in all fields."; formNote.style.color = "#f87171"; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { formNote.textContent = "Please enter a valid email."; formNote.style.color = "#f87171"; return; }
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email client…";
  formNote.style.color = "var(--text-muted)";
  showToast("Thanks! Your email client should open now.");
  form.reset();
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

// ---------- Particle canvas (neural network) ----------
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let W, H, dpr;
function resize() {
  dpr = window.devicePixelRatio || 1;
  W = canvas.clientWidth || window.innerWidth;
  H = canvas.clientHeight || window.innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function initParticles() {
  const count = Math.min(90, Math.floor((W * H) / 14000));
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.8,
    });
  }
}
let mouse = { x: -9999, y: -9999 };
canvas.addEventListener("mousemove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
canvas.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });
function draw() {
  ctx.clearRect(0, 0, W, H);
  const isDark = root.classList.contains("dark");
  const dotColor = isDark ? "rgba(59,130,246,0.7)" : "rgba(59,130,246,0.5)";
  const lineColor = isDark ? "rgba(139,92,246,0.18)" : "rgba(139,92,246,0.12)";
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    // mouse repel
    const dx = p.x - mouse.x, dy = p.y - mouse.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 120 && dist > 0) { p.x += (dx / dist) * 0.6; p.y += (dy / dist) * 0.6; }
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = dotColor; ctx.fill();
  }
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i], b = particles[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 130) {
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = lineColor; ctx.globalAlpha = 1 - d / 130;
        ctx.lineWidth = 1; ctx.stroke(); ctx.globalAlpha = 1;
      }
    }
  }
  requestAnimationFrame(draw);
}
function startParticles() {
  resize(); initParticles(); draw();
}
window.addEventListener("resize", () => { resize(); initParticles(); });
startParticles();

