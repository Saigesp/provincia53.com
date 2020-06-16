<template>
  <div class="page__wrap page__wrap--informes">
    <article class="page">
      <div class="page__close">
        <router-link :to="{name: 'home'}">
          <img src="/static/img/icons/close.svg" alt="Cerrar">
        </router-link>
      </div>

      <h1>Informes policiales</h1>
      <p>A finales de 1969 nació el Movimiento de Vanguardia para la Liberación del Sáhara (llamado también Organización Avanzada para la Liberación de Saguia El Hamra y Río de Oro), una organización nacionalista liderada por Mohamed Basiri. Como cualquier otro grupo político durante el franquismo, su mera existencia estaba prohibida.</p>
      <p>Estos son documentos inéditos realizados por los servicios secretos españoles sobre su actividad y sus integrantes. Están muy relacionados son la masacre de Zemla, que tuvo lugar el 17 de junio de 1970, cuando la administración colonial envió a la Legión a disolver a tiros una manifestación pacífica, causando decenas de heridos y detenidos, así como la desaparición de Basiri.</p>

      <p>Haz click en la imagen para descargar el documento.</p>

      <div class="informes__list">

        <div class="informes__item">
          <div class="informes__img">
            <a href="/static/media/pdf/informe1.pdf">
              <img src="/static/img/informes/informe1.png" alt="Ficha policial de Mohamed Basiri">
            </a>
          </div>
          <div class="informes__txt">
            Ficha policial de Mohamed Basiri.
          </div>
        </div>

        <div class="informes__item">
          <div class="informes__img">
            <a href="/static/media/pdf/informe2.pdf">
              <img src="/static/img/informes/informe2.png" alt="Informe sobre la Organización Avanzada para la Liberación de Saguia El Hamra y Río de Oro">
            </a>
          </div>
          <div class="informes__txt">
            Informe sobre la Organización Avanzada para la Liberación de Saguia El Hamra y Río de Oro, en el que se describe su actividad y se asesora sobre la forma más adecuada de neutralizarla.
          </div>
        </div>

        <div class="informes__item">
          <div class="informes__img">
            <a href="/static/media/pdf/informe3.pdf">
              <img src="/static/img/informes/informe3.png" alt="Declaración de un militante del movimiento">
            </a>
          </div>
          <div class="informes__txt">
            Declaración de un militante del movimiento, en la que se relatan detalles sobre la preparación de la manifestación de Zemla y su desarrollo, así como sobre el funcionamiento de la organización.
          </div>
        </div>

        <div class="informes__item">
          <div class="informes__img">
            <a href="/static/media/pdf/informe4.pdf">
              <img src="/static/img/informes/informe4.png" alt="Informe de la policía territorial sobre lo sucedido en Zemla">
            </a>
          </div>
          <div class="informes__txt">
            Informe de la policía territorial sobre lo sucedido en Zemla.
          </div>
        </div>

        <div class="informes__item">
          <div class="informes__img">
            <a href="/static/media/pdf/informe5.pdf">
              <img src="/static/img/informes/informe5.png" alt="Declaración de Mohamed Basiri tras ser detenido">
            </a>
          </div>
          <div class="informes__txt">
            Declaración de Mohamed Basiri tras ser detenido a raíz de los acontecimientos de Zemla.
          </div>
        </div>

      </div>

      <footer class="links">
        <router-link :to="{name: 'home'}">Volver</router-link>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'basiri-page',
}
</script>

<style lang="scss">
.page__wrap--informes {
  .informes {
    &__list {}
    &__item {
      display: flex;
      margin-bottom: 20px;
    }
    &__img {
      img {
        width: 80px;
        height: auto;
      }
    }
    &__txt {
      margin-left: 10px;
      word-break: break-word;
    }
  }
}

@media screen and (min-width: 560px) {
.page__wrap--informes {
  .informes {
    &__img {
      img {
        width: 120px;
      }
    }
    &__txt {
      margin-left: 10px;
      word-break: keep-all;
    }
  }
}
}
</style>