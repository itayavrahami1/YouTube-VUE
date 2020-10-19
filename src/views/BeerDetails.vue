<template>
  <section class="app-main">
    <div class="flex align-center column" v-if="beer">
      <h3>{{beer.brand}}</h3>
      <p>Alc is {{alcPrecentage}}</p>
    </div>
    <div v-else class="loading flex justify-center align-center">
      <img src="@/assets/img/loading.svg" />
    </div>
  </section>
</template>

<script>
import beerService from '@/services/beer.service.js';

export default {
  data() {
    return {
      beer: null,
    };
  },
  computed: {
    alcPrecentage() {
      return this.beer.alc + '%';
    },
  },
  created() {
    setTimeout(async () => {
      const { id } = this.$route.params;
      this.beer = await beerService.get(id);
    }, 2000);
  },
};
</script>
