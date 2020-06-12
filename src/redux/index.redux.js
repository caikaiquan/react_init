const CHANG_DIALOG_STATUS = 'CHANG_DIALOG_STATUS'
export function data (state = { dialogStatus: false }, action) {
  switch (action.type) {
    case CHANG_DIALOG_STATUS: // 添加成功的提示弹框
      return { ...state, dialogStatus: action.status }
    default:
      return { ...state }
  }
}

export function changeDialogStatus (status) {
  return { type: CHANG_DIALOG_STATUS , status:status}
}