<template>
    <div v-show="list.length" class="p-3">
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
}
section {
    min-height: 400px;
    width: 90%;
    margin: 0 auto;
    padding: 25px 0;
    @include dflex('center');
    flex-wrap: wrap;
}
</style>