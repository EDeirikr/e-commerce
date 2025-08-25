import './App.css'
import Caixa from './components/caixa'
import Contc from './components/countcarts'
import { useStore } from './store/store'

function App() {
  const dados = useStore(estado => estado.data)
  

  return (
    <div className='bg-[#FCF8F5] p-8 flex flex-col gap-[40px_0px]'>
      <h1 className='font-bold text-4xl'>Desserts</h1>
      <ul className='flex flex-col gap-[35px_0px]'>
        {dados.map((data, indice) => {
          return (
            <Caixa key={indice} data={data} />
          )
        })}
      </ul>
      <Contc />
    </div>
  )
}

export default App




/*
  const data = useStore(state => state.data)
  const nada = useStore(state => state.nada)
  const setdata = useStore(state => state.incrementData)
*/

/*   
  IMPORTANTE     abaixo linha 2 (import)

  import { useStore } from "./store/store"
*/

/* 
  <Modal
    isOpen={isOpen} // estado do modal aberto ou fechado
    onRequestClose={fecharM}// quando clicar em ESC ou fora do modal
    overlayClassName={"fundoM"}// estilo do fundo do modal
    className={"rounded-3xl w-[70vw] h-[70vh]"}// estilos da caixa/conteudo do modal
    contentLabel=''// texto de acessibilidade do modal
  > 
*/