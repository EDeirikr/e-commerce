import './App.css'
import Caixa from './components/caixa'
import { useStore } from './store/store'

function App() {
  const dados = useStore(estado => estado.data)
  
  return (
    <>
      <h1>desserts</h1>
      <ul>
        {dados.map((data, indice) => {
          return (
            <Caixa key={indice} data={data} indice={indice} />
          )
        })}
      </ul>
    </>
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