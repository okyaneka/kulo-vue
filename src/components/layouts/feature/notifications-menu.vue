<template>
  <v-menu v-model="menu" offset-y min-width="256" max-width="256">
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip v-bind="attrs" v-on="menu" bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn v-on="{ ...menu, ...tooltip }" v-bind="attrs" icon @click="handleRead">
            <v-badge dot overlap :value="!isRead">
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        {{ $t(isRead ? "Notifications" : "You have notifications") }}
      </v-tooltip>
    </template>
    <v-list
      max-height="calc(100vh - 56px * 2 )"
      class="overflow-y-auto py-0"
      @scroll.native="handleScroll"
    >
      <v-list-item v-if="loading">
        <v-list-item-content>
          <v-list-item-title class="text-center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else-if="empty">
        <v-list-item-content>
          <v-list-item-title class="text-wrap text-center">{{ $t("Empty") }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else v-for="(item, index) in data" two-line link :key="index" :to="item.path">
        <v-list-item-content>
          <v-list-item-title class="text-wrap">{{ item.text }}</v-list-item-title>
          <v-list-item-subtitle>
            <small> {{ item.created_at | humanize }}</small>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="moreLoading">
        <v-list-item-content>
          <v-list-item-title class="text-center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list class="py-0">
      <v-list-item to="/notifications">
        <v-list-item-content>
          <v-list-item-title class="text-center">
            {{ $t("Show all notifications") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState } from "vuex";
const dummy = {
  path: "#",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet.",
  created_at: new Date().toISOString(),
};

export default {
  filters: {
    humanize(date) {
      return new Date(date).toLocaleDateString();
    },
  },
  data: () => ({
    menu: null,
    loading: null,
    moreLoading: null,
    isRead: false,
  }),
  computed: {
    ...mapState("notification", { data: (state) => state.notifications }),
    empty() {
      return !this.data?.length;
    },
  },
  watch: {
    menu: async function(val) {
      if (val) {
        this.loading = true;
        setTimeout(async () => {
          // await this.$store.commit("notification/PUSH_NOTIF", [dummy]);
          this.loading = false;
        }, 1000);
      }
    },
  },
  created() {
    this.$store.commit("notification/SET_NOTIF", [dummy, dummy, dummy, dummy, dummy, dummy, dummy]);
    setInterval(async () => {
      this.isRead = false;
    }, 30000);
  },
  methods: {
    handleRead() {
      this.isRead = true;
    },
    async handleScroll($event) {
      const el = $event.target;
      // End of scroll
      if (el.scrollTop + el.clientHeight == el.scrollHeight) {
        // Do here
        this.moreLoading = true;
        setTimeout(() => {
          this.moreLoading = false;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.v-list-item--link::before {
  opacity: 0 !important;
}
</style>
