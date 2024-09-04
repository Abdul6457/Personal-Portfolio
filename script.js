
// js for menu-toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});

// Accordion section start
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');

    // Close any other open accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem && item.classList.contains('active')) {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = '0';
      }
    });

    // Toggle current accordion item
    accordionItem.classList.toggle('active');
    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = '0';
    }
  });
});




