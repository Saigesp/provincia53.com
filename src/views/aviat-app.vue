<template>
  <div class="hello">
    <h1>Provincia53</h1>
    <p><span>Próximamente</span>
      <a href="https://www.facebook.com/Provincia-53-103922694326409/" target="_blank">
        <img src="/static/img/icons/facebook.svg" alt="Provincia53 en Facebook">
      </a>
      <a href="https://twitter.com/provincia_53" target="_blank">
        <img src="/static/img/icons/twitter.svg" alt="Provincia53 en Twitter">
      </a>
      <a href="https://www.instagram.com/provincia_53/" target="_blank">
        <img src="/static/img/icons/instagram.svg" alt="Provincia53 en Instagram">
      </a>
    </p>
  </div>
</template>



<script>
export default {
  name: 'aviat-app',
}

</script>




<style lang="scss">
body {
  background-image: url(/static/img/piscina-white.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.hello {
  text-align: center;
  background-image: url(/static/img/piscina.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: calc(100% - 40px);
  height: 60vh;
  margin: 20vh auto; 
  position: relative;
  h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    font-size: 20vw;
    line-height: 1;
    margin-bottom: 0;
    text-shadow: 0 1px 8px rgba(0,0,0,0.3);
  }
  p {
    position: absolute;
    bottom: -80px;
    left: 0;
    width: 100%;
    margin: 0;
    line-height: 1;
    color: #2b2b2b;
    font-family: 'dharma-gothic-m', 'webfontregular', Helvetica, Arial, sans-serif;
    font-size: 20px;
    span {
      display: block;
      margin-bottom: 12px;
    }
    img {
      width: 24px;
      margin: 0 6px;
      height: auto;
    }
  }
}

@media only screen and (min-width: 1000px) {
  .hello {
    width: 90vw;
    max-width: 1000px;
    height: 60vh;
    margin: 20vh auto; 
    h1 {
      font-size: 200px;
    }
  }
}

</style>
