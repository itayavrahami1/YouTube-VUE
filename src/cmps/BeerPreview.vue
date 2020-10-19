<template>
  <li class="beer-preview flex column space-between">
    <pre>{{beer}}</pre>
    <section class="actions ">
        <button @click="remove">Remove</button>
        <button>
            <router-link :to="`/beer/${beer._id}`" >Details</router-link>
        </button>
    </section>
  </li>
</template>

<script>
export default {
    props:['beer'],
    methods:{
        remove(){
            this.$emit('remove',this.beer._id)
        }
    }

};
</script>

<style>
</style>