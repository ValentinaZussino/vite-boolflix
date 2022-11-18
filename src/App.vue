<template>
  <div class="main-wrapper">
    <HeaderComponent/>
    <main>
      <VideoComponent v-if="!store.options.params.query"/>
      
        <ContainerCardsComponent v-else v-for="(el, index) in endpointsList" :endPoint="el"/>
      
    </main>
  </div>
</template>

<script>
import {store} from './store'
import ContainerCardsComponent from './components/ContainerCardsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import VideoComponent from './components/VideoComponent.vue';

  export default {
    components: { HeaderComponent, ContainerCardsComponent, VideoComponent },
    data(){
      return {
        store,
        endpointsList: ['/search/movie', '/search/tv']
      }
    }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  height: 100vh;

  main {
    height: 100%;
    padding-top: 70px;
  }
}

</style>