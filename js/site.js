(function(){
var r=document.documentElement,t=document.getElementById('theme');
function set(d){r.classList.toggle('dark',d);t.setAttribute('aria-pressed',d);try{localStorage.setItem('miz',d?'1':'0')}catch(e){}}
try{if(localStorage.getItem('miz')==='1')set(true)}catch(e){}
t.addEventListener('click',function(){set(!r.classList.contains('dark'))});
document.querySelectorAll('[data-uv]').forEach(function(b){b.addEventListener('click',function(){
var on=b.closest('.in').classList.toggle('uv');b.setAttribute('aria-pressed',on);b.textContent='Blacklight '+(on?'on':'off')})});
var o=document.getElementById('open');
if(o){var n=new Date(new Date().toLocaleString('en-US',{timeZone:'America/Chicago'})),d=n.getDay(),h=n.getHours(),on=d>=2&&d<=6&&h>=13&&h<18;
o.textContent=on?'Open now':'Closed right now';o.className='pill'+(on?' on':'')}
})();
