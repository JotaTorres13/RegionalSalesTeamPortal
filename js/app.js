setInterval(()=>document.getElementById('clock').textContent=new Date().toLocaleString(),1000);
const b=document.getElementById('theme');b.onclick=()=>document.body.classList.toggle('light');