import { create } from "zustand";

export const useStore = create((set, get) => ({

mudarCont: (name, type) => {

  set(state => ({
    data: state.data.map(ind => {
      if (ind.name == name) {
        switch(type) {
          case "soma":
            return {...ind, count: ind.count + 1}
          case "sub":
            if (ind.count == 0) {
              return ind
            }
              
            return {...ind, count: ind.count - 1}
          default:
            window.alert('error type indetectavel')
        }      
      } else {
        return ind
      }
    })
  }))
 
  get().alterValorF();
  get().quantItemsCont();
},

alterValorF: () => set(estado => {
  let valorFINAL = 0
    
  estado.data.forEach(indice => {
    const valorIndice = indice.price * indice.count
    valorFINAL += valorIndice
  });

  return { valorFinal: valorFINAL }
}),

quantItemsCont: () => set(state => {
  let quantidade_de_items = 0

  state.data.forEach(indice => {
    
    if (indice.count > 0) {
      quantidade_de_items += 1
    }

  });

  return { quantItems: quantidade_de_items }
}),

valorFinal: 0,
quantItems: 0 ,

data: [
{
  "image": {
    "thumbnail": "./images/image-waffle-thumbnail.jpg",
    "mobile": "./images/image-waffle-mobile.jpg",
    "tablet": "./images/image-waffle-tablet.jpg",
    "desktop": "./images/image-waffle-desktop.jpg"
  },

  "name": "Waffle with Berries",
  "category": "Waffle",
  "price": 6.50,
  "priceS":"6.50",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-creme-brulee-thumbnail.jpg",
    "mobile": "./images/image-creme-brulee-mobile.jpg",
    "tablet": "./images/image-creme-brulee-tablet.jpg",
    "desktop": "./images/image-creme-brulee-desktop.jpg"
  },
  "name": "Vanilla Bean Crème Brûlée",
  "category": "Crème Brûlée",
  "price": 7.00,
  "priceS":"7.00",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-macaron-thumbnail.jpg",
    "mobile": "./images/image-macaron-mobile.jpg",
    "tablet": "./images/image-macaron-tablet.jpg",
    "desktop": "./images/image-macaron-desktop.jpg"
  },
  "name": "Macaron Mix of Five",
  "category": "Macaron",
  "price": 8.00,
  "priceS":"8.00",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-tiramisu-thumbnail.jpg",
    "mobile": "./images/image-tiramisu-mobile.jpg",
    "tablet": "./images/image-tiramisu-tablet.jpg",
    "desktop": "./images/image-tiramisu-desktop.jpg"
  },
  "name": "Classic Tiramisu",
  "category": "Tiramisu",
  "price": 5.50,
  "priceS":"5.50",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-baklava-thumbnail.jpg",
    "mobile": "./images/image-baklava-mobile.jpg",
    "tablet": "./images/image-baklava-tablet.jpg",
    "desktop": "./images/image-baklava-desktop.jpg"
  },
  "name": "Pistachio Baklava",
  "category": "Baklava",
  "price": 4.00,
  "priceS":"4.00",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-meringue-thumbnail.jpg",
    "mobile": "./images/image-meringue-mobile.jpg",
    "tablet": "./images/image-meringue-tablet.jpg",
    "desktop": "./images/image-meringue-desktop.jpg"
  },
  "name": "Lemon Meringue Pie",
  "category": "Pie",
  "price": 5.00,
  "priceS":"5.00",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-cake-thumbnail.jpg",
    "mobile": "./images/image-cake-mobile.jpg",
    "tablet": "./images/image-cake-tablet.jpg",
    "desktop": "./images/image-cake-desktop.jpg"
  },
  "name": "Red Velvet Cake",
  "category": "Cake",
  "price": 4.50,
  "priceS":"4.50",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-brownie-thumbnail.jpg",
    "mobile": "./images/image-brownie-mobile.jpg",
    "tablet": "./images/image-brownie-tablet.jpg",
    "desktop": "./images/image-brownie-desktop.jpg"
  },
  "name": "Salted Caramel Brownie",
  "category": "Brownie",
  "price": 4.50,
  "priceS":"4.50",
  "count": 0
},
{
  "image": {
    "thumbnail": "./images/image-panna-cotta-thumbnail.jpg",
    "mobile": "./images/image-panna-cotta-mobile.jpg",
    "tablet": "./images/image-panna-cotta-tablet.jpg",
    "desktop": "./images/image-panna-cotta-desktop.jpg"
  },
  "name": "Vanilla Panna Cotta",
  "category": "Panna Cotta",
  "price": 6.50,
  "priceS":"6.50",
  "count": 0
}
]

}))









/*

updateDynamic: (key, value) => set(state => ({
  [key]: value
}))


// store.js
import { create } from 'zustand';

export const useStore = create(set => ({// name: STORE
    data: 0,
    nada: 0,
    user: { name: 'erick' },
    //  Cria ou atualiza a chave com esse nome. ex: data:...
    //  Se a chave já existe, substitui.
    //  Se a chave não existe, cria.
    //  renderiza apenas o componente que consomem o estado alterado
    incrementData: () => set(state => ({ data: state.data + 1 })),// se for retornar um objeto usa (parenteses) antes das chaves 
    incrementNada: () => set(state => ({ nada: state.nada + 1 })),// essas funções são acriadas apenas 1 vez no momento que a store é criada
    updateName: (name) => set(state => ({ user: {...state.user, name} }))
    // name é o argumento que passo ao chamar a função

    // atualiza o estado da store  <==  set
    // é o estado atual da store ex: data, nada, incrementData, incrementNada <== state
})); 


// () => ({ chave: valor }) → retorno direto de objeto (precisa de parênteses).

// () => { return { chave: valor } } → bloco de código (precisa de return).




    Exemplo com if

    incrementIfEven: (param) => set(state => {
        if (state.data % 2 === 0) {
            return { data: state.data + 1 }
        }
        return {} // não muda nada
    }),

  // Exemplo com switch
  changeUserName: (type) => set(state => {
    switch (type) {
      case "formal":
        return { user: { ...state.user, name: "Sr. " + state.user.name } }
      case "short":
        return { user: { ...state.user, name: state.user.name.slice(0, 3) } }// slice pega as 3 primerias letras indice 0 a 3
      default:
        return { user: { ...state.user, name: "Anon" } }
    }
  }),
*/