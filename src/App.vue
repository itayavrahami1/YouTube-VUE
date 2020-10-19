<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/cmps/AppHeader'
import AppFooter from '@/cmps/AppFooter'
export default {
  components:{
    AppHeader,
    AppFooter
  }
}
</script>
