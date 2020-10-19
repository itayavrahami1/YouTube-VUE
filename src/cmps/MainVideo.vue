<template>
  <section class="main-video">
    <iframe width="630" height="457.5"
        :src="videoUrl">
        </iframe>
  </section>
</template>

<script>
export default {
  props: ["video"],
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
  },
};
</script>