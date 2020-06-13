<template>
  <div id="home">
    <div  class="chart__wrap" :class="{'is-zoomed': isZoomed}" ref="chart">

      <!-- start overlay -->
      <div class="overlay">
        <div class="logo">
          <h1>Provincia53</h1>
          <img src="/static/img/logo.svg" alt="Provincia53">
        </div>
        <div class="hamburguer" v-show="!isMenuActive">
          <img src="/static/img/icons/menu.svg" alt="Menu" @click="isMenuActive = true; currentComponent = false; currentComponentData = {}">
        </div>
        <button class="resetzoom" @click="resetZoom()">Centrar</button>
        <button class="stopaudio" :class="{'is-active': isPlayingAudio}" @click="stopAudio()">Stop</button>
        <div class="logos">
            <img src="/static/img/logoi25M.png" alt="i25m">
            <img src="/static/img/logoAECID.png" alt="AECID">
        </div>
        <div class="legend">
          <div class="legend__item" v-for="legend in legends">
            <img :class="legend.icon" :src="`/static/img/defs/${legend.icon}.png`" alt="Icono" v-if="legend.icon"><span>{{legend.name}}</span>
          </div>
        </div>
        <div class="loncon__wrap">
          <div class="loncon">
            <div class="loncon__list">
              <div class="loncon__item" v-for="loncon in datum.loncon" :style="{backgroundImage: `url(${loncon.thumbnail})`, backgroundSize: loncon.backsize}" v-if="loncon.id">
                <img src="/static/img/icons/play.svg" alt="Play" @click="showBigItem(loncon)">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end overlay -->

      <!-- start menu -->
      <div class="menu__wrap" :class="{'is-active': isMenuActive}">
        <div class="menu__close">
          <img src="/static/img/icons/close.svg" alt="Cerrar" @click="isMenuActive = false">
        </div>
        <div class="menu">
          <ul>
            <li><router-link :to="{name: 'intro-page'}">Introducción</router-link></li>
            <li><router-link :to="{name: 'project-page'}">El proyecto</router-link></li>
            <li><router-link :to="{name: 'about-page'}">Quiénes somos</router-link></li>
            <li><router-link :to="{name: 'characters-page'}">Guía de personajes</router-link></li>
            <li><router-link :to="{name: 'referrers-page'}">Referencias</router-link></li>
            <li><router-link :to="{name: 'basiri-page'}">Informes policiales</router-link></li>
            <li><router-link :to="{name: 'map-page'}">Mapa</router-link></li>
            <li><router-link :to="{name: 'contact-page'}">Contacto</router-link></li>
            <li class="rrss">
              <a href="https://www.facebook.com/Provincia-53-103922694326409/" target="_blank">
                <img src="/static/img/icons/facebook.svg" alt="Provincia53 en Facebook">
              </a>
              <a href="https://twitter.com/provincia_53" target="_blank">
                <img src="/static/img/icons/twitter.svg" alt="Provincia53 en Twitter">
              </a>
              <a href="https://www.instagram.com/provincia_53/" target="_blank">
                <img src="/static/img/icons/instagram.svg" alt="Provincia53 en Instagram">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end menu -->

      <!-- start chart -->
      <parallax-container class="chart__metawrap">

        <!-- start chart background -->
        <parallax-element :parallaxStrength="100" :type="'translation'">
          <div class="background"></div>
        </parallax-element>
        <!-- end chart background -->
        
        <!-- start chart contents -->
        <parallax-element :parallaxStrength="-10" :type="'translation'">
          <svg class="chart" :viewBox="`0 0 ${width} ${height}`" :width="width+400" :height="height+100">

            <defs>
              <pattern id="text" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/text.png" width="20" height="20"></image>
              </pattern>
              <pattern id="pdf" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/pdf.png" width="20" height="20"></image>
              </pattern>
              <pattern id="photo" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/photo.png" width="20" height="20"></image>
              </pattern>
              <pattern id="slider" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/photo.png" width="20" height="20"></image>
              </pattern>
              <pattern id="video" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/video.png" width="20" height="20"></image>
              </pattern>
              <pattern id="goodaudio" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/bigaudio.png" width="20" height="20"></image>
              </pattern>
              <pattern id="shortaudio" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/audio.png" width="16" height="16"></image>
              </pattern>
              <pattern id="poem" width="10" height="10" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/poem.png" width="16" height="16"></image>
              </pattern>

              <pattern id="left" width="12" height="12" patternUnits="objectBoundingBox">
                <image xlink:href="/static/img/defs/left.png" width="12" height="12"></image>
              </pattern>

              <pattern :id="bigitem.id" width="30" height="20" patternUnits="objectBoundingBox" v-for="bigitem in datum.loncon">
                <image :xlink:href="'/static/img/lonsvg/'+bigitem.id+'.jpg'" width="30" height="22"></image>
              </pattern>

            </defs>

            <g ref="gengroup">
              <line class="startyear" :x1="center[0]" :x2="center[0]" :y1="center[1]-circleRadius(datum.years.length-1)+6" :y2="center[1]-circleRadius(0)-14"></line>
              <circle :cx="center[0]+8" :cy="center[1]-circleRadius(0)-10" fill="url(#left)" r="6"></circle>
              <g v-for="(yeargroup, i) in datumR" class="chart__ygroup" :transform="`translate(${center[0]},${center[1]})`">
                <circle class="year__hover" :r="circleRadius(i)"></circle>
                <circle class="year" :r="circleRadius(i)"></circle>
                <g v-for="item in yeargroup.items" :class="`item item--${item.type}`" :transform="`translate(${calcItemCenter(item.date, i)[0]},${calcItemCenter(item.date, i)[1]})`">
                  <polyline class="item__line" :points="calcLinePoints(item.date, i)" v-if="item.title"></polyline>
                  <circle class="item__circle" :r="item.rext" @click="showItem(item)"></circle>

                  <circle class="item__dot" :r="item.rext" :fill="`url(#${item.type})`"></circle>
                  <circle class="item__doty" r="3"></circle>
                  <text
                    class="item__text"
                    :x="calcTextPosition(item.date, i)[0]"
                    :y="calcTextPosition(item.date, i)[1]"
                    :text-anchor="calcTextAnchor(item.date, i)"
                    v-if="item.title"
                    dy="5">{{item.title}}</text>
                  <text
                    class="item__date"
                    :x="calcTextPosition(item.date, i)[0]"
                    :y="calcTextPosition(item.date, i)[1]"
                    :text-anchor="calcTextAnchor(item.date, i)"
                    v-if="item.datestr"
                    dy="-12">{{item.datestr}}</text>
                </g>
                <text class="year__title" y="10">{{yeargroup.title}}</text>
              </g>
              <g :transform="`translate(${center[0]},${center[1]})`">
                <svg-wave v-if="isPlayingAudio"></svg-wave>
              </g>
            </g>

            <g class="biggroup" :transform="`translate(${center[0]},${center[1]})`">
              <g class="biggroup__item" v-for="(bigitem, i) in datum.loncon" :transform="`translate(${calcBigItemPosition(i)})`" @click="showBigItem(bigitem)">
                <text v-if="bigitem.id" :text-anchor="calcBigItemAnchor(i)" :dx="calcBigItemDx(i)">{{bigitem.title}}</text>
                <rect v-if="bigitem.id" :x="calcBigItemX(i)" y="-20" width="30" height="22" :fill="`url(#${bigitem.id})`" rx="8" ry="8"></rect>
              </g>
              <text class="biggroup__title" v-for="(title, i) in bigTitles" :x="calcBigTitleX(i)" :y="calcBigTitleY(i)" :text-anchor="calcBigTitleAnchor(i)">{{title}}</text>
            </g>

          </svg>
        </parallax-element>
        <!-- end chart contents -->

      </parallax-container>
      <!-- end chart -->

    </div>

    <!-- start mobile content -->
    <div class="mobilick" v-if="width <= minScaleSize">
      <div class="mobilick__block" v-for="(yeargroup, i) in datumR" :class="{'is-active': inCurrentMobilick(yeargroup)}">
        <div class="mobilick__title" @click="setMobilick(yeargroup)">
          <img src="/static/img/icons/plus.svg" alt="Expandir" v-if="!inCurrentMobilick(yeargroup)">
          <img src="/static/img/icons/minus.svg" alt="Colapsar" v-else>
          <h3>{{yeargroup.title}}</h3>
        </div>
        <div class="mobilick__items" v-if="inCurrentMobilick(yeargroup)">
          <div v-for="item in reverseItemsMobilick(yeargroup.items)" class="item" :class="{'item--line': item.title}" v-if="item.type != 'slider'">
            <h4>{{item.title}}</h4>
            <p>{{item.desc}}</p>
            <div>
              <audio v-if="item.type=='shortaudio'||item.type=='goodaudio'" controls :src="'/static'+item.file">
                  Your browser does not support the audio element.
              </audio>
              <div v-if="item.type=='poem'" class="poem">
                <p>{{item.text}}</p>
                <p v-show="item.author"><strong>({{item.author}})</strong></p>
              </div>
              <div v-if="item.type=='photo'" class="photo">
                <img :src="'/static'+item.file" alt="Foto">
              </div>
              <div v-if="item.type=='video'" class="video">
                <iframe :src="item.file" frameborder="0" allowfullscreen></iframe>
              </div>
              <div v-if="item.type=='pdf'" class="pdf">
                <p>
                  <a :href="'/static'+item.file" target="_blank">
                    <img src="/static/img/icons/download.svg" alt="Descarga">
                    <span>Descargar documento</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end mobile content -->

    <!-- start components -->
    <component v-if="currentComponent" v-bind:is="currentComponent" :key="currentComponent" :datum="currentComponentData"></component>
    <!-- end components -->

  </div>
