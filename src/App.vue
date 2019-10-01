<template>
  <v-app>
    <v-navigation-drawer app :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer">
      <v-list shaped>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-toolbar-title class="headline text-uppercase">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <span>环境客人</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: null,
    items: [
      { text: '彩票', icon: 'mdi-emoticon-cool-outline', to: { path: '/lottery'}},
      { text: '简历', icon: 'mdi-account', to: { path: '/resume'}}
    ]
  }),
};
</script>
