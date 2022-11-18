<template>
    <div class="vz_video">
        <video src="/video/Particelle.mp4" autoplay muted loop></video>
        <div class="middle-txt">
            <h1>future entertainment is here</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VideoComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
.vz_video {
    height: 100%;
    overflow: hidden;
    position: relative;

    video {
        height: 100%;
    }

    .middle-txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 500;
        text-align: center;

        h1 {
            color: $black;
            font-size: 47px;
            font-weight: bold;
            text-transform: capitalize;
            text-shadow: 3px 1px 6px $title_red;
        }
    }
}
</style>