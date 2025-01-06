export const increment =()=>{
    return {
        type:"increment"
    }
}

export const decrement =()=>{
    return {
        type:"decrement"
    }
}

export const setBgColor =(color)=>{
    return {
        type:"setBgColor",
        payload:color
    }
}