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

        <div>
          <img class="q-pa-xs" src="~assets/user.png" style="width:30vw;max-width:30px;">
          <img class="q-pa-xs" src="~assets/heart.png" style="width:30vw;max-width:30px;">
          <img class="q-pa-xs" src="~assets/bag.png" style="width:30vw;max-width:30px;">
          <img class="q-pa-xs" src="~assets/search.png" style="width:30vw;max-width:30px;">
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
        <!--<q-item-label
          header
          class="text-grey-8"
        >
          Меню
        </q-item-label>
        <EssentialLink
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
        />
        <q-separator />-->
        <br /><br />
        <q-item-label
          header
          class="text-grey-5"
        >
          Категории Продукти
        </q-item-label>
        <EssentialLink
          v-for="link in category"
          :key="link.title"
          v-bind="link"
        />
        <br />
        <q-separator />
        <q-item-label
          header
          class="text-grey-5"
        >
        Свържи се с нас
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-footer bordered class="bg-white text-primary">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey">
        <q-route-tab to="/">Общи условия</q-route-tab>
        <q-route-tab to="/privacy">Поверителност</q-route-tab>
        <q-route-tab to="/privacy">Контакти</q-route-tab>
      </q-tabs>
    </q-footer>
    <q-page-container class="q-pa-xl">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Facebook',
          caption: '@radiminchevm',
          icon: 'public',
          link: 'https://www.facebook.com/radiminchevm/'
        },
        {
          title: 'Scype',
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
      category: [
        {
          title: 'Пръстени',
          link: 'https://www.facebook.com/radiminchevm/'
        },
        {
          title: 'Гривни',
          link: 'https://www.facebook.com/radiminchevm/'
        },
        {
          title: 'Обеци',
          link: 'https://www.facebook.com/radiminchevm/'
        },
        {
          title: 'Медальони',
          link: 'https://www.facebook.com/radiminchevm/'
        }
      ],
      menu: [
        {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Scype',
          caption: '@radiimariana',
          icon: 'message',
          link: 'skype:radiimariana?chat'
        },
        {
          title: 'Mail',
          caption: '@radimarinov',
          icon: 'mail',
          link: 'mailto:radimarinov@gmail.com'
        }
      ]
    }
  }
}
</script>
