<template>
  <nav class="app-header flex space-between align-center">
    <h2>Beers are us</h2>
    <div>
      <router-link to="/" exact>Home</router-link>|
      <router-link active-class="active" to="/beer" exact>Beers</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
