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
          <div class="row" v-if="item.type==='ring'" style="margin-left: -15px;">
            <div v-for="size in item.size" v-bind:key="size" class="col" >
              <q-btn flat :label="size" size="md" @click="onSelectSize" />
            </div>
            <q-btn flat size="md" no-caps :label="constants.custom" @click="isSlideView=true"/>
            <q-dialog
              v-model="isSlideView"
            >
            <q-card style="width: 350px;">
              <q-card-section>
                <div class="col-8" style="text-align:right;">
                  <q-btn flat no-caps label="cm" @click="isCm=true"/>|<q-btn flat no-caps label="inches" @click="isCm=false"/>
                </div>
              </q-card-section>
              <q-card-section>
                <q-item>
                  <q-item-section avatar>
                    {{ constants.s }}
                  </q-item-section>
                  <q-item-section>
                    <q-slider
                      v-if="isCm"
                      v-model="customSize"
                      :min="minCm"
                      :max="maxCm"
                      :step="0.1"
                      snap
                      label
                      label-always
                      :label-value="customSize + ' cm'"
                      color="teal"
                    />
                    <q-slider
                      v-else
                      v-model="customSize"
                      :min="minIn"
                      :max="maxIn"
                      :step="0.05"
                      snap
                      label
                      label-always
                      :label-value="customSize + ' in'"
                      color="teal"
                    />
                  </q-item-section>
                </q-item>
              </q-card-section>
              <q-card-actions>
              </q-card-actions>
            </q-card>
            </q-dialog>
          </div>
          <div v-else>{{ constants.size }}</div>
        </q-card-section>
        <!--todo make clickable and add underline style-->
        <q-card-section v-if="item.type==='ring'" class=" text-grey">
          <q-btn flat no-caps size="xs" @click="openSizeTable">{{ constants.sizeChart }}</q-btn>
        </q-card-section>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section>
          <div style="margin-top: 2px;">
            <q-img src="./../statics/res/111.png" style="width:30vw;max-width:30px;"/>
          </div>
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
      <br />
      <q-card-actions class="q-pl-md">
        <q-btn outline icon="favorite_border" @click="onAddToFavority" />
        <q-btn :label="constants.addToBag" color="black" style="width: 220px;margin-left:7px;" @click="onAddToBag" />
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
    <SizeTableDialog ref="sizeTableDialog" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SizeTableDialog from './SizeTableDialog'

export default {
  name: 'AddToBag',
  components: {
    SizeTableDialog
  },
  computed: {
    ...mapGetters([
      'constants'
    ])
  },
  data () {
    return {
      isSlideView: false,
      qt: 1,
      isUp: false,
      url: 'http://localhost:8080/#/details',
      customSize: 1.9,
      isCm: true,
      minCm: 1.9,
      maxCm: 3.0,
      minIn: 0.6,
      maxIn: 1.2
    }
  },
  methods: {
    openSizeTable () {
      this.$refs.sizeTableDialog.open()
    },
    onSelectSize () {
      alert('hi')
    },
    sub () {
      if (this.qt > 1) {
        this.qt--
      }
    },
    onAddToFavority () {
      // todo
    },
    onAddToBag () {
      // todo
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
