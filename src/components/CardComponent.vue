<template>
    <div></div>
    <div class="vz_card">
        <img :src="(card.poster_path) ? `https://image.tmdb.org/t/p/w342/${card.poster_path}` : '/img/favicon.ico'" :alt="(!!card.title) ? card.title : card.name">
        <div class="text-white front-txt-card">
            <div v-html="'Lang: ' + card.original_language" class="fw-bold"></div> 
            <div v-html="'Vote: ' + card.vote_average" class="fw-bold"></div>
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
        props: ['card']
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
.vz_card {
    width: 342px;
    // min-height: 480px;
    margin-right: 20px;
    margin-bottom: 15px;
    // background-color: $black;
    position: relative;

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
        display: none;
    }
    &:hover .front-txt-card {
        display: block;
    }
}
</style>