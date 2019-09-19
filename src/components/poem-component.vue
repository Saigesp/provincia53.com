<template>
    <div class="component component--poem component--popup" ref="component" @click="closeComponentDesktop()">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <div class="component__poem">
                <p>{{datum.text}}</p>
                <p v-show="datum.author"><strong>({{datum.author}})</strong></p>
            </div>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'poem-component',
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