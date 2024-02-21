<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">Projects</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link,index) in linkItems" :key="index">
              <router-link
                :to="{ name: link.routeName }"
                class="nav-link active">
              {{link.label}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      linkItems: [
        {
          label: 'Homepage',
          routeName: "home",
        },
        {
          label: 'ProjectList',
          routeName: "projects",
        },
        {
          label: 'TypesList',
          routeName: "types",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
