import {
  UPDATE_UI,
  OPEN_SIZE_TABLE_DIALOG,
  CLOSE_SIZE_TABLE_DIALOG,
  OPEN_ADD_TO_BAG_DIALOG,
  CLOSE_ADD_TO_BAG_DIALOG
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

const openAddToBagDialog = ({ commit }) => {
  commit(UPDATE_UI, { addToBagDialog: { isOpen: true } })
}

const closeAddToBagDialog = ({ commit }) => {
  commit(UPDATE_UI, { addToBagDialog: { isOpen: false } })
}

export default {
  [UPDATE_UI]: updateUi,
  [OPEN_SIZE_TABLE_DIALOG]: openSizeTable,
  [CLOSE_SIZE_TABLE_DIALOG]: closeSizeTable,
  [OPEN_ADD_TO_BAG_DIALOG]: openAddToBagDialog,
  [CLOSE_ADD_TO_BAG_DIALOG]: closeAddToBagDialog
}
