function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // Customize when the animation triggers

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      // Add the 'visible' class if the section is within view
      if (sectionTop < windowHeight - revealPoint) {
        section.classList.add('visible');
      }
    });
  }

  // Add scroll event listener to trigger reveal function
  window.addEventListener('scroll', revealOnScroll);

  // Initial call in case sections are already in view on page load
  revealOnScroll();