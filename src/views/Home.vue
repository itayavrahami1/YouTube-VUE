<template>
  <div class="main-content main-container" v-if="videos">
    <form class="search-bar" @submit.prevent="searchVideos">
      <input
        type="text"
        v-model="titleToSearch"
        placeholder="Search a video.."
      />
      <button>Search</button>
    </form>
    <section class="videos flex space-between" v-if="videos">
      <videos-list :videos="videos" @chooseVideo="setMainVideo"/>
      <main-video v-if="mainVideo" :video="mainVideo"/>
    </section>
  </div>
</template>

<script>
import { youtubeService } from "@/services/youtubeService";
import VideosList from "@/cmps/VideosList";
import MainVideo from "@/cmps/MainVideo";

export default {
  data() {
    return {
      titleToSearch: "",
      videos: null,
      mainVideo: null,
    };
  },
  methods: {
    async loadVideos(videoTitle = ''){
      this.videos = await youtubeService.query(videoTitle);
    },
    setMainVideo(video){
      this.mainVideo = video;
    },
    searchVideos() {
      const titleAsArr = this.titleToSearch.split(" ");
      let qStr = "";
      for (let i = 0; i < titleAsArr.length; i++) {
        qStr += `${titleAsArr[i]}&`;
      }
      qStr = qStr.substring(0, qStr.length - 1);
      this.loadVideos(qStr)
    },
  },
  async created() {
    this.loadVideos()
  },
  components: {
    VideosList,
    MainVideo
  },
};
</script>
