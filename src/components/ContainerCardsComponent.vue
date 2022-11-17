<template>
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
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    border: 1px solid red;
    min-height: 400px;
    width: 90%;
    margin: 0 auto;
    padding: 25px 0;
    @include dflex('center');
    flex-wrap: wrap;
}
</style>