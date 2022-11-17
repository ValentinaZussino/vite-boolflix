<template>
  <div class="main-wrapper">
    <HeaderComponent/>
    <main>
      <ContainerCardsComponent v-for="(el, index) in endpointsList" :endPoint="el"/>
    </main>
  </div>
</template>

<script>
import ContainerCardsComponent from './components/ContainerCardsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: { HeaderComponent, ContainerCardsComponent },
    data(){
      return {
        endpointsList: ['/search/movie', '/search/tv']
      }
    }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  height: 100vh;
  // overflow: hidden;

  main {
    padding-top: 70px;
  }
}

</style>