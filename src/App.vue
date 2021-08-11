<template>
  <v-app>
    <default v-if="!isLoggedIn">
      <v-fade-transition hide-on-leave>
        <router-view class="mt-0" />
      </v-fade-transition>
    </default>
    <auth v-else>
      <v-fade-transition hide-on-leave>
        <router-view class="mt-0" />
      </v-fade-transition>
    </auth>
    <toast />
  </v-app>
</template>

<script>
import Default from "./components/layouts/default";
import Auth from "./components/layouts/auth.vue";
import Toast from "./components/utils/toast.vue";
import { mapGetters } from "vuex";
import "@/styles/style.css";

export default {
  name: "App",
  components: { Default, Auth, Toast },
  computed: {
    ...mapGetters("auth", { isLoggedIn: "isLoggedIn" }),
  },
};
</script>

<style></style>
