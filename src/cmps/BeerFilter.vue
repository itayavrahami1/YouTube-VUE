<template>
  <section>
    <input @input="setFilter" type="text" v-model="filterBy.txt" placeholder="Search something...."/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: '',
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('filtered', this.filterBy);
    },
  },
};
</script>
