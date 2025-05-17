const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});
