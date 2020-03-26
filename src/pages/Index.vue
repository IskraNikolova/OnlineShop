<template>
  <q-page class="q-pa-xl">
    <div class="absolute-right q-pr-xl">
      <q-btn flat icon="view_module" @click="col=4"/>
      <q-btn flat @click="col=3" icon="view_comfy" />
      <q-btn flat @click="col=2" icon="img:statics/view_items.png" />
    </div>
    <div class="row">
      <div :class="'col-' + col + ' q-pr-md'" v-for="i in images" v-bind:key="i">
        <CustomItemCard
          v-bind:image="i"
          v-bind:size="col"
          @add="onAddToBag(i)"
          @details="onDetails(i)"
        />
        <br />
      </div>
      <AddToBagDialog ref="addToBagDialog" />
    </div>
  </q-page>
</template>

<script>
import CustomItemCard from './../components/CustomItemCard'

import AddToBagDialog from './../components/AddToBagDialog'

export default {
  name: 'PageIndex',
  components: {
    CustomItemCard,
    AddToBagDialog
  },
  data () {
    return {
      col: 2,
      // todo mock data delete
      images: [6, 17, 21, 23, 33, 42, 46, 55, 62, 76, 81, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 102, 104, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
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
