const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.querySelector('.nav-bar-ul-2');
const x = document.querySelector('.cancel');
const nightMode = document.querySelector('.night-btn');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.style.display = 'none';
  x.style.display = 'block';
});

function closer() {
  x.style.display = 'none';
  navbarLinks.classList.remove('active');
  toggleButton.style.display = 'block';
}
x.addEventListener('click', closer);

function toggleNightMode() {
  var body = document.body;
  var currentClass = body.className;
  body.className = currentClass == "night-mode" ? "" : "night-mode";
}

nightMode.addEventListener('click', toggleNightMode);
