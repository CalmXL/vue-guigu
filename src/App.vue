<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

  export default {  
    components: { FooterGuide },
    mounted() {
      this.$store.dispatch('getAddress')
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/styuls" >
  
</style>
 