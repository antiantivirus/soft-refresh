<template>
    <div class="mb-10">
        <div class="vid-container" v-html="video.video"></div>
        <span>{{video.caption}}</span>
    </div>
</template>

<script>

export default ({
    props: {
        video: Object
    }
})
</script>


<style>
.vid-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.vid-container iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>