<template>
  <div class="root">
    <h2>Contact</h2>
    <div>Please don't hesitate to reach out about anything!</div>
    <div class="contact-links">
      <span>Online, you can find me on:</span>
      <ul>
        <li>Email: robin.picard@sciencespo.fr</li>
        <li>Github: <a href="https://github.com/RobinPicard">https://github.com/RobinPicard</a></li>
        <li>Linkedin: <a href="https://www.linkedin.com/in/robin-picard-58b49a159/">https://www.linkedin.com/in/robin-picard-58b49a159/</a></li>
        <li>Twitter: <a href="https://twitter.com/robin_pic">https://twitter.com/robin_pic</a></li>
      </ul>
    </div>
    <div>Outside of the Internet, I live in Paris and regularly travel to Nancy.</div>
  </div>
</template>
  
<script>
  export default {
    name: 'ContactPage'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .root {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  ul {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
  }

</style>
  