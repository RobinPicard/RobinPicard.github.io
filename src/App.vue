<template>
  <div id="app-background"></div>
  <div id="app-navigation-bar">
    <NavigationBar />
  </div>
  <div id="app-page">
    <div id="app-page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>

#app {
  min-width: 1320px;
  font-family: Garamond;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  color: #000133;
  font-size: 17px;
}

body {
  margin: 0px;
  overflow-y: hidden;
}

#app-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../public/background.jpeg') no-repeat center center fixed; 
  background-size: cover;
  z-index: -1;
}

#app-navigation-bar {
  position: fixed;
  top: 40px;
  left: 40px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
}

#app-page {
  width: 640px;
  height: 100vh;
  overflow-y: auto;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background-color: rgb(255, 255, 247);
}

#app-page-wrapper {
  padding: 40px 60px;
}

h2, h3 {
  color: #840000 
}

h2 {
  margin-top: 0px;
  margin-bottom: 12px;
}

h3 {
  margin-top: 24px;
  margin-bottom: 12px;
}

a {
  color: rgb(2, 2, 205);
}

</style>
