    // Script para la animación de la línea diagonal - Reemplaza jQuery
    document.addEventListener('DOMContentLoaded', function() {
      const line = document.querySelector('.diagonal-bg svg line');
      const initialWidth = parseFloat(line.getAttribute('stroke-width')); // lee el 60 del HTML
      let lastKnownScrollPosition = 0;
      let ticking = false;
      
      function updateDiagonal(scrollPos) {
        const strokeWidth = initialWidth + scrollPos / 20;
        document.querySelector('.diagonal-bg svg line').setAttribute('stroke-width', strokeWidth + '%');
      }
      
      window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;
        
        if (!ticking) {
          window.requestAnimationFrame(function() {
            updateDiagonal(lastKnownScrollPosition);
            ticking = false;
          });
          
          ticking = true;
        }
      });
    });
