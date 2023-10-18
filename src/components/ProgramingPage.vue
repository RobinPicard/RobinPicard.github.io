<template>
  <div class="root">
    <h2>Programing Projects</h2>
    <div>
      Outside of my job, I've worked on a few programing projects.
      Those were useful to me as they allowed me to aquire new skills.
      I'm currently looking for the next one!
    </div>
    <h3>
      cloud-functions-test
    </h3>
    <div>
      This is a Python library created to help users test their GCP Cloud Functions locally before deploying them.
      The tests are defined with an interface intended to look similar to that of unit tests libraries.
      For each of your function, you can define inputs and expected outputs.
      The function is then run on a local server and the actual output is compared to the expected one.
      <br/><br/>
      You can find the code-source of the library on <a href="https://github.com/RobinPicard/cloud-functions-test">Github</a>
    </div>
    <h3>
      Metabase-Chatgpt
    </h3>
    <div>
      This is a Chrome extension made to add Chatgpt-powered features to Metabase.
      It allows the user to enter a prompt in the metabase UI and let Chatgpt write a query for them.
      There's also a feature to ask Chatgpt to explain the origin of a database error.
      The extension includes the option of creating a vector embedding of the user's database structure to provide context to Chatgpt for more accurate answers.
      <br/><br/>
      You can find the code-source of the extension on <a href="https://github.com/RobinPicard/metabase-chatgpt">Github</a>
      <br/><br/>
      You can download the extension from the <a href="https://chrome.google.com/webstore/detail/metabase-chatgpt/kkkpnhdoamjghmnjpailmpndjlegkmnh">Chrome web store</a>
    </div>
    <h3>
      Sappy
    </h3>
    <div>
      This is a mobile application designed to help couples in long-distance relationships communicate better.
      The app was released for both Android and Apple but was later taken down of the App Store because it's a rather old project and I don't want to pay the Apple developer account fee.
      The app is written using the kivy framework for Python and uses Firebase for the database and file storage. 
      <br/><br/>
      You can find on the <a href="https://play.google.com/store/apps/details?id=org.ldr.sappy&gl=FR">Google Play Store</a>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProgramingPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.root {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

</style>
  