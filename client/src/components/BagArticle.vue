<template>
  <div class="row">
   <div class="column-2"><q-btn size="xs" flat icon="close" @click="onRemoveFromList(article.id)" /></div>
   <div class="column q-pa-md">
      <q-img v-if="!isActive" :src="'./statics/res/' + article.image + '.png'" style="width:80vw;max-width:80px;" />
   </div>
   <div class="column q-pa-md">
      <div class="text-h7 cursor-pointer" @click="$router.push('/details')" >{{ article.name }}</div>
      <div class="row q-pt-md">
        <div class="column">
          <div class="row">
            <q-btn size="xs" style="margin-left: 5px;width: 30px;height: 30px;" outline color="grey" icon="add" @click="qt++"/>
            <div style="width: 30px;height: 30px;border: solid 1px grey;text-align: center;padding-top:4px;">{{ qt }}</div>
            <q-btn size="xs" style="width: 30px;height: 30px;" outline color="grey" icon="remove" @click="sub"/>
          </div>
        </div>
        <div class="on-right q-pt-xs">
          {{ (Number(article.price) * qt).toFixed(2) }} lv.
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BagArticle',
  computed: {
    ...mapGetters([
      'constants'
    ])
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      qt: this.article.quantity
    }
  },
  methods: {
    onRemoveFromList (id) {
      this.$emit('remove', id)
    },
    sub () {
      if (this.qt > 1) {
        this.qt--
      }
    }
  }
}
</script>
