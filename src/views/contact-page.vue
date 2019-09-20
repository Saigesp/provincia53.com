<template>
    <div class="page__wrap page__wrap--contact">
        <article class="page">
            <div class="page__close">
                <router-link :to="{name: 'home'}">
                    <img src="/static/img/icons/close.svg" alt="Cerrar">
                </router-link>
            </div>
            <h1>Contacto</h1>
            <p>¿Quieres darnos tu opinión?<br>¿Organizar un acto sobre Provincia53?<br>¿Contarnos una historia?</p>
            <p>Escríbenos a <strong>contacto @ provincia53.com</strong></p>
            <p>Nos encatará escucharte</p>
            <footer class="links">
                <router-link :to="{name: 'home'}">Volver</router-link>
            </footer>
        </article>
    </div>
</template>




<script>
export default {
  name: 'contact-page',
  beforeCreate: function() {
    const body = document.body;
    body.classList.remove('is-white');
  },
}
</script>
