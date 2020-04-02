<template>
  <div class="row">
    <q-item
        clickable
        v-for="i in images"
        v-bind:key="i"
        class="col-2 col-sm-6"
    >
      <q-img :src="'./../statics/res/' + i + '.png'"   />
    </q-item>
    <div class="text-h7" style="margin-top: 12px;margin-bottom: 12px;">{{ constants.alsoLove }}</div>
    <div class="row">
      <div class="col-3 q-pr-md" v-for="i in images" v-bind:key="i">
        <CustomItemCard
          v-bind:image="i"
          v-bind:size="2"
          @add="onAddToBag(i)"
          @details="onDetails(i)"
        />
        <br />
      </div>
    </div>
    <AddToBagDialog ref="addToBagDialog" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CustomItemCard from './../components/CustomItemCard'
import AddToBagDialog from './../components/AddToBagDialog'

export default {
  name: 'GalleryItems',
  components: {
    CustomItemCard,
    AddToBagDialog
  },
  computed: {
    ...mapGetters([
      'constants'
    ])
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    onAddToBag (item) {
      // todo
      this.$refs.addToBagDialog.open()
    },
    onDetails (item) {
      // todo add to store current item
      this.$router.push('/details')
    }
  }
}
</script>
