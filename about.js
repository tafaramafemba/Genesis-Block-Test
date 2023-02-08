const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.querySelector('.nav-bar-ul');
const x = document.querySelector('.cancel');
const nightMode = document.querySelector('.night-btn');
const a = document.querySelector('.a');

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
  a.style.color = "white";
}

nightMode.addEventListener('click', toggleNightMode);
