import randColor from "../Functions/randColor"
function Animal({ name, img }) {
    return (<div >
        <div style={{background:randColor(),width:'70%'}}>{name}</div>
         <img style={{width:'70%'}} src={img} alt="a" />
         </div>)
}
export default Animal