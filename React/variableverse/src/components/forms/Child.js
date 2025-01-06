import { forwardRef } from "react";

const Child = forwardRef((props,ref)=>(
    <button ref={ref} onClick={props.onclick}>
        {props.children}
    </button>
))
export default Child