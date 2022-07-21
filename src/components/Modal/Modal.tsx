import React, { FC, PropsWithChildren } from "react"
import styles from "./Modal.module.scss"

export const Modal: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.modal}>{children}</div>
}
