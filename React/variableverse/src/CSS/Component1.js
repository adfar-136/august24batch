import React from 'react'
import style from "./Component1.module.css"
export default function Component1() {
  return (
    <div className={style["main-heading"]}>
        <h1 className={style.heading1}>I am component 1</h1>
        <p className={style.para1}>I am a paragraph 1</p>
    </div>
  )
}
