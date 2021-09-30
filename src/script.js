const pedido = fetch (`https://jsonplaceholder.typicode.com/users`)


pedido 
    .then ((respuesta) => {
        
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })