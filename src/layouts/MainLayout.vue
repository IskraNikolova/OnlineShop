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
          <q-btn v-if="!leftDrawerOpen" flat no-caps :label="constants.category">
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

        <q-img v-if="!isActive" src="~assets/user.png" id="mImg" />
        <q-img v-if="!isActive" src="~assets/heart.png" id="mImg" />
        <q-img v-if="!isActive" src="~assets/bag.png" id="mImg" >
          <q-menu square self="top left" :content-style="{ width: '42%' }">
            <div class="no-wrap q-pa-md">
              <div class="text-h7 q-mb-md">{{ constants.goToShoppingBag }}[2]</div>
              <div v-for="article in mockData" v-bind:key="article.id">
                <BagArticle v-bind:article="article" @remove="onRemove"/>
              </div>
              <div style="text-align: right;" class="q-pr-xl">Total cost: 56.00</div>
              <br />
              <div class="q-pa-xs">
                <q-btn :label="constants.continueShopping" v-close-popup />
                <q-btn class="q-ml-md" color="black" :label="constants.toShoppingBag" @click="$router.push('/bag')"/>
              </div>
            </div>
          </q-menu>
        </q-img>
        <span v-if="!isActive" style="margin-top: 7px;margin-left: -18px;font-size:8px;">{{ mockData.length }}</span>
        <q-input v-if="isActive" style="height: 20px;" v-model="text">
          <template v-slot:append>
            <img class="q-pa-xs" src="~assets/search.png" @click="isActive = false" style="width:30vw;max-width:30px;">
          </template>
        </q-input>
        <img v-if="!isActive" class="q-pa-xs" src="~assets/search.png" @click="isActive = true" style="width:30vw;max-width:30px;margin-left:5px;">
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
import BagArticle from 'components/BagArticle'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    BagArticle
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
      // todo change with data
      mockData: [
        {
          id: 1,
          name: 'Пръстен с аметист',
          quantity: 1,
          price: 56.00,
          image: 88
        },
        {
          id: 2,
          name: 'Обеци с корал',
          quantity: 3,
          price: 26.00,
          image: 168
        }
      ],
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
    },
    onRemove (id) {
      // todo
      this.mockData = this.mockData.filter(i => i.id !== id)
      // stop close of menu after removing data
    }
  }
}
</script>

<style scoped>
  #mImg {
    width:20vw;
    max-width:20px;
    margin:5px;
  }
</style>
