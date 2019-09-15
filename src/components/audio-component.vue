<template>
    <div class="component component--audio">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <h3>{{datum.title}}</h3>
            <p>{{datum.desc}}</p>
            <div class="component__audio">
                <audio :src="'/static'+datum.file">
                    <p>Tu navegador no implementa el elemento audio.</p>
                </audio>
            </div>
            <div class="component__poems">
                <div v-for="poem in datum.poems">
                    <div v-html="poem.text"></div>
                    <span>{{poem.author}}</span>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'audio-component',
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        }
    },
}
</script>