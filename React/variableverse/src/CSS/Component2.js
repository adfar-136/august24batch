import React from 'react'
import style from "./Component2.module.css"
import myStyle from "./Component1.module.css"
export default function Component2() {
    console.log(style)
  return (
    <div id={style["main"]}>
         <h1 className={style.heading1}>I am component 2</h1>
         <p className={style.para1}>I am a paragraph 2</p>
         <h1 className={myStyle.heading2}>shhgsd</h1>
    </div>
  )
}
