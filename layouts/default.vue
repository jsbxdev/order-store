<template>
  <v-app dark color="#121212">
    <v-navigation-drawer v-model="drawer" fixed app> </v-navigation-drawer>
    <v-app-bar elevate-on-scroll app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
