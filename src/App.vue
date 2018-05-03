<template>
  <v-app id="app">
    <v-navigation-drawer
            fixed
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
                  row
                  v-if="item.heading"
                  align-center
                  :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
                  v-else-if="item.children"
                  v-model="item.model"
                  :key="item.text"
                  :prepend-icon="item.model ? item.icon : item['icon-alt']"
                  append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
                    v-for="(child, i) in item.children"
                    :key="i"
                    @click="route"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="route(item.route)" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            color="blue darken-3"
            dark
            app
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Social Media Planner</span>
      </v-toolbar-title>
      <v-text-field
              flat
              solo-inverted
              prepend-icon="search"
              label="Поиск"
              class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-btn
            fab
            bottom
            right
            color="pink"
            dark
            fixed
            @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
                class="grey lighten-4 py-4 title"
        >
          Добавить пост
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Отмена</v-btn>
          <v-btn flat @click="dialog = false">Добавить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import kUtils from '@/libs/utils'
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);
Vue.use(Vuetify)

export default {
  name: 'App',
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'send', text: 'Посты', route: '/index' },
      { icon: 'group_add', text: 'Аккаунты', route: '/account' },
      { icon: 'settings', text: 'Настройки', route: '/settings' }
    ]
  }),
  created () {
    // kUtils.getData()
  },
  methods: {
    route (c) {
      this.$router.push(c)
    }
  }
}
</script>

<style lang="less">
  html, body {
    height: 100%;
    margin: 0;
  }
  #app {
  }
</style>
