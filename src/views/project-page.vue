<template>
    <div class="page__wrap page__wrap--project">
        <article class="page">
            <div class="page__close">
                <router-link :to="{name: 'home'}">
                    <img src="/static/img/icons/close.svg" alt="Cerrar">
                </router-link>
            </div>
            <h1>El proyecto</h1>
            <p>¿Sabías que <strong>hasta el año 1976 España tuvo una provincia más</strong> que las que conocemos actualmente? No te preocupes si no: a mucha gente le pasa. Se trataba del Sáhara Occidental, colonizado desde finales del siglo XIX, y cuyo abandono se de el mismo día de la muerte de Franco. Esta es la historia de la provincia 53, y de cómo la partida de España dejó irresuelta la historia del que sigue siendo el <strong>único territorio pendiente de descolonización de África</strong>. Una historia que tiene todo que ver con la dictadura y con la transición, y que nuestra memoria democrática no puede esquivar.</p>
            <p>En este documental web exploramos esa memoria a través de los <strong>testimonios</strong> de personas que aún recuerdan lo que pasó. Mediante distintas piezas audiovisuales y sonoras repasamos una historia reciente de la que sabemos mucho menos de lo necesario. Puedes navegarlas como quieras: sigue tu curiosidad para saltar entre las distintas historias y descubrir la <strong>memoria cruzada</strong> que construyen estas voces saharauis y españolas.</p>
            <p>Y, por supuesto, si algo te interesa… ¡Comparte! Hemos querido contar esta historia en este formato hecho de pequeñas piezas para que sea fácil que naveguen por las redes y lleguen a mucha gente que quizá aún no sabe nada sobre el Sáhara Occidental.</p>
            <p>Hacerse cargo de la <strong>historia colonial y sus consecuencias</strong> es una tarea pendiente, necesaria también  también en otros territorios que fueron también en el pasado colonias de España, pero se hace particularmente flagrante en este caso. 43 años después del fin de la presencia española, el proceso de descolonización continúa inconcluso. Miles de saharauis viven aún en los <strong>campamentos de personas refugiadas</strong> en los campamentos de Tinduf, en Argelia. En 1991 la ONU dictó una resolución que obliga a realizar un <strong>reférendum de autodeterminación</strong>, pero este mandato está paralizado en la práctica. Las sentencias del Tribunal de Justicia de la Unión Europea que reconocen la soberanía del Sáhara Occidental y la legitimidad del Frente Polisario como su representante tampoco impiden que el pueblo saharaui siga sufriendo violaciones de los Derechos Humanos.</p>
            <p>Esta no es una historia ajena, no es algo que ocurra en un lugar lejano por razones que no nos incumben. Esta es una historia que se entrelaza con la de nuestro país, y sobre la que <strong>tenemos una responsabilidad</strong>.</p>
            <p>Así que… ¿Hacemos memoria en común?</p>
            <div class="logos">
                <img src="/static/img/logoi25M.png" alt="i25m">
                <img src="/static/img/logoAECID.png" alt="AECID">
            </div>
            <div class="licence">
                <span>Licenciado bajo <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" target="_blank">CC BY-NC-Sa 4.0</a></span>
            </div>
            <footer class="links">
                <router-link :to="{name: 'home'}">Volver</router-link>
            </footer>
        </article>
    </div>
</template>




<script>
export default {
  name: 'project-page',
  beforeCreate: function() {
    const body = document.body;
    body.classList.remove('is-white');
  },
}
</script>
