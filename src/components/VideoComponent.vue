<template>
    <div class="vz_video">
        <!-- <video src="/video/Particelle.mp4" autoplay muted loop></video> -->
        <div class="middle-txt">
            <h1>new in boolflix</h1>
        </div>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SWbxKwlc1Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        top: 9%;
        left: 10px;
        z-index: 500;
        text-align: center;

        h1 {
            color: $black;
            font-size: 47px;
            font-weight: bold;
            text-transform: capitalize;
            text-shadow: 3px 1px 4px rgb(132, 112, 112);
        }
    }
}
</style>