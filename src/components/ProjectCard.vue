<template>
   
   <div class="first card border-0 col-lg-3 flex-nowrap d-flex align-items-center" >
  <img :src="project.image" class="w-100" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <p class="card-text">{{project.description}}</p>
    <p class="card-text">creato da: {{project.user.name}}</p>
    <p class="card-text">tecnlogie usate:</p>
    <ul>
            <li v-for="(technology,index) in project.technologies" :key="index">{{technology.name}}</li>
            
    </ul>
  </div>
</div>





</template>
  




  <script>
  export default {
    props:{
        project:{
            type:Object,
            required:true
        }
    }
    
}
  </script>
  


  <style lang="scss">


  </style>
  