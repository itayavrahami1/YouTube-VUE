<template>
  <main class="app-main">
    <h1>Beer is nice</h1>
    <beer-filter @filtered="setFilter" />
    <beer-list :beers="beersToShow" @removeBeer="removeBeer" @click.native="logSomething" />
  </main>
</template>

<script>
import beerService from '@/services/beer.service.js';
import BeerList from '@/cmps/BeerList';
import BeerFilter from '@/cmps/BeerFilter';
export default {
  data() {
    return {
      beers: null,
      filterBy: {
        txt: '',
      },
    };
  },
  methods: {
    async loadBeers() {
      this.beers = await beerService.query();
    },
    async removeBeer(id) {
      await beerService.remove(id);
      this.loadBeers();
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    logSomething(){
      console.log('pp');
    }
  },
  computed: {
    beersToShow() {
      if(!this.filterBy) return this.beers
      return this.beers?.filter((beer) =>
        beer.brand.includes(this.filterBy.txt)
      );
    },
  },
  async created() {
    this.loadBeers();
  },
  components: {
    BeerList,
    BeerFilter,
  },
};
</script>

<style>
</style>