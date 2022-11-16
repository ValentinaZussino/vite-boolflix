<template>
    <header>
        this is header
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
header {
    background-color: $black;
    width: 100%;
    height: 80px;
}

</style>