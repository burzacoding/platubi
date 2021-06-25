import React, { SetStateAction } from "react";

export type modalNames = 'add'| 'delete' | 'modify' | 'wealthViewer' | 'trackedStocks'

export class Modals {
  static closeModal (setterCallback: React.Dispatch<SetStateAction<boolean>>) {
    setterCallback(false)
  }
}
