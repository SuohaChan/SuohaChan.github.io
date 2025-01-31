document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', function() {
      let dropdownContent = this.querySelector('.dropdown-content');
      dropdownContent.style.display = 'block';
    });
    dropdown.addEventListener('mouseout', function() {
      let dropdownContent = this.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    });
  });
//   多功能格显示的js代码