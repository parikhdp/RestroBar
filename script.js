document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
          link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              const targetPosition = targetElement.offsetTop;
              window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
              });
            }
          });
        });
      });