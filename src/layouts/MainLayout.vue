<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="elegance">
          <div style="cursor: pointer;" @click="$router.push('/')">Radimm</div>
        </q-toolbar-title>
        <q-btn flat :label="language.toUpperCase()" @click="changeLanguage"><img class="q-pa-xs" :src="'statics/flags/' + language + '.png'" style="width:30vw;max-width:30px;margin-right: 10px;"></q-btn>
        <q-tabs style="margin-right: 30%;" no-caps active-color="primary" indicator-color="transparent" class="text-grey">
          <q-route-tab to="/">{{ constants.home }}</q-route-tab>
          <q-route-tab to="/us">{{ constants.forUs }}</q-route-tab>
          <q-route-tab to="/contacts">{{ constants.contacts }}</q-route-tab>
          <q-btn v-if="!leftDrawerOpen" flat no-caps label="Категория Продукти">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-btn  no-caps flat @click="isRing=!isRing">{{ constants.rings }}</q-btn>
                <div v-if="isRing">
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.rings }} {{ constants.withStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.rings }} {{ constants.withoutStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                </div>
                <br />
                <q-btn  no-caps flat @click="isBracelets=!isBracelets">{{ constants.bracelets }}</q-btn>
                <div v-if="isBracelets">
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.bracelets }} {{ constants.withStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.bracelets }} {{ constants.withoutStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                </div>
                <br />
                <q-btn  no-caps flat @click="isЕarrings=!isЕarrings">{{ constants.еarrings }}</q-btn>
                <div v-if="isЕarrings">
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.еarrings }} {{ constants.withStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.еarrings }} {{ constants.withoutStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                </div>
                <br />
                <q-btn  no-caps flat @click="isMedallions=!isMedallions">{{ constants.medallions }}</q-btn>
                <div v-if="isMedallions">
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.medallions }} {{ constants.withStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                  <q-item to="/" exact>
                    <q-item-section>
                      {{ constants.medallions }} {{ constants.withoutStones }}
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                  </q-item>
                </div>
              </q-list>
            </q-menu>
          </q-btn>
        </q-tabs>

        <div>
          <img v-if="!isActive" class="q-pa-xs" src="~assets/user.png" style="width:30vw;max-width:30px;margin-right: 10px;">
          <img v-if="!isActive" class="q-pa-xs" src="~assets/heart.png" style="width:30vw;max-width:30px;margin-right: 10px;">
          <img v-if="!isActive" class="q-pa-xs" src="~assets/bag.png" style="width:30vw;max-width:30px;margin-right: 10px;">
          <q-input v-if="isActive" style="height: 20px;" v-model="text">
            <template v-slot:append>
              <img class="q-pa-xs" src="~assets/search.png" @click="isActive = false" style="width:30vw;max-width:30px;">
            </template>
          </q-input>
          <img v-if="!isActive" class="q-pa-xs" src="~assets/search.png" @click="isActive = true" style="width:30vw;max-width:30px;">
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="500"
    >
      <q-list>
        <br /><br />
        <q-item-label
          header
          class="text-grey-5"
        >
          {{ constants.category }}
        </q-item-label>
          <q-btn  no-caps flat @click="isRing=!isRing">{{ constants.rings }}</q-btn>
          <div v-if="isRing">
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.rings }} {{ constants.withStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.rings }} {{ constants.withoutStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
          </div>
          <br />
          <q-btn  no-caps flat @click="isBracelets=!isBracelets">{{ constants.bracelets }}</q-btn>
          <div v-if="isBracelets">
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.bracelets }} {{ constants.withStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.bracelets }} {{ constants.withoutStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
          </div>
          <br />
          <q-btn  no-caps flat @click="isЕarrings=!isЕarrings">{{ constants.еarrings }}</q-btn>
          <div v-if="isЕarrings">
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.еarrings }} {{ constants.withStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.еarrings }} {{ constants.withoutStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
          </div>
          <br />
          <q-btn  no-caps flat @click="isMedallions=!isMedallions">{{ constants.medallions }}</q-btn>
          <div v-if="isMedallions">
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.medallions }} {{ constants.withStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-item to="/" exact>
              <q-item-section>
                {{ constants.medallions }} {{ constants.withoutStones }}
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
          </div>
        <br />
        <q-separator />
        <q-item-label
          header
          class="text-grey-5"
        >
        {{ constants.contactUs }}
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-footer reveal bordered class="bg-white text-primary">
      <q-toolbar>
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey">
          <q-route-tab to="/">{{ constants.generalTerms }}</q-route-tab>
          <q-route-tab to="/privacy">{{ constants.privacy }}</q-route-tab>
          <q-route-tab to="/privacy">{{ constants.contacts }}</q-route-tab>
        </q-tabs>
      </q-toolbar>
      <small>Radimm, Inc. © 2020 All Rights Reserved.</small>
      <a href="skype:radiimariana?chat" class="q-pr-xs"><img src="statics/skype1.png" width="2%;" /></a>
      <a href="https://www.facebook.com/radiminchevm/" class="q-pr-xs"><img src="statics/fb.png" width="2%;" /></a>
      <a href="mailto:radimarinov@gmail.com" ><img src="statics/email.png" width="2%;" /></a>
    </q-footer>
    <q-page-container class="q-pa-xl">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import { SET_LANGUAGE } from './../store/app/types'

import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  computed: {
    ...mapGetters([
      'constants',
      'language'
    ])
  },
  data () {
    return {
      isRing: false,
      isЕarrings: false,
      isBracelets: false,
      isMedallions: false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Facebook',
          caption: '@radiminchevm',
          icon: 'img:statics/fb1.png',
          link: 'https://www.facebook.com/radiminchevm/'
        },
        {
          title: 'Skype',
          caption: '@radiimariana',
          icon: 'img:statics/skype.png',
          link: 'skype:radiimariana?chat'
        },
        {
          title: 'Mail',
          caption: '@radimarinov',
          icon: 'mail',
          link: 'mailto:radimarinov@gmail.com'
        }
      ],
      text: '',
      isActive: false
    }
  },
  methods: {
    changeLanguage () {
      const language = this.language === 'bg' ? 'en' : 'bg'
      this.$store.commit(SET_LANGUAGE, { language })
    }
  }
}
</script>
