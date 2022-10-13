const themeToggle = document.querySelector('#moon_sun');
themeToggle.addEventListener('click', () => {
    document.body.classList.contains('dark-theme')
      ? enableDarkMode()
      : enableLightMode();
  });
  
  const enableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  };
  
  const enableLightMode = () => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  };
