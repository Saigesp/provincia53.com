<template>
  <div class="page__wrap">
    <article class="page">
      <div class="page__close">
        <router-link :to="{name: 'home'}">
          <img src="/static/img/icons/close.svg" alt="Cerrar">
        </router-link>
      </div>
      <h1>Guía de personajes</h1>
      <!-- <p>En las distintas piezas de este documental vas a ir encontrándote con algunos personajes recurrentes. Sus voces son las que traman esta historia. Aquí te los presentamos, para que no te pierdas.</p> -->
      <ul class="characters">
        <li>
          <img src="/static/img/characters/Abdeslam.png" alt="photo">
          <strong>Abdeslam Omar</strong> es el presidente de la Asociación de Familiares de Presos y Desaparecidos Saharauis (AFAPREDESA).</li>
        <li>
          <img src="/static/img/characters/Ahjabha.png" alt="photo">
          <strong>Ahjabha Hamadi Faragi</strong> nació en 1993 en los campamentos de refugiados, desde donde hoy trabaja en la Asociación de Amistad con el Pueblo Saharaui de Sevilla.</li>
        <li>
          <img src="/static/img/characters/Ali.jpg" alt="photo">
          <strong>Ali Omar</strong> Buzeid es responsable de comunicación y territorios ocupados de AFAPREDESA, a la que llegó por un motivo personal: la búsqueda de su padre.</li>
        <li>
          <img src="/static/img/characters/Angel.png" alt="photo">
          <strong>Ángel Alda</strong> hizo la mili en El Aiún, como policía territorial, entre 1972 y 1974. Es escritor.</li>
        <li>
          <img src="/static/img/characters/Aza.png" alt="photo">
          <strong>Aza Wadady</strong> tiene 30 años y fue la última locutora de un programa en castellano en la radio nacional saharaui.</li>
        <li>
          <img src="/static/img/characters/Baba.jpg" alt="photo">
          <strong>Baba Mohamed Yahdih Fdeid</strong> es secretario general del ministerio saharaui de desarrollo, y fue militante por la independencia del Sáhara Occidental durante la época colonial.</li>
        <li>
          <img src="/static/img/characters/Brahim.jpg" alt="photo">
          <strong>Brahim Chagaf</strong> es cineasta y uno de los coordinadores de la Escuela de Cine de los campamentos de refugiados saharauis.</li>
        <li>
          <img src="/static/img/characters/BrahimM.jpg" alt="photo">
          <strong>Brahim Mujtar Bu Majruta</strong> es el ministro saharaui de aguas y medio ambiente, y otro histórico militante por la independencia saharaui.</li>
        <li>
          <img src="/static/img/characters/Chaba.jpg" alt="photo">
          <strong>Chaba Seini Brahim</strong> es representante de la Unión Nacional de Mujeres Saharauis en el Parlamento Saharaui y miembro de la Comisión Saharaui de Derechos Humanos.</li>
        <li>
          <img src="/static/img/characters/Chej.jpg" alt="photo">
          <strong>Chej Uald Chaui</strong> fue policía territorial durante la época de la colonización española. Aún conserva su tarjeta de comisario.</li>
        <li>
          <img src="/static/img/characters/Chelo.jpg" alt="photo">
          <strong>Chelo Iglesias</strong> llegó a El Aaiún en 1953 con su familia. Fue maestra en una escuela de la Sección Femenina. Hoy vive en Madrid.</li>
        <li>
          <img src="/static/img/characters/Fatma.jpg" alt="photo">
          <strong>Fatma Sidahmed Beidala Al-Haj</strong> también forma parte de AFAPREDESA. Busca a su padre, desaparecido durante el éxodo.</li>
        <li>
          <img src="/static/img/characters/Jadiya.jpg" alt="photo">
          <strong>Jadiya Ali</strong> nació en los campamentos de refugiados. Ahora vive de nuevo allí tras hacer sus estudios en España. Es traductora, y trabaja en el United Nations Mine Action Service.</li>
        <li>
          <img src="/static/img/characters/Jadiyetu.jpg" alt="photo">
          <strong>Jadiyetu El Mohtar</strong> es miembro de la Unión Nacional de Mujeres Saharauis. Nació en Villa Cisneros en 1959, y hoy vive en el exilio en España.</li>
        <li>
          <img src="/static/img/characters/Jose.png" alt="photo">
          <strong>José Taboada</strong> también hizo la mili en el Sáhara. Hoy es presidente de CEAS - Sáhara, la coordinadora de asociaciones de solidaridad españolas.</li>
        <li>
          <img src="/static/img/characters/JuanTejero.jpg" alt="photo">
          <strong>Juan Tejero</strong> es militar de carrera. Uno de sus primeros destinos fue el Sáhara Occidental, donde desde 1959 fue parte de Tropas Nómadas. Hoy es parte de la hermandad de veteranos de este cuerpo, que se encargaba de patrullar el desierto y sus fronteras.</li>
        <li>
          <img src="/static/img/characters/Larbi.jpg" alt="photo">
          <strong>Larbi Hanuad</strong> fue trabajador de Fos Bucráa durante la época española. Hoy vive a caballo entre los campamentos de refugiados y Cartagena, en España.</li>
        <li>
          <img src="/static/img/characters/.jpg" alt="photo">
          <strong>Maimuna Mohamed Ali</strong> y <strong>Ali Mohmed Sleima</strong> son los padres de Jadiya Ali. Se criaron como pastores nómadas en el Sáhara Occidental, y hoy viven en los campamentos de refugiados.</li>
        <li>
          <img src="/static/img/characters/Mbarka.jpg" alt="photo">
          <strong>Mbarka Ibrahim Buyemaá</strong> es alcaldesa de la daira (administración) 27 de Febrero, en los campamentos de refugiados. Fue parte de los grupos clandestinos que iniciaron el movimiento de liberación saharaui.</li>
        <li>
          <img src="/static/img/characters/Tiba.jpg" alt="photo">
          <strong>Mohamed Abdalahi Sidihaiba Kori (Tiba)</strong> es el director de cooperación del ministerio de cultura saharaui. Vive en los campamentos de refugiados.</li>
        <li>
          <img src="/static/img/characters/PacoEtxeberria.jpg" alt="photo">
          <strong>Paco Etxeberria</strong> es antropólogo forense, y uno de los responsables de la exhumación de muchas de las fosas comunes más importantes que se han encontrado en España.</li>
        <li>
          <img src="/static/img/characters/SidiB.png" alt="photo">
          <strong>Sidi Brahim Najem</strong> es estudiante de cine en los campamentos de refugiados, donde nació y sigue viviendo.</li>
        <li>
          <img src="/static/img/characters/SidiE.png" alt="photo">
          <strong>Sidi Elhamed</strong> era primo de Mohamed Basiri, y vivió cerca de él todos los acontecimientos de los inicios del movimiento de liberación saharaui, así como los días previos a su desaparición.</li>
      </ul>
      <footer class="links">
        <router-link :to="{name: 'home'}">Volver</router-link>
      </footer>
    </article>
  </div>
</template>



<script>
export default {
  name: 'characters-page',
}
</script>


<style lang="scss">
.characters {
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 1 1 100%;
    line-height: 1.33;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 12px;
  }
}

@media screen and (min-width: 460px) {
  .characters {
    li {
      flex: 0 1 180px;
      margin-right: 30px;
    }
  }
}

</style>