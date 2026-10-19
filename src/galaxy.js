// src/galaxy.js
document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero-section");
  if (!heroSection) return;

  // Create canvas for the hero galaxy
  const canvas = document.createElement("canvas");
  canvas.id = "hero-galaxy-canvas";
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "1"; // Sits above background, below text
  
  // Ensure hero section is positioned
  if (getComputedStyle(heroSection).position === "static") {
    heroSection.style.position = "relative";
  }
  
  heroSection.prepend(canvas);

  const ctx = canvas.getContext("2d");
  
  function resizeCanvas() {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Generate starfield particles
  const starCount = 140;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.2 + 0.5,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
    });
  }

  function animateGalaxy() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw glowing nebula center
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, canvas.width * 0.5);
    gradient.addColorStop(0, "rgba(139, 92, 246, 0.25)");
    gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.1)");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render and move stars
    stars.forEach((star) => {
      star.y -= star.speed;
      if (star.y < 0) star.y = canvas.height;

      star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.015;
      star.opacity = Math.max(0.15, Math.min(1, star.opacity));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(216, 180, 254, ${star.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#c084fc";
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(animateGalaxy);
  }

  animateGalaxy();
});