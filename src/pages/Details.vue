<template>
  <q-page class="q-pa-xl">
   <div class="row">
    <div class="col-8">
      <GalleryItems v-bind:images="images"/>
    </div>
    <div class="col-4">
      <AddToBag v-bind:item="item"/>
    </div>
   </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

import GalleryItems from './../components/GalleryItems'
import AddToBag from './../components/AddToBag'

export default {
  name: 'PageDetails',
  components: {
    GalleryItems,
    AddToBag
  },
  data () {
    return {
      // todo mock data delete
      images: [111, 112, 6, 127],
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
      'constants'
    ])
  },
  methods: {
  }
}
</script>
