<template>
    <div class="container">
      <div class="row justify-content-center">
      <!--<h1>My project {{ $route.params.id }}</h1>-->
         
           <SingleCard class="card p-0 col-5 mx-4 my-5 " :title="project.title"  :image="project.image" :description="project.description" 
            ::fullLenghth="true"/>
  
   
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
        project: {},
        id:'',
      }
    },
  
    methods: {
      getProject() {
        axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`, {
            params: {
  
            }
          })
          .then((response) => {
            console.log(response.data.results);
            this.project = response.data.results;
          })
          .catch(function (error) {
            console.warn(error);
            //this.$router.push({name:'not-found'})
          });
      },
    },
    components:{
          SingleCard
    },
  
    created() {
      this.getProject();
    },
  };
  </script>
  
  <style lang="scss" scoped>



  </style>
  