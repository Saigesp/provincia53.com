<template>
    <div class="component component--poem">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <div class="component__poem">
                <p>{{datum.text}}</p>
                <p><strong>({{datum.author}})</strong></p>
            </div>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'poem-component',
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        }
    },
}
</script>