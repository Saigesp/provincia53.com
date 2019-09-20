<template>
  <div class="page__wrap page__wrap--map">
    <article class="page">
      <div class="page__close">
        <router-link :to="{name: 'home'}">
          <img src="/static/img/icons/close.svg" alt="Cerrar">
        </router-link>
      </div>
      <h1>Mapa</h1>
      <p>En <strong>Provincia 53</strong> te vas a encontrar muchos nombres de lugares, muchos desplazamientos, muchas líneas trazadas sobre el desierto. Este es un mapa para que puedas volver a él si pierdes la orientación.</p>
      <p>Lo fundamental es recordar que hay tres partes. Dos de ellas, los <strong>territorios ocupados</strong> por Marruecos en la actualidad y los <strong>territorios liberados</strong>, constituyen el Sáhara Occidental. La tercera, los <strong>campamentos de refugiados</strong> de Tinduf, en Argelia, son el lugar donde vive hoy la mayor parte del pueblo saharaui, pero no son su tierra, sino una de acogida.</p>
      <img src="/static/img/map.jpg" alt="Mapa" style="width: 100%; height: auto;">
      <footer class="links">
        <router-link :to="{name: 'home'}">Volver</router-link>
      </footer>
    </article>
  </div>
</template>


<script>
export default {
  name: 'map-page',
  beforeCreate: function() {
    const body = document.body;
    body.classList.remove('is-white');
  },
}

</script>