</template>


<script>
import EventBus from '../plugins/bus';
import * as d3 from "d3";
import Flickity from 'flickity';

export default {
  name: 'home-app',
  data: function() {
    return {
      width: 0,
      height: 0,
      minScaleSize: 860, // Check CSS media queries
      circleRadius: () => 1,
      zoom: () => {},
      datum: require('../assets/data/data.json'),
      isZoomed: false,
      isMenuActive: false,
      currentComponent: false,
      currentComponentData: {},
      currentAudio: new Audio(),
      isPlayingAudio: false,
      currentMobilicks: [],
      legends: [
        {name: 'Leyenda:'},
        {icon: 'text', name: 'Historia'},
        {icon: 'pdf', name: 'Documento'},
        {icon: 'photo', name: 'Foto'},
        {icon: 'video', name: 'Video'},
        {icon: 'audio', name: 'Audio'},
        {icon: 'audiodest', name: 'Audio destacado'},
        {icon: 'poem', name: 'Poema'},
      ],
      bigTitles: ['El tiempo colonial', 'La Transición', 'Personas desaparecidas', 'La espera que continúa'],
    }
  },
  beforeCreate: function() {
    let introduced = localStorage.getItem('introprovincia53');
    if(!introduced){
      localStorage.setItem('introprovincia53', true)
      this.$router.push({name:'intro-page'})
    }
    const body = document.body;
    body.classList.remove('is-white');
  },
  created: function() {
    this.circleRadius = d3.scaleLinear()
      .domain([0, this.datum.years.length])
  },
  computed: {
    center() {
      return [this.width/2, (this.height/2)-20]
    },
    datumR(){
      let rdatum = [...this.datum.years];
      return rdatum.reverse()
    }
  },
  mounted: function() {
    this.getCanvasSize();
    window.addEventListener("resize", () => {
      this.getCanvasSize();
      this.resetZoom();
    });

    this.zoom = d3.zoom()
      .scaleExtent([1 / 4, 30])
      .on("zoom", d => {
        this.isZoomed = d3.event.transform.k === 1 && d3.event.transform.x === 0 ? false : true;
        d3.select(this.$refs.gengroup).attr("transform", d3.event.transform);
      });

    this.svg = d3.select(this.$refs.chart)
      .call(this.zoom);

    var flkty = new Flickity( '.loncon__list', {
      // options
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      freeScroll: true,
      wrapAround: true
    });

    EventBus.$on('close-component', data => {
      this.currentComponent = false;
      this.currentComponentData = {};
    })

    EventBus.$on('stop-audio', data => {
      this.stopAudio();
    })

  },
  methods: {
    getCanvasSize() {
      this.width = this.$refs.chart ? parseInt(this.$refs.chart.offsetWidth) : 700;
      this.height = this.$refs.chart ? parseInt(this.$refs.chart.offsetHeight) : 700;
      this.calcCircleRadius();
      this.circleRadius.range([this.calcCircleRadius(), 40]);
    },
    calcCircleRadius() {
      if(this.width < this.minScaleSize || this.height < 600){
        return this.width/2;
      }else{
        return d3.min([d3.min([this.width / 2, this.height / 2]) - 150, 350]);
      }
    },
    calcItemCenter(strdate, i) {
      let date = new Date(strdate)
      return [
        (Math.sin(this.dateToRadians(date)) * this.circleRadius(+i)),
        (Math.cos(this.dateToRadians(date)) * this.circleRadius(+i))
      ]
    },
    calcLinePoints(strdate, i){
      let date = new Date(strdate);
      let rads = this.dateToRadians(date);
      let xtrsp = rads <= 0 ? -20 : 20;
      return [
        [0,0],
        [
          Math.sin(rads) * this.circleRadius(this.datum.years.length-(i-1)),
          Math.cos(rads) * this.circleRadius(this.datum.years.length-(i-1))
        ],
        [
          (Math.sin(rads) * this.circleRadius(this.datum.years.length-(i-1)))+xtrsp,
          (Math.cos(rads) * this.circleRadius(this.datum.years.length-(i-1)))
        ]
      ]
    },
    calcTextPosition(strdate, i){
      let date = new Date(strdate);
      let rads = this.dateToRadians(date);
      let xtrsp = rads <= 0 ? -26 : 26;
      return [
        (Math.sin(rads) * this.circleRadius(this.datum.years.length-(i-1)))+xtrsp,
        (Math.cos(rads) * this.circleRadius(this.datum.years.length-(i-1)))
      ]
    },
    calcTextAnchor(strdate, i){
      return this.dateToRadians(new Date(strdate)) <= 0 ? 'end' : 'start'
    },
    calcBigItemPosition(i){
      let space = 30;
      let preStartX = this.width < 1200 ? this.width/2 : (this.width/2)*0.9;
      let startX = (i<3||(i>4&&i<10)) ? -preStartX+100 : preStartX-100;
      let preStartY = (i==0||i==1||i==2||i==3||i==4) ? -this.circleRadius(0)+10 : this.circleRadius(0)-(space*2)-46;
      let startY = preStartY+(space*Math.floor(i/4)%2) + space*(i%4);
      if(i==3) startY = preStartY+(space*Math.floor(i/4)%2);
      if(i==4) startY = preStartY+(space*Math.floor(i/4)%2) + space;
      if(i==5) startY = preStartY+(space*Math.floor(i/4)%2) + space*2;
      if(i>4&&i<10) startY = preStartY+(space*Math.floor(i/4)%2) + space*(i-5);
      if(i>=10) startY = preStartY+(space*Math.floor(i/4)%2) + space*(i-10);
      return [startX, startY];
    },
    calcBigItemAnchor(i){
      return (i<3||(i>4&&i<10)) ? 'start' : 'end';
    },
    calcBigItemDx(i){
      return (i<3||(i>4&&i<10)) ? 32 : -32;
    },
    calcBigItemX(i){
      return (i<3||(i>4&&i<10)) ? 0 : -30;
    },
    calcBigTitleX(i){
      let preStartX = this.width < 1200 ? this.width/2 : (this.width/2)*0.9;
      return i%2 == 0 ? -preStartX+100 : preStartX-100;
    },
    calcBigTitleY(i){
      return i<2 ? -this.circleRadius(0)-12 : this.circleRadius(0)-130;
    },
    calcBigTitleAnchor(i){
      return i%2 == 0 ? 'start' : 'end';
    },
    dateToRadians(date){
      let start = new Date(date.getFullYear(), 0, 0);
      let rads = Math.floor((date - start) / (1000 * 60 * 60 * 24)) / (183 / Math.PI)
      return (rads-Math.PI)*-1;
    },
    showItem(item){
      if(item.type == 'shortaudio' || item.type == 'goodaudio'){
        this.playAudio('/static/'+item.file)
      }else{
        this.currentComponent = item.component;
        this.currentComponentData = item;
      }
    },
    showBigItem(item){
      this.stopAudio()
      this.currentComponent = item.component;
      this.currentComponentData = item;
    },
    playAudio(source){
      this.currentAudio.pause();
      this.currentAudio = new Audio(source);
      this.currentAudio.onended = (event) => {
        this.stopAudio()
      };
      this.currentAudio.play();
      this.isPlayingAudio = true;
    },
    stopAudio(){
      this.currentAudio.pause();
      this.isPlayingAudio = false;
    },
    inCurrentMobilick(yeargroup){
      return this.currentMobilicks.includes(yeargroup.title)
    },
    setMobilick(yeargroup){
      if(this.inCurrentMobilick(yeargroup)){
        let index = this.currentMobilicks.indexOf(yeargroup.title);
        if (index > -1) {
          this.currentMobilicks.splice(index, 1);
        }
      }else{
        this.currentMobilicks.push(yeargroup.title)
      }
      //this.currentMobilick = this.currentMobilick == yeargroup.title ? '': yeargroup.title;
    },
    reverseItemsMobilick(items){
      let ritems = [...items]
      return ritems.reverse();
    },
    resetZoom() {
      this.svg.transition()
        .duration(1000)
        .call(this.zoom.transform, d3.zoomIdentity.scale(1));
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => { this.getCanvasSize(); });
  }
}

</script>