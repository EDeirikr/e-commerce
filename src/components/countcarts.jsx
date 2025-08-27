const Contc = () => {
    return (
        <div className="bg-white rounded-2xl p-7 flex flex-col items-center gap-[30px_0px]">
            <h1 className="text-[#c73a0f] text-3xl font-medium self-start">Your Cart (0)</h1>
            <img src="images/illustration-empty-cart.svg" alt="bolo de chocolate"/>
            <p className="text-[#0000006e]">You added items will appear here</p>
        </div>
    )
}

export default Contc

// duas opções erick 
// 1- criar um componente novo para mostrar os valores atualizados.
// 2- fazer a verificação aqui mesmo, e mostrar outra div
/*
    lembrando: você demora muto para tomar uma decisão, lhe falta determinaçõa, coloque na sua cabeça que isso é um coisa que não pode acontecer de jeito nenhum
*/