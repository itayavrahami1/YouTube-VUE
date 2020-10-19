<template>
  <section class="video-list">
    <div v-for="video in videos" :key="video.id.videoId" @click="onVideo(video)">
      <video-preview :video="video" />
    </div>
  </section>
</template>

<script>

import VideoPreview from '@/cmps/VideoPreview'

export default {
  props: ["videos"],
  methods: {
      onVideo(video){
          this.$emit('chooseVideo',video)
      }
  },
  components: {
      VideoPreview
  }
};
</script>