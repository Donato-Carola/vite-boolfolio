<template lang="">
  <div>
    <img :src="image" class="w-100" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>

      <p class="card-text">tecnlogie usate:</p>
      <div v-if='linkRoute'>
        <a :href="{ linkRoute }" class="btn btn-primary">
          {{ linkLabel }}
        </a>
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
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
img{

  height: 250px;
  object-fit: cover;
}

</style>
