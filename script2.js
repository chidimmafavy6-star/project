let cart=[];
function showPage(name){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById('page-'+name).classList.add('active');
 document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
 document.getElementById('nav-'+name)?.classList.add('active');
 window.scrollTo(0,0);
}
function addToCart(n,p){
 let f=cart.find(x=>x.name===n);
 if(f){f.qty++}else{cart.push({name:n,price:p,qty:1})}
 updateCartDisplay();openCart();
}
function increaseQty(i){cart[i].qty++;updateCartDisplay()}
function decreaseQty(i){if(cart[i].qty>1){cart[i].qty--}else{cart.splice(i,1)}updateCartDisplay()}
function removeFromCart(i){cart.splice(i,1);updateCartDisplay()}
function updateCartDisplay(){
 let c=cart.reduce((s,x)=>s+x.qty,0);
 let t=cart.reduce((s,x)=>s+x.price*x.qty,0);
 document.getElementById('cartCount').textContent=c;
 document.getElementById('drawerCount').textContent=c;
 document.getElementById('cartTotal').textContent=t.toFixed(2);
 let d=document.getElementById('cartItems');
 if(cart.length===0){d.innerHTML='<p style="text-align:center;opacity:.5">Bag empty</p><button class="btn-black small" onclick="addToCart(\'SERUM\',56)">Add Serum $56</button> <button class="btn-black small" onclick="addToCart(\'CREAM\',68)">Add Cream $68</button>';return}
 d.innerHTML=cart.map((x,i)=>`<div class="cart-item"><div><b>${x.name}</b><br><span>$${x.price} x ${x.qty} = $${(x.price*x.qty).toFixed(2)}</span><div class="qty-controls"><button class="qty-btn" onclick="decreaseQty(${i})">−</button><span class="qty-num">${x.qty}</span><button class="qty-btn" onclick="increaseQty(${i})">+</button></div></div><i class="fa-solid fa-xmark" onclick="removeFromCart(${i})"></i></div>`).join('');
}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('overlay').classList.add('show')}
function toggleCart(){document.getElementById('cartDrawer').classList.toggle('open');document.getElementById('overlay').classList.toggle('show')}
function closeDrawers(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('overlay').classList.remove('show')}
function subscribe(){let e=document.getElementById('emailInput').value;if(!e.includes('@')){alert('Valid email bby');return}alert('Subscribed '+e);document.getElementById('emailInput').value=''}
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();alert('Message sent bby!');e.target.reset()})