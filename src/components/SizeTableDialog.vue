<template>
  <q-dialog
    v-model="ui.sizeTableDialog.isOpen"
    full-width
  >
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ constants.sizeChart }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="6">
            <div class="row no-wrap items-center">
              <q-img
                style="width: 70px"
                :ratio="1"
                class="rounded-borders"
                src="data:image/jpeg;base64,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"
              />

              <div class="text-h4 q-ml-md text-white">{{ constants.rings }}</div>
              <div class="text-white col-8" style="text-align:right;">
                <q-btn flat no-caps label="cm" @click="isCm=true"/>|<q-btn flat no-caps label="inches" @click="isCm=false"/>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">
        <tr>
          <td class="text-left">EU</td>
          <td class="text-right">50</td>
          <td class="text-right">52</td>
          <td class="text-right">54</td>
          <td class="text-right">56</td>
          <td class="text-right">58</td>
        </tr>
        <tr>
          <td class="text-left">US</td>
          <td class="text-right">5.5</td>
          <td class="text-right">6</td>
          <td class="text-right">7</td>
          <td class="text-right">7.5</td>
          <td class="text-right">8.5</td>
        </tr>
        <tr>
          <td class="text-left">IT</td>
          <td class="text-right">10</td>
          <td class="text-right">12</td>
          <td class="text-right">14</td>
          <td class="text-right">17</td>
          <td class="text-right">19.5</td>
        </tr>
        <tr v-if="isCm">
          <td class="text-left">SIZES(CM)</td>
          <td class="text-right">1.6</td>
          <td class="text-right">1.65</td>
          <td class="text-right">1.7</td>
          <td class="text-right">1.8</td>
          <td class="text-right">1.9</td>
        </tr>
        <tr v-else>
          <td class="text-left">SIZES(IN)</td>
          <td class="text-right">0.65</td>
          <td class="text-right">0.67</td>
          <td class="text-right">0.69</td>
          <td class="text-right">0.73</td>
          <td class="text-right">0.77</td>
        </tr>
      </tbody>
    </q-markup-table>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { OPEN_SIZE_TABLE_DIALOG, CLOSE_SIZE_TABLE_DIALOG } from '../store/ui/types'

export default {
  name: 'SizeTableDialog',
  data () {
    return {
      isCm: true
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
      open: OPEN_SIZE_TABLE_DIALOG,
      close: CLOSE_SIZE_TABLE_DIALOG
    })
  }
}
</script>

<style>
</style>
