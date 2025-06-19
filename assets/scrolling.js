document.addEventListener('DOMContentLoaded', function () {
  const runningLine = document.querySelector('.running-line');

  if (runningLine) {
    // Function to clone and append
    function cloneLine(times) {
      for (let i = 0; i < times; i++) {
        const clone = runningLine.cloneNode(true);
        clone.classList.add('cloned-line');
        runningLine.parentElement.appendChild(clone);
      }
    }

    cloneLine(2); // ✅ Clone it twice

    function calculateScroll() {
      const contentWidth = runningLine.scrollWidth;
      const scrollDistance = -contentWidth;
      const speed = 60;
      const duration = Math.abs(scrollDistance) / speed;

      document.documentElement.style.setProperty('--scroll-distance', `${scrollDistance}px`);

      // Apply duration to all running lines (original + clones)
      const allLines = document.querySelectorAll('.running-line');
      allLines.forEach(line => {
        line.style.animationDuration = `${duration}s`;
      });
    }

    calculateScroll();
    window.addEventListener('resize', calculateScroll);
  }
});