const colorReducer = (state={backgroundColor:"red"},action)=>{
 switch(action.type){
    case "setBgColor":
        return {backgroundColor:action.payload};
    default:
        return state
 }
}
export default colorReducer