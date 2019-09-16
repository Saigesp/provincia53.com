<template>
    <div class="page__wrap page__wrap--about">
        <article class="page">
            <div class="page__close">
                <router-link :to="{name: 'home'}">
                    <img src="/static/img/icons/close.svg" alt="Cerrar">
                </router-link>
            </div>
            <h1>Quiénes somos</h1>
            <p>Este documental web ha sido realizado por un <strong>equipo</strong> que tiene un pie en la Península y otro en los campamentos de refugiados saharauis de Tinduf. Somos estas personas, y nos hemos encargado de estas tareas:</p>
            <ul>
                <li>
                    <span class="role">Dirección</span>
                    <span class="name">Laura Casielles</span>
                </li>
                <li>
                    <span class="role">Apoyo a la coordinación y producción</span>
                    <span class="name">Jadiya Ali, Jalil Mohamed</span>
                </li>
                <li>
                    <span class="role">Concepto y realización audiovisual</span>
                    <span class="name">Santi Donaire (NERVIO)</span>
                </li>
                <li>
                    <span class="role">Concepto y realización sonora</span>
                    <span class="name">Isabel Cadenas Cañón</span>
                </li>
                <li>
                    <span class="role">Diseño gráfico</span>
                    <span class="name">Marta Horcas</span>
                </li>
                <li>
                    <span class="role">Desarrollo web</span>
                    <span class="name">Santiago Espinosa de los Monteros y Alfredo Almendro (Dadasign)</span>
                </li>
                <li>
                    <span class="role">Equipo de apoyo local</span>
                    <span class="name">Brahim Chagaf, Yahdih Mohamed Fadel, Salah Mohamed Zuber, Jatri Hafd y Mohamed Hasan</span>
                </li>
            </ul>
            <p>En el camino hemos contado con la compañía y el apoyo de diversas personas expertas en la memoria democrática española, el Sáhara Occidental o el estudio de la colonialidad. A este consejo asesor le agradecemos su disponibilidad para atender nuestras dudas y su generosidad al compartir su conocimiento y reflexiones:</p>
            <p>Abdeslam Omar - Alicia Torija - Ana Vicente - Bahia M. Awah - Carlos Cañete - Claudia Barona - David Perejil - Gloria Guzmán - Gonzalo Fernández Parrilla - Guillermo Galván - Irene Ruano - Juan Robles - Luis Suárez - Olga Blázquez - Pablo Socorro - Sato Díaz - Tomás Bárbulo</p>
            <p>«Provincia 53» ha sido producido por el Instituto 25M para la Democracia dentro del marco de un proyecto de cooperación internacional financiado por la AECID</p>
            <footer class="links">
                <router-link :to="{name: 'home'}">Volver</router-link>
            </footer>
        </article>
    </div>
</template>




<script>
export default {
    name: 'about-page',
}
</script>
