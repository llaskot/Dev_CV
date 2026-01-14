import "./LeftSide.css"

export default function LeftBlock(props) {
    return (
        <div >

            <h2 className={"left-block"}>{props.block_name}</h2>
            <div>{props.block_items.map((block_item, i) => <BlockItem key={i} {...block_item} />)}</div>
        </div>
    )
}

function BlockItem(props) {
    return (
            <div>
                {props.sub_block_name && <div className={"block-item-name"}>{props.sub_block_name}</div>}
                <ul>
                    {props.items.map((item, i) => <Item key={i} item={item} val={props.values?.[i]}/>)}
                </ul>
            </div>
    )
}

function Item(props) {
    return (
        <li className={"li_item"}>
            <div className="l-list-item">{props.item}</div>
            {props.val && <div className="bar">
                <div className="bar-fill" style={{width: `${props.val}%`}}/>
            </div>}
        </li>
    )

}