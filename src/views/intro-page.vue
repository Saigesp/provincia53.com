<template>
  <div class="intro">

    <div class="intro__back intro__back--0" :class="{'is-deactive': currentSlide >= 2}">
    </div>
    <div class="intro__back intro__back--1" :class="{'is-active': isActive1, 'is-deactive': currentSlide >= 3}">
      <div class="overblack" :class="{'is-active': isActive2}"></div>
    </div>
    <div class="intro__back intro__back--3" :class="{'is-active': isActive3, 'is-deactive': currentSlide >= 5}">
    </div>
    <div class="intro__back intro__back--4" :class="{'is-active': isActive4, 'is-deactive': currentSlide >= 6}">
      <div class="overblack" :class="{'is-active': isActive5}"></div>
    </div>
    <div class="intro__back intro__back--7" :class="{'is-active': isActive7, 'is-deactive': currentSlide >= 9}">
      <div class="overblack" :class="{'is-active': isActive8}"></div>
    </div>
    <div class="intro__back intro__back--11" :class="{'is-active': isActive11, 'is-deactive': currentSlide >= 13}">
      <div class="overblack" :class="{'is-active': isActive12}"></div>
    </div>
    <div class="intro__back intro__back--16" :class="{'is-active': isActive16, 'is-deactive': currentSlide >= 17}">
    </div>
    <div class="intro__back intro__back--17" :class="{'is-active': isActive17, 'is-deactive': currentSlide >= 18}">
    </div>
    <div class="intro__back intro__back--18" :class="{'is-active': isActive18, 'is-deactive': currentSlide >= 19}">
    </div>
    <div class="intro__back intro__back--19" :class="{'is-active': isActive19, 'is-deactive': currentSlide >= 20}">
    </div>
    <div class="intro__back intro__back--20" :class="{'is-active': isActive20, 'is-deactive': currentSlide >= 21}">
    </div>
    <div class="intro__back intro__back--21" :class="{'is-active': isActive21, 'is-deactive': currentSlide >= 22}">
    </div>
    <div class="intro__back intro__back--25" :class="{'is-active': isActive25}">
    </div>


    <div class="intro__wrap" :class="`intro__wrap--${currentSlide}`">
      <div class="intro__block">
        <div class="skip__wrap">
          <router-link :to="{name: 'home'}"><span>Saltar intro</span><img src="/static/img/icons/left-arrow.svg" alt="Skip"></router-link>
        </div>
        <div class="text__wrap">
          <div></div>
          <p style="background: black; display: inline-block; max-width: 600px; padding: 10px;">Imagínate que naciste a principios de los años 70...</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block">
        <div class="text__wrap">
          <div></div>
          <p>...en una capital española de provincias.</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block">
        <div class="text__wrap">
          <div></div>
          <p>¿Te acuerdas de tu infancia?<br><span>Aquel calor insoportable en los veranos...</span></p>
        </div>
      </div>
      <div class="intro__block intro__block--excursiones">
        <div class="photo__wrap"></div>
        <div class="text__wrap">
          <div></div>
          <p><span class="pre"> Las excursiones </span><br>de los fines de semana con tus primos</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block">
        <div class="text__wrap text__wrap--block">
          <div></div>
          <p>y el primer coche en el que te montaste. Era del jefe de correos, que lo aparcaba no muy lejos de casa y siempre lo estabas mirando. Una vez te dejó sentarte alante, agarrar el volante y hacer como que conducías.</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block intro__block--otono">
        <div class="photo__wrap"></div>
        <div class="text__wrap">
          <div></div>
          <p><span style="background: white">El otoño de 1975 tenías nervios</span><br>Acababas de empezar la escuela<br>¿Te imaginas? Todo era nuevo.</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block intro__block--desfile">
        <div class="text__wrap text__wrap--block">
          <div></div>
          <p>Esos días los mayores también estaban nerviosos. Franco estaba a punto de morir y por lo visto eso era muy importante.</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block intro__block--coche">
        <div class="photo__wrap"></div>
        <div class="text__wrap text__wrap--block">
          <div></div>
          <p>Pero de eso no te acuerdas demasiado, claro. Imagínate, al fin y al cabo, solo tenías cinco o seis años.</p>
        </div>
      </div>
      <div class="intro__block intro__block--recuerdos">
        <div class="text__wrap">
          <div></div>
          <p>De lo que sí te acuerdas muy bien es de lo que pasó luego.</p>
        </div>
      </div>
      <div class="intro__block intro__block--bombardeos">
        <div class="text__wrap">
          <div></div>
          <p><span> Los bombardeos </span></p>
        </div>
      </div>
      <div class="intro__block intro__block--huida">
        <div class="text__wrap">
          <div></div>
          <p><span> La huida </span></p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block intro__block--empty"></div>
      <div class="intro__block intro__block--miedo">
        <div class="text__wrap">
          <div></div>
          <p><span>El miedo</span></p>
        </div>
      </div>
      <div class="intro__block intro__block--empty"></div>

      <div class="intro__block  intro__block--last">
        <div class="photo__wrap"></div>
        <div class="text__wrap">
          <div></div>
          <p>¿Te imaginas?</p>
        </div>
      </div>

      <div class="intro__block  intro__block--last">
        <div class="photo__wrap"></div>
        <div class="text__wrap">
          <div></div>
          <p>No hace falta que te lo imagines:<br>Esta historia existe</p>
        </div>
      </div>

      <div class="intro__block  intro__block--last">
        <div class="photo__wrap"></div>
        <div class="text__wrap">
          <div></div>
          <p>Es la historia de la provincia 53</p>
        </div>
      </div>

      <div class="intro__block intro__block--logo">
        <div class="text__wrap">
          <div></div>
          <p>
            <router-link :to="{name: 'home'}">
              <img src="/static/img/logo.svg" alt="Logo">
              <i>Ver contenido</i>
            </router-link>
          </p>
        </div>
      </div>

      


    </div>
  </div>
