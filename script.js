const links=[...document.querySelectorAll('.nav-link')];
const sections=[...document.querySelectorAll('section[id]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible'); const id=e.target.id; links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+id));}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>sectionObserver.observe(s));
const menu=document.querySelector('.menu'); const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='65px';nav.style.right='0';nav.style.flexDirection='column';nav.style.background='rgba(244,240,230,.96)';nav.style.padding='10px';nav.style.border='1px solid var(--line)';nav.style.borderRadius='18px';});
