
var linksContainer = document.querySelector('.links');
var burgerIcon = document.getElementById('burg');
var arrowImage = document.querySelector('.arrow img');
var h1Text = document.querySelector('.header-txt h1');

burgerIcon.onclick = function() {
  linksContainer.classList.toggle('show');
  arrowImage.style.display = linksContainer.classList.contains('show') ? 'none' : 'block';
  h1Text.style.display = linksContainer.classList.contains('show') ? 'none' : 'block';

  if (linksContainer.classList.contains('show')) {
    linksContainer.style.justifyContent = 'center';
    linksContainer.style.alignItems = 'center';
  } else {
    linksContainer.style.justifyContent = '';
    linksContainer.style.alignItems = '';
  }
};