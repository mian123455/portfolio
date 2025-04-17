<script>
  document.querySelector('a[href="#services-area"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.getElementById('services-area');
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 💡 Duration in milliseconds (1000ms = 1s)
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const scroll = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, scroll);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    }

    window.requestAnimationFrame(step);
  });
</script>
