/** @format */

export const isState = (flag) => {
    return {
      type: "IS_STATE",
      payload: flag
    }
  }