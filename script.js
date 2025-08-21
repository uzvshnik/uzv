
const burger = document.querySelector('.burger');
const mobile = document.querySelector('.mobile');
if(burger){
  burger.addEventListener('click', ()=>{
    mobile.classList.toggle('open');
  });
}
function smoothScrollTo(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth'});
}
document.querySelectorAll('[data-scroll]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    smoothScrollTo(a.getAttribute('href'));
    mobile?.classList.remove('open');
  });
});
