const menu = document.querySelector('.menu')
const content = `
            <h2>Nosso Menu</h2>
            <ul>
                <li>
                    <img src="./image/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg" loading="lazy" alt="">
                    <h3>X-Calabresa</h3>
                    <hr>
                    <p>R$ 25,99</p>
                </li>
                <li>
                    <img src="./image/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg" loading="lazy" alt="">
                    <h3>X-alegria</h3>
                    <hr>
                    <p>R$ 24,99</p>
                </li>
                <li>
                    <img src="./image/junior-reis-CARZIAncm3Y-unsplash.jpg" loading="lazy" alt="">
                    <h3>X-bacon</h3>
                    <hr>
                    <p>R$ 14,99</p>
                </li>
                <li>
                    <img src="./image/junior-reis-FE0gqRJaDxk-unsplash.jpg" loading="lazy" alt="">
                    <h3>X-aventura</h3>
                    <hr>
                    <p>R$ 27,99</p>
                </li>
                <li>
                    <img src="./image/louis-hansel-vi0kZuoe0-8-unsplash.jpg" loading="lazy" alt="">
                    <h3>X-todo dia</h3>
                    <hr>
                    <p>R$ 35,99</p>
                </li>
                <li>
                    <img src="./image/roberto-carlos-roman-don-AC6IAIhP4Yk-unsplash.jpg" loading="lazy" alt="">
                    <h3>X-milanesa</h3>
                    <hr>
                    <p>R$ 15,99</p>
                </li>
            </ul>
`
function addSection(){
    const winTop = window.pageYOffset
    if(winTop > menu.offsetTop){
        menu.innerHTML = content
    }
}
window.addEventListener("scroll",addSection)