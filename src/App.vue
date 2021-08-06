<template>
  <default>
    <v-fade-transition hide-on-leave>
      <router-view class="mt-0"/>
    </v-fade-transition>
  </default>
</template>

<script>
import Default from "./components/layouts/default";
import "@/styles/style.css";

export default {
  components: { Default },
};
</script>

<style></style>
