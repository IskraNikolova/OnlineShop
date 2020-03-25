import {
  UPDATE_UI,
  OPEN_SIZE_TABLE_DIALOG,
  CLOSE_SIZE_TABLE_DIALOG
} from './types'

const updateUi = ({ commit }, data) => {
  commit(UPDATE_UI, data)
}

const openSizeTable = ({ commit }) => {
  commit(UPDATE_UI, { sizeTableDialog: { isOpen: true } })
}

const closeSizeTable = ({ commit }) => {
  commit(UPDATE_UI, { sizeTableDialog: { isOpen: false } })
}

export default {
  [UPDATE_UI]: updateUi,
  [OPEN_SIZE_TABLE_DIALOG]: openSizeTable,
  [CLOSE_SIZE_TABLE_DIALOG]: closeSizeTable
}
