<template>
    <header>
        <!-- left side -->
        <div class="left-header">
            <!-- logo -->
            <div class="logo">
                <img src="/img/favicon.ico" alt="logo boolflix">
            </div>
            <!-- nav -->
            <nav class="h-100"> 
                <ul>
                    <li class="text-white" v-for="(link, i) in store.navLinks" :key="i"><a href="">{{link}}</a></li>
                </ul>
            </nav>
        </div>
        
        <!-- right side -->
        <div class="right-header">
            <input type="text" placeholder="Search Title" class="ps-2 py-1 me-2" @keyup.enter="store.atClick = !store.atClick" v-model="store.options.params.query">
            <button class="btn btn-outline-light" @click="store.atClick = !store.atClick">search</button>
        </div>
    </header>
</template>

<script>
import {store} from '../store'
    export default {
        name: 'HeaderComponent',
        data (){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
header {
    background-color: $black;
    width: 100%;
    height: 80px;
    padding: 10px 15px 0 15px;
    @include dflex('between');
    position: fixed;
    z-index: 1000;

    .left-header {
        @include dflex-base;
        height: 100%;
        
        .logo {
            width: 150px;
            padding-bottom: 10px;
            margin-right: 10px;
        }

        nav ul {
            @include dflex('center');
            height: 100%;
            list-style-type: none;
            padding: 0 10px;

            li {
                height: 100%;
                text-align: center;
                line-height: 60px;
                margin-right: 20px;

                a {
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 1.1px;
                    color: $white;
                    transition: 1s; 
                }

                &:hover {
                    border-bottom: 3px solid $title_red;

                    a {
                        font-size: 17px;
                        color: $gray_link;
                    }
                }
            }
        }
    }
    .right-header {
        @include dflex-base;

        input, button {
            border-radius: 5px;
            text-transform: capitalize;
        }
    }
}

</style>