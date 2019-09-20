<template>
    <div class="component component--pdf">
        <div class="component__controls">
            <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
        </div>
        <div class="component__content">
            <span class="datestr" v-if="datum.datestr">{{datum.datestr}}</span>
            <h3>{{datum.title}}</h3>
            <p v-if="datum.desc">{{datum.desc}}</p>
            <div class="component__photo" v-if="datum.photo">
                <img :src="'/static'+datum.photo" :alt="datum.title">
            </div>
            <div class="component__pdf" v-if="datum.file">
                <a :href="'/static'+datum.file" target="_blank">
                    <img :src="previewFile(datum.file)" alt="Archivo">
                </a>
            </div>
            <div class="component__pdf component__pdf--multiple" v-if="datum.files">
                <a :href="'/static'+file" target="_blank" v-for="file in datum.files">
                    <img :src="previewFile(file)" alt="Archivo">
                </a>
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