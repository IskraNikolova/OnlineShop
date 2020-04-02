<template>
  <div>
    <q-card flat :id="image">
      <q-img :src="'./../statics/res/' + image + '.png'" native-context-menu @mouseover="hover(image)" :id="image" @mouseleave="leave(image)">
      <q-icon :class="'absolute all-pointer-events' + ' ' + image" size="22px" name="favorite_border" color="white" style="top: 8px; left: 8px;display:none;">
        <q-tooltip :content-style="{ color: '#000000', background: '#ffffff' }">
          {{ constants.favorite }}
        </q-tooltip>
      </q-icon>
      <q-btn flat @click.native="onAddClick" :class="'absolute all-pointer-events' + ' ' + image" icon="img:statics/white-bag.png" style="width: 22px;right: 8px;display:none;">
        <q-tooltip :content-style="{ color: '#000000', background: '#ffffff' }">
          {{ constants.addToBag }}
        </q-tooltip>
      </q-btn>
      <div :class="'absolute-bottom text-subtitle1 text-center' + ' ' + image" style="display:none;cursor: pointer;" @click="onDetailsClick">
        <div :style="'font-size:' +  (size * 30) + '%;'">Име на продукта</div>
        <q-tooltip :content-style="{ color: '#000000', background: '#ffffff' }" anchor="top middle" self="bottom middle">
          {{ constants.seeMore }}
        </q-tooltip>
      </div>
      </q-img>
      <q-card-section>
      <div class="text-center"> 56.00 lv.</div>
      <!--<q-rating size="xs" v-model="stars" :max="5" />-->
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CustomItemCard',
  computed: {
    ...mapGetters([
      'constants'
    ])
  },
  data () {
    return {
      // todo mock data delete
      stars: 4
    }
  },
  props: {
    image: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  methods: {
    onDetailsClick () {
      this.$emit('details')
    },
    onAddClick () {
      this.$emit('add')
    },
    hover (className) {
      const arr = document.getElementsByClassName(className)
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'block'
      }
      document.getElementById(className).style.opacity = 0.75
      document.getElementById(className).style.color = 'grey'
    },
    leave (className) {
      const arr = document.getElementsByClassName(className)
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'none'
      }
      document.getElementById(className).style.opacity = 1
      document.getElementById(className).style.color = 'black'
    }
  }
}
</script>
