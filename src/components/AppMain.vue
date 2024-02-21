<template>
  <h1>Main</h1>
 <div class="container">
  <div class="row">
   <ProjectList v-for="(project, index) in projects" :key="index" :project="project"/>
  </div>

</div>

  

<!--<ul>
    <li v-for="project in projects" :key="project.id">
         {{ project.title }}

    
    </li>
   </ul>
--> 










</template>

<script>
import axios from "axios";
import ProjectList from "../pages/ProjectList.vue";
export default {
components:{
    ProjectList,
  },

data() {
    return{
          projects:[],
    }
  


  },

  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects", {
          params: {
         },
        })
        .then( (response) => {
          console.log(response.data.results.data);
          this.projects=response.data.results.data
        })
        .catch(function (error) {
          console.warn(error);
        })
       
  },
},

  created() {
    this.getProjects();
  },
};
</script >

<style lang="scss" scoped>



</style>
