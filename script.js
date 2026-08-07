
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".site-nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed");observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll(".reveal-card").forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*80}ms`;observer.observe(el);});
