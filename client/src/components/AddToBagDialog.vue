<template>
  <q-dialog
    v-model="ui.addToBagDialog.isOpen"
    full-width
    square
  >
  <q-card>
    <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
    <q-card-section class="q-pt-none">
     <div class="row">
      <div class="col">
        <q-img src="./../statics/res/483.png" style="width:430vw;max-width:430px;margin-left:22px;" />
      </div>
      <div class="col">
        <AddToBag v-bind:item="item" v-bind:isViewDescription="false" @details="onDetails(item)"/>
      </div>
     </div>
    </q-card-section>
  </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AddToBag from './AddToBag'

import { OPEN_ADD_TO_BAG_DIALOG, CLOSE_ADD_TO_BAG_DIALOG } from '../store/ui/types'

export default {
  name: 'AddToBagDialog',
  components: {
    AddToBag
  },
  data () {
    return {
      // todo delete
      item: {
        id: 1,
        type: 'ring',
        name: 'Пръстен с лазур',
        price: 56.00,
        size: [50, 52, 54, 56],
        image: './../statics/res/6.png',
        description: `Изключително модерна и ефектна визия.
          Уникална ръчна изработка,
          Дамски пръстен,с инкрустиран 1 камък лазорит
          Размер на горната част на пръстена26мм на 22 мм
          Размер на камака22мм на 11мм
          Мистичните сили, които древните народи вярвали че притежава лазуритът са, че носи спокойствие и увеличава умствената дейност. Тъй като някои лазурити имат тъмен цвят, ги наричали „океан“. Когато погледнел такъв лазурит, наблюдателят моментално бивал заливан от спокойствие и поглъщан, сякаш от океан.
          Вие ще получите точно това, което виждате на снимките.
          Размер на халката 21мм
          Изработен от масивно сребро
          Размер на горната част на пръстена 28 мм на 16мм
          Размери на камъка: 22мм на 13мм`
      }
    }
  },
  computed: {
    ...mapGetters([
      'ui',
      'constants'
    ])
  },
  methods: {
    ...mapActions({
      open: OPEN_ADD_TO_BAG_DIALOG,
      close: CLOSE_ADD_TO_BAG_DIALOG
    }),
    onDetails (item) {
      // todo
      this.close()
      this.$router.push('/details')
    }
  }
}
</script>

<style>

</style>
