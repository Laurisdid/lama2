import randColor from "../../Functions/randColor"
function Pokemon({ name, url }) {
    return (<div style={{background:randColor()}} >
        <div >{name}</div>
         {/* <div style={{width:'70%'}} src={url} ></div> */}
         <input style={{width:'100%'}} value={url} readOnly></input>
         </div>)
}
export default Pokemon