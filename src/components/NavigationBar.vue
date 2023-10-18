<template>
  <nav>
    <router-link class="section" to="/">Home</router-link>
    <router-link class="section" to="/programing">Programing projects</router-link>
    <router-link class="section" to="/essays">Essays</router-link>
    <router-link class="section" to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>

nav {
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: transparent;
  gap: 20px;
}

nav a {
  color: black;
  font-size: 18px;
  font-weight: 600;
}

.section {
  width: fit-content;
}

</style>