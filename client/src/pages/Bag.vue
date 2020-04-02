<template>
  <q-page class="q-pa-xl">
   <div class="text-h5">{{ constants.toShoppingBag }}</div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageBag',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'constants'
    ])
  },
  methods: {
  }
}
</script>
