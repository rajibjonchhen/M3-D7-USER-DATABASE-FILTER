// const renderFilter = function(userInput){
//     fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => {
//     let ul = document.querySelector("ul")
    
//    ul.innerHTML=""
//     users.forEach(data => {
     
//      if(userInput === "address"){
//         let address= JSON.stringify(data.address)
//         ul.innerHTML += `<li>  ${address}</li>`
//      }else
//         ul.innerHTML += `<li>  ${data[userInput]}</li>`
       
       
//     })
// })
// }

const renderFilter = async (userInput) => {  

    let response = await fetch('https://jsonplaceholder.typicode.com/users');  
    let users = await response.json()    
    let ul = document.querySelector("ul")
    
       ul.innerHTML=""
        users.forEach(data => {
         
         if(userInput === "address"){
            let address= JSON.stringify(data.address)
            ul.innerHTML += `<li>  ${address}</li>`
         }else
            ul.innerHTML += `<li>  ${data[userInput]}</li>`
        })
}


const filterName = function(event){
    let userInput = event.target.value;
    renderFilteredName(userInput)

}

renderFilteredName = function(userInput){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        let table = document.querySelector("table")
        
        const filteredData = (users.filter((user)=> user.name.toLowerCase().includes(userInput.toLowerCase())))
        filteredData.forEach(data =>{
            
            table.innerHTML += `<tr>
                                <td>  ${data[userInput]}</td>
                            </tr>`
        })
    })
}

const displayNames = function(event){
    let name= "name"
    renderFilter(name)
}

const displayAddress =function(){
    let address ="address"
    renderFilter(address)
}

window.onload =function(){

}