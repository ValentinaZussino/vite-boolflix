<template>
    <div class="vz_card col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="(card.poster_path) ? `https://image.tmdb.org/t/p/w342/${card.poster_path}` : '/img/favicon.ico'" :alt="(!!card.title) ? card.title : card.name">
        <div class="text-white front-txt-card">
            <div v-html="'Lang: ' + card.original_language" class="fw-bold"></div> 
            <div>
                <span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>
            </div>
            <div v-html="(!!card.title) ? 'Title: ' + card.title : card.name" class="fw-bold"></div>
            <div v-html="(!!card.original_title) ? 'Original Title: ' + card.original_title : card.original_name"></div>
            <div class="mt-3">
                <span class="fw-bold">Description:</span>
                <div v-html="card.overview" ></div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['card'],
        computed: {
            stars(){
                return Math.ceil(this.card.vote_average / 2);
            }
        }

    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
.vz_card {
    height: 450px;
    max-height: 450px;
    margin-right: 20px;  
    position: relative;
    cursor: pointer;
    overflow-y: hidden;

    .front-txt-card {
        position: absolute;
        bottom: 0;
        top: 0;
        left:0;
        right: 0;
        width: 100%;
        padding: 10px;
        font-size: 15px;
        background-color:rgba(0, 0, 0, 0.665);
        overflow-y: auto;
        opacity: 0;
        transition: opacity 1.5s;
        transition-timing-function: ease-in-out;
    }
    &:hover .front-txt-card {
        opacity: 1;
    }
    .front-txt-card::-webkit-scrollbar {
        width: 5px;
        height: 10px;
        background-color: #aaa; 
        border-radius: 5px;
    }
}

</style>