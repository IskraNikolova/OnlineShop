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
      <div :class="'col-' + col + ' q-pr-md'" v-for="i in images" v-bind:key="i">
        <CustomItemCard
          v-bind:image="images[i]"
          v-bind:index="i"
          @add="onDetails(images[i])"
          @details="onDetails(images[i])"
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomItemCard from './../components/CustomItemCard'

export default {
  name: 'GalleryItems',
  components: {
    CustomItemCard
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
    },
    onDetails (item) {
      // todo add to store current item
      this.$router.push('/details')
    }
  }
}
</script>
