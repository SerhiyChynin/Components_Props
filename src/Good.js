
function Goods(props) {
    return (
        <div className="Goods-block">
            <h3>{props.title}</h3>
            <p>{props.cost} </p>
            <img src={props.image} alt="" />
        </div>
    )
}

export default Goods;