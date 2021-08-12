<template>
  <div>
    <v-snackbar
      v-for="(toast, index) in toasts"
      v-model="toast.state"
      :height="height"
      top
      text
      outlined
      :color="toast.type"
      :key="toast.key"
      :style="{ top: top(index), transition: 'all .3s' }"
      @input="handleInput(toast, $event)"
    >
      <v-icon left :color="toast.type">${{ toast.type }}</v-icon>
      {{ toast.text }}
      <template v-slot:action="{ attrs }">
        <v-btn :color="toast.type" icon v-bind="attrs" @click="handleClose(toast)">
          <v-icon>$close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data: () => ({
    height: 48,
    space: 4,
    toasts: [],
  }),
  created() {
    this.$root.$on("push:toast", this.push);
  },
  methods: {
    top(index) {
      return (this.height + this.space * 2) * index + "px";
    },
    push(toast) {
      let options = toast;
      if (typeof toast == "string") {
        options = { state: false, text: toast, type: "info" };
      }
      Object.assign(options, { key: this.random(4), type: options.type || "info" });
      const index = this.toasts.push(options) - 1;
      setTimeout(() => {
        this.$set(this.toasts[index], "state", true);
      }, 1);
    },
    handleInput(toast, open) {
      if (!open) {
        setTimeout(() => {
          const index = this.toasts.findIndex((val) => val.key == toast.key);
          this.toasts.splice(index, 1);
        }, 150);
      }
    },
    handleClose(toast) {
      this.$set(toast, "state", false);
      this.handleInput(toast, false);
    },
    random(char) {
      let chars = "";
      for (let i = 0; i < char; i++) {
        chars += Math.floor(Math.random() * 32).toString(32);
      }
      return chars;
    },
  },
};
</script>