</template>




<script>
import * as d3Base from 'd3'
import { graphScroll } from "graph-scroll";
const d3 = Object.assign(d3Base, { graphScroll });

export default {
  name: 'intro-page',
  data: function(){
    return {
      currentSlide: 0,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false,
      isActive7: false,
      isActive8: false,
      isActive9: false,
      isActive10: false,
      isActive11: false,
      isActive12: false,
      isActive13: false,
      isActive14: false,
      isActive15: false,
      isActive16: false,
      isActive17: false,
      isActive18: false,
      isActive19: false,
      isActive20: false,
      isActive21: false,
      isActive22: false,
      isActive23: false,
      isActive24: false,
      isActive25: false,
    }
  },
  beforeCreate: function() {
    const body = document.body;
    body.classList.add('is-white');
  },
  mounted: function() {
    d3.graphScroll()
      .container(d3.select('.intro__wrap'))
      .sections(d3.selectAll('.intro__block'))
      .on('active', (i) => {
        this.currentSlide = i;
      })
  },
  watch: {
    currentSlide(to, from){
      if(to == 1 && from == 0)   this.isActive1 = true;
      if(to == 0 && from == 1)   this.isActive1 = false;
      if(to == 2 && from == 1)   this.isActive2 = true;
      if(to == 1 && from == 2)   this.isActive2 = false;
      if(to == 3 && from == 2)   this.isActive3 = true;
      if(to == 2 && from == 3)   this.isActive3 = false;
      if(to == 4 && from == 3)   this.isActive4 = true;
      if(to == 3 && from == 4)   this.isActive4 = false;
      if(to == 5 && from == 4)   this.isActive5 = true;
      if(to == 4 && from == 5)   this.isActive5 = false;
      if(to == 6 && from == 5)   this.isActive6 = true;
      if(to == 5 && from == 6)   this.isActive6 = false;
      if(to == 7 && from == 6)   this.isActive7 = true;
      if(to == 6 && from == 7)   this.isActive7 = false;
      if(to == 8 && from == 7)   this.isActive8 = true;
      if(to == 7 && from == 8)   this.isActive8 = false;
      if(to == 9 && from == 8)   this.isActive9 = true;
      if(to == 8 && from == 9)   this.isActive9 = false;
      if(to == 10 && from == 9)  this.isActive10 = true;
      if(to == 9 && from == 10)  this.isActive10 = false;
      if(to == 11 && from == 10) this.isActive11 = true;
      if(to == 10 && from == 11) this.isActive11 = false;
      if(to == 12 && from == 11) this.isActive12 = true;
      if(to == 11 && from == 12) this.isActive12 = false;
      if(to == 13 && from == 12) this.isActive13 = true;
      if(to == 12 && from == 13) this.isActive13 = false;
      if(to == 14 && from == 13) this.isActive14 = true;
      if(to == 13 && from == 14) this.isActive14 = false;
      if(to == 15 && from == 14) this.isActive15 = true;
      if(to == 14 && from == 15) this.isActive15 = false;
      if(to == 16 && from == 15) this.isActive16 = true;
      if(to == 15 && from == 16) this.isActive16 = false;
      if(to == 17 && from == 16) this.isActive17 = true;
      if(to == 16 && from == 17) this.isActive17 = false;
      if(to == 18 && from == 17) this.isActive18 = true;
      if(to == 17 && from == 18) this.isActive18 = false;
      if(to == 19 && from == 18) this.isActive19 = true;
      if(to == 18 && from == 19) this.isActive19 = false;
      if(to == 20 && from == 19) this.isActive20 = true;
      if(to == 19 && from == 20) this.isActive20 = false;
      if(to == 21 && from == 20) this.isActive21 = true;
      if(to == 20 && from == 21) this.isActive21 = false;
      if(to == 22 && from == 21) this.isActive22 = true;
      if(to == 21 && from == 22) this.isActive22 = false;
      if(to == 23 && from == 22) this.isActive23 = true;
      if(to == 22 && from == 23) this.isActive23 = false;
      if(to == 24 && from == 23) this.isActive24 = true;
      if(to == 23 && from == 24) this.isActive24 = false;
      if(to == 25 && from == 24) this.isActive25 = true;
      if(to == 24 && from == 25) this.isActive25 = false;
    }
  }
}
</script>



