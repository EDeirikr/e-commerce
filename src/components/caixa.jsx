import { CircleMinusIcon, CirclePlusIcon, ShoppingCartIcon } from "lucide-react"

const Caixa = ({ data, indice }) => {   
    return (
        <div>
            <div>
                <img src={data.image.mobile} alt={data.name} />
                <button>
                    <ShoppingCartIcon />
                    <span>add to card</span> {}
                </button>
                <div>
                    <button><CircleMinusIcon /></button>
                    <span>0</span>
                    <button><CirclePlusIcon /></button>
                </div>
            </div>

            <div>
                <span>{data.category}</span>
                <span>{data.name}</span>
                <span>{data.price}</span>
            </div>
        </div>
    )
}

export default Caixa