<template>
  <HeaderComponent/>
  <main>
    <ContainerCardsComponent/>
  </main>
</template>

<script>
import ContainerCardsComponent from './components/ContainerCardsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: { HeaderComponent, ContainerCardsComponent }
}
</script>

<style lang="scss" scoped>

</style>