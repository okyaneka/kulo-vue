<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title class="justify-center">{{ $t("Login") }}</v-card-title>
      <v-col>
        <v-text-field
          v-model="formData.id"
          :rules="validation($t('Email / Username'), 'required')"
          :label="$t('Email / Username')"
          :disabled="loading"
        />
        <v-text-field
          v-model="formData.password"
          :type="password"
          :rules="validation($t('Password'), 'required|min:8')"
          :label="$t('Password')"
          :disabled="loading"
          :append-icon="passwordIcon"
          @click:append="password = password ? '' : 'password'"
        />
        <v-spacer class="py-2" />
        <v-btn block color="primary" :loading="loading" type="submit">{{ $t("Login") }}</v-btn>
        <v-spacer class="py-2" />
        <v-row no-gutters justify="center">
          <router-link :to="{ name: 'forget-password' }">
            {{ $t("Forget password?") }}
          </router-link>
        </v-row>
      </v-col>
    </v-card>
    <v-spacer class="py-4" />
    <v-row no-gutters justify="center">
      <span>{{ $t("Doesn't have an account?") }}</span>
      &nbsp;
      <router-link :to="{ name: 'register' }">{{ $t("Register") }}</router-link>
    </v-row>
  </v-form>
</template>

<script>
import validation from "@/mixins/validation";
import storage, { REDIRECT } from "@/helper/storage";

export default {
  name: "Login",
  mixins: [validation],
  data: () => ({
    loading: null,
    formData: {},
    password: "password",
  }),
  computed: {
    passwordIcon() {
      if (this.password) {
        return "mdi-eye";
      }
      return "mdi-eye-off";
    },
  },
  methods: {
    async handleSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          if (this.formData.id != "admin") {
            return this.$root.$emit("toast:push", {
              type: "error",
              text: this.$t("Couldn't find your account!"),
            });
          }
          if (this.formData.password != "password") {
            return this.$root.$emit("toast:push", {
              type: "error",
              text: this.$t("Wrong password!"),
            });
          }
          this.$root.$emit("toast:push", {
            type: "success",
            text: this.$t("Login success!"),
          });
          this.$store.commit("auth/SET_USER", { token: "token" });
            console.log(storage.get(REDIRECT));
          if (storage.get(REDIRECT)) {
            const redirect = storage.get(REDIRECT);
            storage.destroy(REDIRECT);
            return this.$router.push(redirect);
          }
          this.$router.push({ name: "dashboard" });
        }, 1000);
      }
    },
  },
};
</script>
