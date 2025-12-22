function toggleMenu(){
  const el = document.getElementById('mobileMenu');
  el.classList.toggle('open');
}

(function(){
  const items = document.querySelectorAll('.card, .hero-side, .table');
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.style.transition = 'transform 700ms ease, opacity 700ms ease';
        e.target.style.transform = 'translateY(0px)';
        e.target.style.opacity = '1';
        io.unobserve(e.target);
      }
    }
  }, {threshold: 0.12});
  items.forEach(el=>{
    el.style.transform='translateY(10px)';
    el.style.opacity='0';
    io.observe(el);
  });
})();
