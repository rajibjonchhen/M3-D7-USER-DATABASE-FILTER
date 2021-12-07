const displayAll = function(userInput){
    fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    let table = document.querySelector("table")
    users.forEach(data => {
     table.innerHTML +=`<tr>
                        <td class="p-2 text-left">${data.id}</td>
                        <td class="p-2 text-left">${data.name}</td>
                        <td class="p-2 text-left">${data.username}</td>
                        <td class="p-2 text-left">${data.email}</td>
                        <td class="p-2 text-left">${data.address.street} ${data.address.suite} ${data.address.city} ${data.address.zipcode} ${data.address.geo.lat} ${data.address.geo.lng}</td>
                        <div></div>
                        </tr>`
       
    })
})
}

const renderFilter = async (userInput) => {  

    let response = await fetch('https://jsonplaceholder.typicode.com/users');  
    let users = await response.json()   

    let ul = document.querySelector("ul")
    
       ul.innerHTML=""
        users.forEach(data => {
         
         if(userInput === "address"){
           
            ul.innerHTML += `<li class="p-2 text-left">${data.address.street}, ${data.address.suite} ,${data.address.city}, ${data.address.zipcode}, ${data.address.geo.lat}, ${data.address.geo.lng}</li>
            `
         }else
            ul.innerHTML += `<li>  ${data[userInput]}</li>`
        })
}


const filterName = function(event){
    let userInput = event.target.value;
    let category = document.querySelector("select").value
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
                                <td>  ${data["name"]}</td>
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
displayAll()
}