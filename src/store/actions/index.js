/** @format */

export const isState = (flag) => {
    return {
      type: "IS_STATE",
      payload: flag
    }
  }

export const IsToast = (data) => {
  return {
    type: "IS_TOAST",
    payload: data
  }
}