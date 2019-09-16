<template>
    <div class="component component--text">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <h3>{{datum.title}}</h3>
            <p>{{datum.desc}}</p>
            <div class="component__pdf">
                <a :href="'/static'+datum.file">
                    <img :src="previewFile(datum.file)" alt="Archivo">
                </a>
            </div>
            <div class="component__poems" v-if="datum.poems">
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
    name: 'pdf-component',
    props: ['datum'],
    methods: {
        closeComponent(){
            EventBus.$emit('close-component')
        },
        previewFile(path){
            let file = path.split('.')
            return `/static${file[0]}.png`
        }
    },
}
</script>