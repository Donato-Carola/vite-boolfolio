<template>
  <div class="container">
    <div class="row">
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
        });
    },
  },

  created() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped>
</style>
