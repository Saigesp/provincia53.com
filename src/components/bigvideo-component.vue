<template>
    <div class="component component--big component--big-video">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <h3>{{datum.title}}</h3>
            <div class="component__video">
                <iframe :src="datum.link" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'bigvideo-component',
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        }
    },
}
</script>