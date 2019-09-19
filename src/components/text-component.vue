<template>
    <div class="component component--text">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <h3>{{datum.title}}</h3>
            <p>{{datum.desc}}</p>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'text-component',
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        }
    },
}
</script>