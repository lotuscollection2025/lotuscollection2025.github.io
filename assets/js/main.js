(function () {
  // Carousel setup
  const wrap = document.querySelector('.carousel-wrap');
  const track = wrap?.querySelector('.carousel-track');
  const dotsWrap = wrap?.querySelector('.carousel-dots');
  const prev = wrap?.querySelector('.carousel-prev');
  const next = wrap?.querySelector('.carousel-next');
  const slides = track ? track.querySelectorAll('.slide') : [];
  let index = 0;

  if (wrap && track && dotsWrap && prev && next && slides.length) {
    const updateDots = () => {
      dotsWrap.querySelectorAll('.dot').forEach(d => d.removeAttribute('aria-current'));
      const dot = dotsWrap.querySelectorAll('.dot')[index];
      if (dot) dot.setAttribute('aria-current', 'true');
    };

    const goTo = (i) => {
      index = Math.max(0, Math.min(i, slides.length - 1));
      track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
      updateDots();
    };

    prev.addEventListener('click', () => goTo(index - 1));
    next.addEventListener('click', () => goTo(index + 1));

    dotsWrap.querySelectorAll('.dot').forEach((d, i) =>
      d.addEventListener('click', () => goTo(i))
    );

    let t;
    track.addEventListener(
      'scroll',
      () => {
        clearTimeout(t);
        t = setTimeout(() => {
          index = Math.round(track.scrollLeft / track.clientWidth);
          updateDots();
        }, 80);
      },
      { passive: true }
    );

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(index + 1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(index - 1);
      }
    });

    window.addEventListener('resize', () => goTo(index));

    updateDots();
  }

  // Initial render
  if (typeof render === 'function' && window.PRODUCTS) {
    render(window.PRODUCTS);
  }

  // Filters
  const filterChips = document.querySelectorAll('.chip[data-filter]');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelector('.chip--active')?.classList.remove('chip--active');
      chip.classList.add('chip--active');
      if (typeof applyFilter === 'function') {
        applyFilter(chip.dataset.filter);
      }
    });
  });
})();