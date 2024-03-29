import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/Homepage.vue';
import ProjectList from './pages/ProjectList.vue';
import TypesList from './pages/TypesList.vue';
import NotFound from './pages/NotFound.vue';
import SingleProject from './pages/SingleProject.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: "/" ,
        name:'home',
        component: HomePage
    },
    { 
        path: "/projects" ,
        name:'projects',
        component: ProjectList
    },
    { 
        path: "/projects/:id" ,
        name:'single-project',
        component: SingleProject
    },
    { 
        path: "/types" ,
        name:'types',
        component: TypesList
    },
    { 
        path: "/404" ,
        name:'not-found',
        component: NotFound
    }




],
});
export { router };
