import { CircleMinusIcon, CirclePlusIcon, ShoppingCartIcon } from "lucide-react"
import { useStore } from "../store/store"

const Caixa = ({ data }) => {   
    const addsub = useStore(state => state.mudarCont)

    return (
        <div className="flex flex-col gap-[50px_0px]">
        {/*                DIV IMAGEM                             */}
            <div className="rounded-2xl relative">
                <img src={data.image.mobile} alt={data.name} className="rounded-2xl w-full h-full object-cover"/>
                
                {/*       BOTÃO ADICIONAR PELA PRIMERA VEZ                   */}
                {data.count == 0 ? (
                    <button 
                        onClick={() => addsub(data.name,'soma')} 
                        className="bg-white rounded-3xl border-[.5px] absolute transform-[translate(-50%,-0%)] top-[87%] left-[50%] p-[15px_25px] flex gap-[0px_20px] cursor-pointer"
                    >
                        <ShoppingCartIcon className="text-[#c73a0f]" />
                        <span className="font-medium">Add To Card</span> 
                    </button>
                ): (
                    <div className="bg-[#ec4e1e] rounded-3xl absolute transform-[translate(-50%,-0%)] top-[87%] left-[50%] h-[50px] w-[180px] flex justify-between items-center px-4">
                        <button onClick={() => addsub(data.name, 'sub')} className="text-white cursor-pointer"><CircleMinusIcon /></button>
                        <span className="text-white font-medium">{data.count}</span>
                        <button onClick={() => addsub(data.name, 'soma')} className="text-white cursor-pointer"><CirclePlusIcon /></button>
                    </div>
                    )
                
                }

                {/*      BOTÃO COM CONTAGEM  (AUMENTAR/DIMINUIR)            */}
            </div>

            <div className="flex flex-col gap-[3px_0px]">
                <span className="text-[#0000006e] text-[18px]">{data.category}</span>
                <span className="font-medium text-[18px]">{data.name}</span>
                <span className="text-[#c73a0f] text-[18px] font-medium">${data.priceS}</span>
            </div>
        </div>
    )
}

export default Caixa