let cart=[];let currentSlide=0;let slideInterval=null;
function showPage(pageName){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 const target=document.getElementById('page-'+pageName);if(target){target.classList.add('active');window.scrollTo(0,0);}
 document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
 let navId='nav-'+pageName;if(pageName==='all-products')navId='nav-all';if(pageName==='luxury')navId='nav-luxury';
 const activeNav=document.getElementById(navId);if(activeNav)activeNav.classList.add('active');
}
function addToCart(name,price){
 cart.push({name,price});updateCartDisplay();openCart();
}
function removeFromCart(index){cart.splice(index,1);updateCartDisplay();}
function updateCartDisplay(){
 const count=cart.length;const total=cart.reduce((s,i)=>s+i.price,0);
 document.getElementById('cartCount').textContent=count;
 document.getElementById('drawerCount').textContent=count;
 document.getElementById('cartTotal').textContent=total.toFixed(2);
 const items=document.getElementById('cartItems');
 if(cart.length===0){items.innerHTML='<p class="empty-cart">Your bag is empty</p>';return;}
 items.innerHTML=cart.map((c,i)=>`<div style="display:flex;justify-content:space-between;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid #F5F5F5"><div><b style="font-size:11px">${c.name}</b><br><span style="font-size:11px;opacity:.7">$${c.price}</span></div><i class="fa-solid fa-xmark" onclick="removeFromCart(${i})" style="cursor:pointer;opacity:.5"></i></div>`).join('');
}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('overlay').classList.add('show');}
function toggleCart(){document.getElementById('cartDrawer').classList.toggle('open');document.getElementById('overlay').classList.toggle('show');}
function closeDrawers(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('overlay').classList.remove('show');}
function initSlideshow(){
 const slides=document.querySelectorAll('.bg-slide');if(slides.length===0)return;
 if(slideInterval)clearInterval(slideInterval);
 slideInterval=setInterval(()=>{currentSlide=(currentSlide+1)%slides.length;updateSlideDisplay();},4000);
}
function updateSlideDisplay(){
 const slides=document.querySelectorAll('.bg-slide');const dots=document.querySelectorAll('.dot');
 slides.forEach((s,i)=>s.classList.toggle('active',i===currentSlide));
 dots.forEach((d,i)=>d.classList.toggle('active',i===currentSlide));
}
function goToSlide(n){currentSlide=n;updateSlideDisplay();if(slideInterval)clearInterval(slideInterval);initSlideshow();}
function subscribe(){
 const email=document.getElementById('emailInput').value.trim();
 if(!email.includes('@')){alert('Please enter valid email bby');return;}
 alert('Thank you bby! Subscribed: '+email+' ✨');document.getElementById('emailInput').value='';
}
document.addEventListener('DOMContentLoaded',()=>{
 initSlideshow();
 document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();alert('Message sent bby! We will reply soon 💛');e.target.reset();});
});