<template>
  <v-row class="fill-height" justify="center" align="center">
    <v-col cols="12" lg="3" md="4" sm="5">
      <v-fade-transition hide-on-leave>
        <router-view />
      </v-fade-transition>
    </v-col>
  </v-row>
</template>
