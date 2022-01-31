<template>
    <div class="mb-10">
        <div class="vid-container" v-html="embed.embed"></div>
        <span class="figcaption">{{embed.caption}}</span>
    </div>
</template>

<script>

export default ({
    props: {
        embed: Object
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