import "./RightSide.css"

export default function RightBlock(props) {
    return (
        <div className={"right-block"}>
            {props.name && <h2 className="name br">{props.name}</h2>}
            {props.date && <div className="date">{props.date}</div>}
            {props.short && <div className={"br short"}>{props.short}</div>}
            {props.full && <div className={"full br"}>{props.full}</div>}
            {props.list && props.list.map((item, i) => <Item key={i} item={item} />)}
        </div>
    )
}


function Item(props) {
    return (
        <li className="list-item">
            {props.item}
        </li>
    )

}