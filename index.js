

// connected with display name button
const displayNames = function(event){
    let name= "name"
    renderFilter(name)
}

// connected with display address button
const displayAddress =function(){
    let address ="address"
    renderFilter(address)
}

// display list with the button click
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

// fetch data
const loadAll = function(userInput){
    fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    display(users)
})
}

const filterUser = function(event){
    let userInput = event.target.value;
    let category = document.querySelector("select").value
    console.log(userInput)
    console.log(category)
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        
        const filteredData = (users.filter((user)=> user['name'].toLowerCase().includes(userInput.toLowerCase())))
    
        display(filteredData) 
        
        })
}

// display all the information in the table
const display= function(users){
    let table = document.querySelector("table")
    table.innerHTML=""
    users.forEach(data => {
    table.innerHTML +=`<tr>
                        <td class="p-2 text-left">${data.id}</td>
                        <td class="p-2 text-left">${data.name}</td>
                        <td class="p-2 text-left">${data.username}</td>
                        <td class="p-2 text-left">${data.email}</td>
                        <td class="p-2 text-left">${data.address.street} ${data.address.suite} ${data.address.city} ${data.address.zipcode} ${data.address.geo.lat} ${data.address.geo.lng}</td>
                        <td class="p-2 text-left"> <button class="btn btn-small bg-primary" userId="${data.id} onclick='filterName("name")'>know more</button>                       
                        <div class="extraInfo">
                        
                        </div>
                        </td>
                        `
    })
}



window.onload =function(){
loadAll()


const extraInfo = function(event){
        let userId= event.target.userId
        console.log(userId)
        fetch("https://jsonplaceholder.typicode.com/users/" + 1)
        .then(response=> response.json())
        .then(jsonData => {
            let div = document.querySelector("#extraInfo")
            console.log(jsonData)
            
            div.innerHTML =`<div class="card" style="width: 18rem;">
            
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${jsonData.company.name}</p>
                <p class="card-text">${jsonData.company.catchPhrase}</p>
                <p class="card-text">${jsonData.company.bs}</p>
                
            </div>
            </div>`
        })
    }


    fetch("https://jsonplaceholder.typicode.com/users/" + 1)
    .then(response=> response.json())
    .then(jsonData => {
    
    })
}