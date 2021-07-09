const sale = document.querySelector('.sale')
const contentSale =`
<h2>Promoções da Casa</h2>
<ul>
    <li>
        <img src="./image/1.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/2.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/3.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/4.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/5.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/6.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
</ul>
`
function addSection(){
    const winTop = window.pageYOffset
    if(winTop > sale.offsetTop){
        sale.innerHTML = contentSale
    }
}
window.addEventListener("scroll",addSection)