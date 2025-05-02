document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.dropdown-btn');
  
    buttons.forEach((button) => {
      const targetId = button.getAttribute('data-target');
      const content = document.getElementById(targetId);
  
      button.addEventListener('click', () => {
        content.style.display = 'block';
      });
  
      button.addEventListener('dblclick', () => {
        content.style.display = 'none';
      });
    });
  });