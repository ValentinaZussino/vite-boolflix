<template>
    <div class="vz_card col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="imgUrl" :alt="(!!card.title) ? card.title : card.name" :class="(!card.poster_path) ? 'poster-bool' : ''">
        <div class="text-white front-txt-card">
            <div class="fw-bold flag">
                <span><img :src="lang" alt=""></span>
            </div> 
            <div>
                <span v-for="n in 5" class="fa-star vz_stars pe-1" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>
            </div>
            <div>
                <span class="fw-bold fs-3">{{title}}</span>
            </div>
            <div>
                <span>{{originalTitle}}</span>
            </div>
            <div class="mt-3">
                <span class="fw-bold pb-1">Description:</span>
                <div>{{overview}}</div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['card'],
        computed: {
            imgUrl(){
                const imgUrl = (this.card.poster_path) ? `https://image.tmdb.org/t/p/w342/${this.card.poster_path}` : '/img/favicon.ico';
                return imgUrl
            },
            title(){
                const title = (!!this.card.title) ? 'Title: ' + this.card.title : this.card.name;
                return title
            },
            originalTitle(){
                const originalTitle = (!!this.card.original_title) ? 'Original Title: ' + this.card.original_title : this.card.original_name;
                return originalTitle
            },
            overview(){
                const overview = this.card.overview;
                return overview
            },
            stars(){
                return Math.floor(this.card.vote_average / 2);
            },
            lang(){
                let lang = this.card.original_language;
                if(lang == 'en'){
                    lang = 'gb';
                }else if(lang == 'ja'){
                    lang = 'jp';
                }else if(lang == 'zh'){
                    lang = 'cn';
                }else if(lang == 'ko') {
                    lang = 'kr';             
                }else if (lang == 'cs') {
                    lang = 'sk';
                }
                const flag = `https://www.countryflagicons.com/FLAT/48/${lang.toUpperCase()}.png`;
                return flag
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
    background-color: $black;
    cursor: pointer;
    overflow-y: hidden;
    position: relative;
    transition: 1s;

    .poster-bool {
        width: 80%; 
        height: 40%; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .front-txt-card {
        position: absolute;
        top: 0;
        left:0;
        height: 0;
        width: 100%;
        padding: 18px;
        font-size: 15px;
        background-color:rgba(0, 0, 0, 0.67);
        overflow-y: auto;
        opacity: 0;
        transition: opacity 1s, height 2s;
        transition-timing-function: ease-in-out;

        .flag{
            width: 48px;
        }
        .vz_stars{
            color: rgb(255, 170, 0);
        }
    }
    &:hover {
        border-radius: 10px;
        transform: scale(1.2);
        z-index: 300;
        .front-txt-card {
            height: 100%;
            opacity: 1;
        }
    } 
    .front-txt-card::-webkit-scrollbar {
        display: none;
    }
}

</style>