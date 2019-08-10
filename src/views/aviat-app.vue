<template>
  <div class="hello">
    <h1>Provincia53</h1>
    <p>Próximamente</p>
  </div>
</template>



<script>
export default {
  name: 'aviat-app',
}

</script>




<style lang="scss">
.hello {
  text-align: center;
  margin-top: 60px;

  h1 {
    font-size: 10vw;
  }

  p {
    font-size: 3.6vw;
  }
}

@media only screen and (min-width: 1000px) {
  .hello {
    h1 {
      font-size: 100px;
    }

    p {
      font-size: 30px;
    }
  }
}

</style>
