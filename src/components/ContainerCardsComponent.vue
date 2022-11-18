<template>
    <div v-show="list.length" class="p-4">
       <h2>{{sectionTitle}}</h2>
    </div>
    <section>
        <CardComponent v-for="(item, index) in list" :key="index" :card="item"/>
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';
import axios from 'axios';
import {store} from '../store'

    export default {
    name: "ContainerCardsContainer",
    components: { CardComponent },
    data(){
        return {
            store,
            list: []
        }
    },
    watch: {
        'store.atClick'() {
            this.getApi();
        }
    },
    props: ['endPoint'],
    methods: {
        getApi(){
            const url = store.apiURL + this.endPoint;
            axios.get(url, store.options).then((res)=>{
                this.list = [...res.data.results];
                console.log(res.data.results);
            })
        }
    },
    computed: {
        sectionTitle(){
            if(this.endPoint.includes('tv')){
                return 'Serie TV'
            }else if(this.endPoint.includes('movie')){
                return 'Movies'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

h2 {
    color: $white;
    font-weight: bold;
    font-size: 2.3rem;
    letter-spacing: 1.5px;
    text-shadow: 4px 4px 3px $black;
}
section {
    width: 97%;
    margin: 0 auto;
    padding: 45px 0 45px 32px;
    @include dflex-base;
    flex-wrap: nowrap;
    overflow-x: auto;
}
section::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    background-color: #aaa; 
    border-radius: 5px;
    visibility: hidden;

    &:hover {
        visibility: visible;
    }
}
</style>