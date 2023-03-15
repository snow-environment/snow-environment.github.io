
import { render, html } from './lib.js'
const middleWarePageTemplate = () => html`





        <div class="middle-ware">
        
        <div class="project-cards">
  <div class="itom-card">
    <p class="cards-title">ITOM</p>
  </div>
  <div class="itsm-card">
    <p class="cards-title">ITSM</p>

  </div>
</div>
        
        
        
        </div>
 

`


export async function middleWarePage(ctx) {



  ctx.render(middleWarePageTemplate());
  let mainContentEl = document.querySelector('.main-content')
  mainContentEl.style.background = '#546666'
  mainContentEl.style.overflow = 'hidden'
  mainContentEl.classList.add('login-view')

  let itomCard = document.querySelector('.itom-card').addEventListener('click',()=>{
    ctx.page.redirect('/itom')
  })
  let itsmCard = document.querySelector('.itsm-card').addEventListener('click',()=>{
    ctx.page.redirect('/itsm')
  })
}