<template>
  <q-page>
    <h5>{{ constants.privacy }}</h5>
    <div v-for="item in constants.privacyText" v-bind:key="item.title">
      <div class="text-h6">{{ item.title }}</div>
      <div>{{ item.content }}</div>
      <br/>
      <br/>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PagePrivacy',
  computed: {
    ...mapGetters([
      'constants'
    ])
  }
}
</script>
