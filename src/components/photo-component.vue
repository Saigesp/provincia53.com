<template>
    <div class="component component--photo">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <h3>{{datum.title}}</h3>
            <p v-if="datum.desc">{{datum.desc}}</p>
            <div class="component__photo">
                <img :src="'/static'+datum.file" :alt="datum.title">
            </div>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'photo-component',
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        }
    },
}
</script>