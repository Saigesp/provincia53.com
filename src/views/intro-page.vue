<template>
  <div class="intro">

    <div class="intro__back intro__back--0" :class="{'is-deactive': isActive2}">
    </div>
    <div class="intro__back intro__back--1" :class="{'is-active': isActive1, 'is-deactive': isActive3}">
      <div class="overblack" :class="{'is-active': isActive2}"></div>
    </div>
    <div class="intro__back intro__back--3" :class="{'is-active': isActive3, 'is-deactive': isActive5}">
    </div>
    <div class="intro__back intro__back--4" :class="{'is-active': isActive4, 'is-deactive': isActive6}">
      <div class="overblack" :class="{'is-active': isActive5}"></div>
    </div>
    <div class="intro__back intro__back--7" :class="{'is-active': isActive7, 'is-deactive': isActive9}">
      <div class="overblack" :class="{'is-active': isActive8}"></div>
    </div>


    <div class="intro__wrap" :class="`intro__wrap--${currentSlide}`">
      <div class="intro__block">
        <div class="text__wrap">
          <div></div>
          <p>Imagínate que naciste a principios de los años 70...</p>
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
          <p><span>Las excursiones</span><br>de los fines de semana<br>con tus primos</p>
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
          <p><span>El otoño de 1975 tenías nervios</span><br>Acababas de empezar la escuela<br>¿Te imaginas? Todo era nuevo.</p>
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
    }
  },
  created: function() {
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
      console.log(to, from);
      if(to == 1 && from == 0) this.isActive1 = true;
      if(to == 0 && from == 1) this.isActive1 = false;
      if(to == 2 && from == 1) this.isActive2 = true;
      if(to == 1 && from == 2) this.isActive2 = false;
      if(to == 3 && from == 2) this.isActive3 = true;
      if(to == 2 && from == 3) this.isActive3 = false;
      if(to == 4 && from == 3) this.isActive4 = true;
      if(to == 3 && from == 4) this.isActive4 = false;
      if(to == 5 && from == 4) this.isActive5 = true;
      if(to == 4 && from == 5) this.isActive5 = false;
      if(to == 6 && from == 5) this.isActive6 = true;
      if(to == 5 && from == 6) this.isActive6 = false;
      if(to == 7 && from == 6) this.isActive7 = true;
      if(to == 6 && from == 7) this.isActive7 = false;
      if(to == 8 && from == 7) this.isActive8 = true;
      if(to == 7 && from == 8) this.isActive8 = false;
      if(to == 9 && from == 8) this.isActive9 = true;
      if(to == 8 && from == 9) this.isActive9 = false;
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
        transition: opacity 1000ms ease 1000ms;
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
        transition: opacity 1000ms ease 700ms;
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
}
</style>
