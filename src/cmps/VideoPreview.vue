<template>
  <section v-if="video" class="video-preview">
      <!-- <h4>{{video.snippet.title}}</h4> -->
      <h4>{{title}}</h4>
      <img width="210" height="152.5" :src="video.snippet.thumbnails.default.url"/>
  </section>
</template>

<script>
export default {
    props: ['video'],
    computed: {
        videoUrl(){
            return `https://www.youtube.com/embed/${this.video.id.videoId}`
        },
        title(){
            return this.video.snippet.title.substring(0,29) + '...'
        }
    },
}
</script>