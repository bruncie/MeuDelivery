const combo = document.getElementById("combo")
const contentCombo = `
<h2>Combos Especiais</h2>
<ul>
    <li>
        <img src="./image/7.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/8.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/9.png" loading="lazy" alt="">
        <div class="text">
            <h3>Mega X-bacon</h3>
            <p>R$ 25,90</p>
            <a href="#">Peça agora</a>
        </div>
    </li>
    <li>
        <img src="./image/1.png" loading="lazy" alt="">
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
        <img src="./image/5.png" loading="lazy" alt="">
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
    if(winTop > combo.offsetTop){
        combo.innerHTML = contentCombo
    }
}
window.addEventListener("scroll",addSection)