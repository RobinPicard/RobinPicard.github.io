<template>
  <div class="root">
    <h2 v-html="essayTitle"></h2>
    <div v-html="essayContent"></div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    setup() {
      const route = useRoute();
      const essayName = route.params.essayName;

      const essayContent = ref("");
      const essayTitle = ref("");

      const fetchArticleContent = async (essayName) => {
        const response = await fetch(`/essays/${essayName}.txt`);
        const rawContent = await response.text();
        const displayContent = rawContent.replace(/\n/g, '<br>');
        essayContent.value = displayContent;
      };

      const fetchArticleMetadata = async (essayName) => {
        const response = await fetch("/essays/essays_metadata.json");
        const data = await response.json();
        const title = data.find(item => item.filename === essayName).title;
        essayTitle.value = title;
      };

      fetchArticleContent(essayName);
      fetchArticleMetadata(essayName);

      return {
        essayContent,
        essayTitle
      };
    }
  }
</script>

<style scoped>

  .root {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

</style>