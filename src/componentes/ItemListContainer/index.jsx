import "./index.css"
import ItemCount from "../ItemCount"

function ListContainer (props) {
    return(
        <div className="content">

        <h1 className="h1">{props.title}</h1>
        <h2 className="h2">{props.subTitle}</h2>
        {/* <ItemCount otrotitulo={otrotitulo} ValorInicial={0} stock={9}/> */}
        </div>
    )
}
export default ListContainer
