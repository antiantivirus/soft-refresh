<template>
    <div class="mb-10">
        <video controls>
            <source :src="video.video">
        </video>
        <span class="figcaption">{{video.caption}}</span>
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
video {
    width: 100%;
    max-width: 100%;
}

</style>