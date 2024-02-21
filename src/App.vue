<script >
import AppHeader from './components/AppHeader.vue';




export default{
  components:{
    AppHeader,
   
  }
}


</script>

<template>


<AppHeader/>

<!--questo è il luogo dove tuttto può cambiare in base alle route-->

<router-view>

</router-view>


</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
