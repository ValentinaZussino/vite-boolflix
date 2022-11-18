<template>
    <div class="vz_video">
        <video src="/video/Particelle.mp4" autoplay muted loop></video>
    </div>
</template>

<script>
    export default {
        name: 'VideoComponent'
    }
</script>

<style lang="scss" scoped>
.vz_video {
    height: 100%;
    overflow: hidden;

    video {
        // width: 100%;
        height: 100%;
    }
}
</style>