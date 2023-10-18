<template>
  <div class="root">
    <div class="columns-container">
      <div class="left-part">
        <h2>Robin Picard</h2>
        <div>
          I currenlty live in Paris and work as a data engineer at Pigment. Before that, I was a data analyst and analytics engineer at Pennylane. I grew up in Nancy, France.
        </div>
      </div>
      <div class="right-part">
        <img src="../../public/portrait.jpg" alt="Description of Image">
      </div>
    </div>
    <div class="standard-part">
      I use this blog to document the few programing projects I've worked on as well as to share essays I've written on various social or political topics.
      <br/><br/>
      I have numerous other interests including economics and philosophy. I also particularly enjoy home improvement and related manual work even though I don't have the opportunity to do much of that in Paris.
      <br/><br/>
      I've listed my contact information in the Contact page in case you want to reach out. Feel free to do so as I enjoy receiving messages.
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .root {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .columns-container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 40px
  }

  .left-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .right-part img {
      width: 120px;
      height: auto;
  }

</style>
  