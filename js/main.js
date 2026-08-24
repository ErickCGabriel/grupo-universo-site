// Grupo Universo — interações leves, sem dependências externas

document.addEventListener('DOMContentLoaded', () => {
  // ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // menu mobile
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // textura dot-grid no hero — ecoa o globo de pontos do logo
  const canvas = document.getElementById('dotfield');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let w, h, dots;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
      const gap = 34;
      dots = [];
      for (let y = 0; y < h + gap; y += gap) {
        for (let x = 0; x < w + gap; x += gap) {
          dots.push({
            x: x + (Math.random() - 0.5) * 10,
            y: y + (Math.random() - 0.5) * 10,
            r: Math.random() * 1.6 + 0.6,
            p: Math.random() * Math.PI * 2
          });
        }
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dist = Math.hypot(d.x - w * 0.7, d.y - h * 0.35) / Math.max(w, h);
        const twinkle = 0.35 + 0.35 * Math.sin(t * 0.0006 + d.p);
        const fade = Math.max(0, 1 - dist * 1.3);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 195, 240, ${(0.12 + twinkle * 0.18) * fade})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
  }
});
