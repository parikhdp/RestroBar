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
      function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailErrorMessage = document.getElementById('emailErrorMessage');
    
        if (!emailInput.checkValidity()) {
          emailErrorMessage.style.display = 'block';
        } else {
          emailErrorMessage.style.display = 'none';
          // You can put your form submission logic here
        }
      }