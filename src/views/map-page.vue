<template>
    <div class="page__wrap page__wrap--map">
        <article class="page">
            <div class="page__close">
                <router-link :to="{name: 'home'}">
                    <img src="/static/img/icons/close.svg" alt="Cerrar">
                </router-link>
            </div>
            <h1>Mapa</h1>
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
}
</script>
