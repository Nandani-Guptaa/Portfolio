// Simple animation loader or interactivity
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach(section => {
    section.classList.add('invisible');
    observer.observe(section);
  });
});

// Optional animation classes
const style = document.createElement('style');
style.innerHTML = `
.invisible {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease, transform 1s ease;
}
.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
`;
document.head.appendChild(style);

// navButtons.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     // Remove active class from all nav buttons
//     navButtons.forEach((b) => b.classList.remove('active'));
//     // Add active class to clicked button
//     btn.classList.add('active');

//     // Hide all sections
//     sections.forEach((sec) => sec.classList.remove('active'));

//     // Show the target section
//     const targetId = btn.getAttribute('data-target');
//     const targetSection = document.getElementById(targetId);
//     if (targetSection) {
//       targetSection.classList.add('active');
//       targetSection.focus(); // Accessibility: focus the section for keyboard users
//     }
//   });
// });
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  });
});
