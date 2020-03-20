import {
  SET_LANGUAGE
} from './types'

const mutations = {
  [SET_LANGUAGE]: (state, { language }) => {
    state.language = language
  }
}

export default mutations
