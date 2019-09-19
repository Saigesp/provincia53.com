<template>
    <div class="component component--popup component--big component--big-audio" ref="component" @click="closeComponentDesktop()">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content" ref="svgel">
            <h3>{{datum.title}}</h3>
            <svg class="audiowave" viewbox="0 0 100 100" width="200" height="160">
                <g transform="translate(100,0), scale(3)" v-if="isPlaying">
                    <svg-wave></svg-wave>
                </g>
            </svg>
            <audio controls :src="'/static'+datum.link" v-on:play="onPlay()" v-on:pause="onStop()" v-on:ended="onStop()">
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</template>



<script>
import EventBus from '../plugins/bus'

export default {
    name: 'bigaudio-component',
    data: function(){
        return {
            isPlaying: false,
            width: 100,
            height: 160,
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
        },
        onPlay(){
            this.isPlaying = true;
        },
        onStop(){
            this.isPlaying = false;
        },
    },
}
</script>


<style lang="scss">
.audiowave {
    margin: 0 auto;
    display: block;
    .wave__controls {
        display: none !important;
    }
}
</style>