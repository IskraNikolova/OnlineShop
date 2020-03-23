<template>
  <div>
    <q-card flat>
      <q-card-section>
        <div class="text-h4">{{ item.name }}</div>
        <div class=" text-grey">Code# {{ item.id }}</div>
        <div class="text-h6">{{ item.price }} lv.</div>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section>
          <div>{{ constants.selectSize }}</div>
          <div class="row">
            <div v-for="size in item.size" v-bind:key="size" class="col">
              <q-btn flat :label="size" size="md" @click="onSelectSize" />
            </div>
          </div>
        </q-card-section>
        <!--todo make clickable and add underline style-->
        <q-card-section v-if="item.type==='ring'" class=" text-grey">
          <span @click="openSizeTable">{{ constants.sizeChart }}</span>
        </q-card-section>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section>
          <div style="margin-top: 2px;"><q-img src="./../statics/res/111.png" style="width:30vw;max-width:30px;"/></div>
        </q-card-section>
        <q-card-actions align="right" style="margin-left: 20%;">
          <div class="row">
            <div style="margin-top: 5%;">{{ constants.qt }}</div>
            <q-btn size="xs" style="margin-left: 5px;width: 30px;height: 30px;" outline color="grey" icon="add" @click="qt++"/>
            <div style="width: 30px;height: 30px;border: solid 1px grey;text-align: center;padding-top:4px;">{{ qt }}</div>
            <q-btn size="xs" style="width: 30px;height: 30px;" outline color="grey" icon="remove" @click="sub"/>
          </div>
        </q-card-actions>
      </q-card-section>

      <q-card-actions>
        <q-btn outline icon="favorite_border"/>
        <q-btn :label="constants.addToBag" color="black" style="width: 200px;" />
      </q-card-actions>
    </q-card>
    <div style="text-align: center;margin-top: 5px;">
      <!--todo add mesenger-->
      <a :href='"http://www.facebook.com/sharer.php?u=" +  encodeURIComponent(url)' target="_blank">
        <img style="width:21px;margin-left:5px;margin-bottom:-3px;" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
      </a>
      <a class="tweet-button" :href='"https://twitter.com/intent/tweet?text=Radimm%20" + encodeURIComponent(item.name) + "%20 " + encodeURIComponent(url)'>
        <img style="width:21px;margin-left:5px;margin-bottom:-3px;" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
      </a>
        <!-- Google+ todo
        <a :href='"https://plus.google.com/share?url=" + encodeURIComponent(url)' target="_blank">
        <img style="width:21px;margin-left:5px;margin-bottom:-3px;" src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
        </a>-->
        <!-- LinkedIn -->
      <a :href='"http://www.linkedin.com/shareArticle?mini=true&amp;url=" + encodeURIComponent(url)' target="_blank">
        <img style="width:21px;margin-left:5px;margin-bottom:-3px;" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
    <q-separator class="q-mt-md q-mb-md"/>
    <div class="row">
      <div class="col-5">
        {{ constants.description.toUpperCase() }}
      </div>
      <div class="col-7" style="text-align: right;">
        <q-icon v-if="!isUp" name="keyboard_arrow_down" @click="isUp=!isUp"/>
        <q-icon v-if="isUp" name="keyboard_arrow_up" @click="isUp=!isUp"/>
      </div>
    </div>
    <div v-if="!isUp" class="q-mt-xl">
      {{ item.description }}
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AddToBag',
  computed: {
    ...mapGetters([
      'constants'
    ])
  },
  data () {
    return {
      qt: 1,
      isUp: false,
      url: 'http://localhost:8080/#/details'
    }
  },
  methods: {
    openSizeTable () {
      // todo open size table
      alert('hi')
    },
    onSelectSize () {
      alert('hi')
    },
    sub () {
      if (this.qt > 1) {
        this.qt--
      }
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
