<template>
    <div class="component component--text component--popup" ref="component" @click="closeComponentDesktop()">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <h3>{{datum.title}}</h3>
            <p v-if="datum.desc">{{datum.desc}}</p>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'text-component',
    data: function(){
        return {
            minScaleSize: 860, // Check CSS media queries
        }
    },
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        },
        closeComponentDesktop(){
            if(parseInt(this.$refs.component.offsetWidth) >= this.minScaleSize) this.closeComponent();
        }
    },
}
</script>