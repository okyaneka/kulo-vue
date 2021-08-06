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
          type="password"
          :rules="validation($t('Password'), 'required')"
          :label="$t('Password')"
          :disabled="loading"
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

export default {
  mixins: [validation],
  data: () => ({
    loading: null,
    formData: {},
  }),
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
  },
};
</script>
