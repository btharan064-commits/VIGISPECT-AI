let slide=0;const slides=document.querySelectorAll('.hero-slide'),dots=document.querySelectorAll('.hero-dots button');
function goSlide(n){slide=(n+slides.length)%slides.length;slides.forEach((x,i)=>x.classList.toggle('active',i===slide));dots.forEach((x,i)=>x.classList.toggle('on',i===slide))}
function changeSlide(n){goSlide(slide+n)}
setInterval(()=>changeSlide(1),7000);
function openPS(){document.getElementById('psModal').classList.add('open');document.body.style.overflow='hidden'}
function closePS(){document.getElementById('psModal').classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePS()});