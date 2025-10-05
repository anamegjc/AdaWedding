// script.js - shared navigation & countdown
document.addEventListener('DOMContentLoaded', function(){
  // Highlight active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav.site-nav a');
  navLinks.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if(href === currentPath) a.classList.add('active');
  });

  // Countdown
  const countdownEls = document.querySelectorAll('.countdown');
  if(countdownEls.length){
    // Target: 2025-12-20 10:00 AM Abuja (UTC+1)
    const target = new Date(Date.UTC(2025,11,20,9,0,0)); // 10:00 local (UTC+1) -> 09:00 UTC
    function updateCountdown(){
      const now = new Date();
      const diff = target - now;
      if(diff <= 0){
        countdownEls.forEach(el => el.textContent = "The day has arrived! 🎉");
        return;
      }
      const days = Math.floor(diff / (1000*60*60*24));
      const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
      const secs = Math.floor((diff % (1000*60)) / 1000);
      const text = `${days} days • ${hours} hrs • ${mins} mins • ${secs} secs`;
      countdownEls.forEach(el => el.textContent = text);
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});
