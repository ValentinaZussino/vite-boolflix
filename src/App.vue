<template>
  <HeaderComponent/>
  <main>
    <ContainerCardsComponent v-for="(el, index) in endpointsList" :endPoint="el"/>
  </main>
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

</style>