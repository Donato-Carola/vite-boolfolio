<template>
  <div class="container">
    <div class="row justify-content-center">
  
       
          <SingleCard class="card p-0 col-3 mx-4 my-5 "  v-for="project in projects" :key="project.id"  
          :title="project.title"  :image="project.image" :description="project.description" 
          />

 
</div>
  </div>
</template>

<script>
import axios from "axios";
import SingleCard from "../components/SingleCard.vue";

export default {
  name:'ProjectList',

  data() {
    return {
      projects: [],
    }
  },

  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects", {
          params: {

          }
        })
        .then((response) => {
          console.log(response.data.results.data);
          this.projects = response.data.results.data;
        })
        .catch(function (error) {
          console.warn(error);
          this.$router.push({name:'not-found'})
        });
    },
  },
  components:{
        SingleCard, 
  },

  created() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped>
</style>
