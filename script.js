const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.style.animationPlayState='running';observer.unobserve(entry.target)}})},{threshold:.12});
revealItems.forEach((el)=>{el.style.animationPlayState='paused';observer.observe(el)});

// Subtle image parallax on desktop.
const heroImage=document.querySelector('.hero-image-card img');
window.addEventListener('scroll',()=>{
  if(!heroImage || window.innerWidth<850)return;
  const y=Math.min(window.scrollY*.06,30);
  heroImage.style.transform=`scale(1.04) translateY(${y}px)`;
},{passive:true});
