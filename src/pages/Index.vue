<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div class="col-3" v-for="i in images" v-bind:key="i">
        <q-img :src="'./../statics/res/' + i + '.png'" native-context-menu @mouseover="hover(i)" @mouseleave="leave(i)">
          <q-icon :class="'absolute all-pointer-events' + ' ' + i" size="22px" name="favorite_border" color="white" style="top: 8px; left: 8px;display:none;">
            <q-tooltip>
              Любими
            </q-tooltip>
          </q-icon>
          <q-icon :class="'absolute all-pointer-events' + ' ' + i" size="22px" name="add_shopping_cart" color="white" style="top: 8px; right: 8px;display:none;">
            <q-tooltip>
              Поръчай
            </q-tooltip>
          </q-icon>
          <div :class="'absolute-bottom text-subtitle1 text-center' + ' ' + i" style="display:none;">
            Име на продукта
          </div>
        </q-img>
        <div style="text: center;"> 56.00 lv.</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      images: [6, 17, 21, 23, 33, 42, 46, 55, 62, 76, 81, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 102, 104, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
    }
  },
  methods: {
    hover (className) {
      const arr = document.getElementsByClassName(className)
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'block'
      }
    },
    leave (className) {
      const arr = document.getElementsByClassName(className)
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'none'
      }
    }
  }
}
</script>
