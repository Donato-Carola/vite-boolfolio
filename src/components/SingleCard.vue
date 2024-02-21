<template lang="">
  <div>
    <img :src="image" class="img_card" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text" >
        
        {{ description }}
      
      </p>

      

      
      <div v-if='linkRoute'>
        <router-link  :to=" linkRoute " class="btn btn-primary">{{ linkLabel }}</router-link>
          

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    linkRoute: {
      required: false,
      type: [Object, String],
    },
    linkLabel: {
      required: false,
      type: String,
    },
    fullLength: {
      required: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
img{

 
  object-fit: cover;
}

</style>
