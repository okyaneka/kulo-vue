<template>
  <v-row>
    <v-col>
      <h1 class="text-h1">Heading 1</h1>
      <h2 class="text-h2">Heading 2</h2>
      <h3 class="text-h3">Heading 3</h3>
      <h4 class="text-h4">Heading 4</h4>
      <h5 class="text-h5">Heading 5</h5>
      <h6 class="text-h6">Heading 6</h6>
      <div class="body-1">Body 1</div>
      <div class="body-2">Body 2</div>
      <div class="subtitle-1">Subtitle 1</div>
      <div class="subtitle-2">Subtitle 2</div>
      <div class="caption">Caption</div>
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
