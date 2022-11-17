<template>
    <header>
        <!-- left side -->
        <div class="left-header">
            <!-- logo -->
            <div class="logo">
                <img src="/img/favicon.ico" alt="logo boolflix">
            </div>
            <!-- nav -->
            <nav> 
                <ul>
                    <li class="text-white">Home</li>
                    <!-- farmi i li dinamici -->
                </ul>
            </nav>
        </div>
        
        <!-- right side -->
        <div class="right-header">
            <input type="text" placeholder="Search Title" class="ps-2 me-1" @keyup.enter="store.atClick = !store.atClick" v-model="store.options.params.query">
            <button class="btn btn-outline-light" @click="store.atClick = !store.atClick">Search</button>
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
    height: 60px;
    padding: 10px;
    @include dflex('between');

    .left-header {
        @include dflex-base;
        
        .logo {
            width: 100px;
            margin-right: 10px;
        }

        nav ul {
            @include dflex('center');
            list-style-type: none;
            margin: 0;
            padding: 0 10px;
        }
    }
    .right-header {
        @include dflex-base;

        input, button {
            border-radius: 5px;
        }
    }
}

</style>