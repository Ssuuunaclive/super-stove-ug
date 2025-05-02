// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Lightbox for gallery images
const galleryImages = document.querySelectorAll('.gallery-img');
const lightboxOverlay = document.createElement('div');
lightboxOverlay.id = 'lightbox-overlay';
document.body.appendChild(lightboxOverlay);

const lightboxImage = document.createElement('img');
lightboxOverlay.appendChild(lightboxImage);

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxOverlay.style.display = 'flex';
  });
});

lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});
