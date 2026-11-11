(function(){
var r=document.documentElement,t=document.getElementById('theme');
function set(d){r.classList.toggle('dark',d);t.setAttribute('aria-pressed',d);try{localStorage.setItem('miz',d?'1':'0')}catch(e){}}
try{if(localStorage.getItem('miz')==='1')set(true)}catch(e){}
t.addEventListener('click',function(){set(!r.classList.contains('dark'))});
document.querySelectorAll('.quiz').forEach(function(q){q.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){
var ok=b.hasAttribute('data-ok');b.classList.add(ok?'right':'wrong');
q.querySelector('.fb').textContent=ok?'Correct! '+q.dataset.why:'Not quite. Try another answer!';
if(ok)q.querySelectorAll('button').forEach(function(x){x.disabled=true})})})});
document.querySelectorAll('[data-uv]').forEach(function(b){b.addEventListener('click',function(){
var on=b.closest('section').classList.toggle('uv');b.setAttribute('aria-pressed',on);b.textContent='Blacklight '+(on?'on':'off')})});
})();