<style lang="scss">
.intro {
  position: relative;
  color: white;
  font-size: 24px;

  &__back {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &--0 {
      transition: opacity 1000ms ease;
      background-image: url('/static/img/barrio.jpg');
      &.is-deactive {
        opacity: 0;
      }
    }
    &--1 {
      background-image: url('/static/img/iglesia.jpg');
      left: 100%;
      transition: left 1000ms ease, background-size 1000ms ease, background-position 1000ms ease;
      background-size: 1800px 1300px;
      &.is-active {
        left: 0;
      }
      &.is-deactive {
        background-size: 180px 130px;
        background-position: 0 -180px;
        .overblack {
          opacity: 0 !important;
        }
      }
    }
    &--3 {
      background-image: url('/static/img/postal.jpg');
      top: 100%;
      transition: top 1000ms ease;
      &.is-active {
        top: 0;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--4 {
      background-image: url('/static/img/piscina.jpg');
      top: 100%;
      left: 100%;
      transition: top 1000ms ease, left 1000ms ease;
      &.is-active {
        top: 0;
        left: 0;
      }
      &.is-deactive {
        left: -100%;
      }
    }
    &--7 {
      background-image: url('/static/img/benalmadena.jpg');
      top: -100%;
      left: 100%;
      transition: top 1000ms ease, left 1000ms ease;
      &.is-active {
        top: 0;
        left: 0;
      }
      &.is-deactive {
        top: -100%;
      }
    }
    &--11 {
      background-image: url('/static/img/desfile.jpg');
      right: 100%;
      left: unset;
      transition: right 1000ms ease, transform 1000ms ease;
      transform-origin: 0 0;
      &.is-active {
        right: 0;
      }
      &.is-deactive {
        transform: scale(0.001);
      }
    }
    &--16 {
      background-image: url('/static/img/losbombardeos.jpg');
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--17 {
      background-image: url('/static/img/lahuida-1.jpg');
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--18 {
      background-image: url('/static/img/lahuida-2.jpg');
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--19 {
      background-image: url('/static/img/lahuida-3.jpg');
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--20 {
      background-image: url('/static/img/elmiedo-1.jpg');
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--21 {
      background-image: url('/static/img/elmiedo-2.jpg');
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
      &.is-deactive {
        opacity: 0;
      }
    }
    &--25 {
      background: #050505;
      opacity: 0;
      transition: opacity 1000ms ease;
      &.is-active {
        opacity: 1;
      }
    }


    .overblack {
      width: 100%;
      height: 100vh;
      background: rgba(0,0,0,0.4);
      opacity: 0;
      transition: opacity 400ms ease;
      &.is-active {
        opacity: 1;
      }
    }
  }

  &__block {
    position: relative;
    z-index: 9;
    &--empty {
      height: 100vh;
    }
    &--background {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    &--excursiones {
      .text__wrap {
        opacity: 0;
        transition: opacity 1000ms ease 500ms;
        color: black;
        span {
          font-size: 16vw !important;
          line-height: 0;
        }
      }
      .photo__wrap {
        top: 0;
        right: 0;
        width: 80%;
        max-width: 500px;
        height: 80%;
        max-height: 700px;
        background-image: url('/static/img/primos.jpg');
        opacity: 0;
        transition: opacity 800ms ease 200ms;
      }
      &.graph-scroll-active {
        .text__wrap {
          opacity: 1;
        }
        .photo__wrap {
          opacity: 1;
        }
      }
    }
    &--otono {
      .photo__wrap {
        top: 100px;
        left: 20px;
        width: 80%;
        max-width: 700px;
        height: 60%;
        max-height: 500px;
        background-image: url('/static/img/colegio.jpg');
      }
      .text__wrap {
        color: black;
        opacity: 0;
        transition: opacity 1000ms ease 400ms;
        > p {
          flex: 1 1 80%;
          width: 600px;
          margin-left: auto;
          max-width: 100%;
          span {
            font-size: 70px;
            line-height: 0.5;
          }
        }
      }
      &.graph-scroll-active {
        .text__wrap {
          opacity: 1;
        }
      }
    }
    &--coche {
      .photo__wrap {
        top: 0;
        right: 10%;
        width: 80%;
        max-width: 700px;
        height: 60%;
        max-height: 500px;
        background-image: url('/static/img/manifestacion.jpg');
      }
      .text__wrap {
        color: black;
      }
    }
    &--recuerdos {
      color: black;
      text-align: center;
    }
    &--bombardeos {
      color: black;
      p {
        text-align: right;
      }
      span {
        font-size: 20vw !important;
        background: white;
        white-space: pre;
      }
    }
    &--huida {
      color: black;
      p {
        text-align: center;
      }
      span {
        font-size: 24vw !important;
        background: white;
        white-space: pre;
      }
    }
    &--miedo {
      color: black;
      span {
        font-size: 24vw !important;
      }
    }
    &--last {
      color: black;
      text-align: center;
    }
    &--logo {
      p {
        text-align: center;
        img {
          width: 100%;
          height: auto;
          max-width: 500px;
          display: block;
          margin: 0 auto 100px;
        }
        i {
          font-style: normal;
          opacity: 0;
          transition: opacity 1000ms ease 1000ms;
        }
      }
      &.graph-scroll-active {
        p i {
          opacity: 1
        }
      }
    }


    .text__wrap {
      padding: 20px;
      height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      position: relative;
      &--block {
        max-width: 800px;
      }
      > div {
        flex: 1 1 auto;
      }
      > p {
        flex: 0 1 auto;
        margin-bottom: 80px;
      }
      span {
        font-family: dharma-gothic-m, Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        font-size: 48px;
      }
    }

    .photo__wrap {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      z-index: -1;
    }

  }
  .skip__wrap {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    text-align: right;
    a {
      background: black;
      display: inline-block;
      padding: 5px 10px;
      margin-top: 20px;
      line-height: 1;
      span {
        display: inline-block;
      }
      img {
        display: inline-block;
        width: 20px;
        height: auto;
        margin-left: 10px;
      }
    }
  }
  span.pre {
    background: white;
    white-space: pre;
  }
}
</style>
