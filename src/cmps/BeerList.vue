<template>
  <ul class="beer-list clean-list flex wrap justify-center">
    <beer-preview v-for="beer in beers" :key="beer._id" :beer="beer" @remove="remove" />
  </ul>
</template>

<script>
import BeerPreview from '@/cmps/BeerPreview';
export default {
  props: ['beers'],
  components: {
    BeerPreview,
  },
  methods: {
    remove(id) {
      this.$emit('removeBeer', id);
    },
  },
};
</script>

<style>
</style>