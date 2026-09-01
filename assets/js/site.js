document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll("[data-slide]"));
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");
  const dots = document.createElement("div");
  let active = 0;

  dots.className = "carousel-dots";
  dots.setAttribute("aria-label", "Choose image");

  function show(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== active;
    });
    Array.from(dots.children).forEach((dot, i) => {
      dot.setAttribute("aria-pressed", String(i === active));
    });
  }

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Show image ${i + 1}`);
    dot.addEventListener("click", () => show(i));
    dots.appendChild(dot);
  });

  carousel.appendChild(dots);

  if (slides.length <= 1) {
    if (prev) prev.hidden = true;
    if (next) next.hidden = true;
    dots.hidden = true;
    return;
  }

  if (prev) prev.addEventListener("click", () => show(active - 1));
  if (next) next.addEventListener("click", () => show(active + 1));
  show(0);
});

document.querySelectorAll("[data-hero-slider]").forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll(".hero-bg-slide"));
  const prev = slider.querySelector("[data-hero-prev]");
  const next = slider.querySelector("[data-hero-next]");
  let active = 0;
  let timer;

  function show(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === active);
    });
  }

  function start() {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(active + 1), 6500);
  }

  if (slides.length <= 1) {
    if (prev) prev.hidden = true;
    if (next) next.hidden = true;
    return;
  }

  if (prev) prev.addEventListener("click", () => {
    show(active - 1);
    start();
  });

  if (next) next.addEventListener("click", () => {
    show(active + 1);
    start();
  });

  show(0);
  start();
});
