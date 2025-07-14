let ecmaScript = prompt('Какое твоё любимое авто?', '');
if (ecmaScript == "tesla") {
  alert( "WELCOME" );
}
else {
  alert ('Эй, чувак, уходи отсюда, ты не наш.'); 
}


  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerBtn.addEventListener('click', () => {
    const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
    burgerBtn.setAttribute('aria-expanded', !isExpanded);
    
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden', 'true');
    } else {
      mobileMenu.style.display = 'flex';
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
  });

