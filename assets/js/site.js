document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll("[data-slide]"));
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");
  let active = 0;

  function show(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== active;
    });
  }

  if (slides.length <= 1) {
    if (prev) prev.hidden = true;
    if (next) next.hidden = true;
    return;
  }

  if (prev) prev.addEventListener("click", () => show(active - 1));
  if (next) next.addEventListener("click", () => show(active + 1));
  show(0);
});
