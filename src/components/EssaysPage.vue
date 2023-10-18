<template>
  <div class="root">
    <h2>Essays</h2>
    <div>
      I wrote a few essays on various political and social topics while I was a student a couple years ago.
      I copied below those I still find relevant after some modifications.
      I may write new ones in the future if I find inspiration
    </div>
    <ul>
      <li v-for="essay in essays" :key="essay.filename">
        <router-link :to="'/essays/' + essay.filename">{{ essay.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const essays = ref([]);

      const fetchessays = async () => {
      try {
        const response = await fetch("/essays/essays_metadata.json");

        if (!response.ok) {
          // If the file was not found, the status would typically be 404
          if (response.status === 404) {
            console.error("File not found:", response.statusText);
          } else {
            // Handle other HTTP errors
            console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
          }
          return;  // Exit early on error
        }

        const data = await response.json();
        essays.value = data;

      } catch (error) {
        console.error("Error fetching essays:", error);
      }
    };

    fetchessays()

      return {
        essays
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .root {
  display: flex;
  flex-direction: column;
  gap: 24px;
  }

  ul {
  margin-top: 8px;
  margin-bottom: 0px;
  padding-left: 24px;
  }

  li {
  margin-bottom: 4px;
  }

</style>