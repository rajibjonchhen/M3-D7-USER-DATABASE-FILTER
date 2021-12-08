

// connected with display name button
const displayNames = function(event){
    let name= "name"
    let ul1 = document.querySelector("ul:first-of-type")
    ul1.classList.toggle("toggleDisplay")
    renderFilter(name)
}

// connected with display address button
const displayAddress =function(){
    let address ="address"
    let ul2 = document.querySelector("ul:last-of-type")
    ul2.classList.toggle("toggleDisplay")
    renderFilter(address)
}

// display list with the button click
const renderFilter = async (userInput) => { 

    let response = await fetch('https://jsonplaceholder.typicode.com/users');  
    let users = await response.json()   
    let ul1 = document.querySelector("ul:first-of-type")
    let ul2 = document.querySelector("ul:last-of-type")
    ul1.innerHTML=""
    ul2.innerHTML=""
        users.forEach(data => {  
        if(userInput === "address"){
        
            ul1.innerHTML += `<li class="p-2 text-left">${data.address.street}, ${data.address.suite} ,${data.address.city}, ${data.address.zipcode}, ${data.address.geo.lat}, ${data.address.geo.lng}</li>`
        }else
            ul2.innerHTML += `<li class="p-2 text-left">  ${data[userInput]}</li>`
        })
}

// fetch data

const loadAll = function(userInput){
    fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    display(users)
    filterUser(users)
})
.catch(err=>{
    console.error(err)
})
}

const filterUser = function(event){
    let userInput = event.target.value;
    let category = document.querySelector("select").value
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => { 
        const filteredData = (users.filter((user)=> user[category].toLowerCase().includes(userInput.toLowerCase())))
        display(filteredData) 
        })
        .catch(err=>{
            console.error(err)
        })
}

const sortData = function(event){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => { 
        let id= event.target.id
        if(id ==="toDecending"){
            event.target.id = "toAscending"
            const sortedData = users.sort((a,b)=>(a > b ? 1 : -1))
            display(sortedData)
        } else{
            
            event.target.id = "toDecending"
                const sortedData = users.sort((a,b)=>(a > b ? -1 : 1))
               display(sortedData)
        }
        })
        .catch(err=>{
            console.error(err)
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
                        <td class="p-2 text-left">
                        <button type="button" onclick="extraInfo(event)" id="${data.id}">
                          See more
                        </button>
                        <div class="extraInfo-container h-100 p-3">
                        
                        <div class=" h-100 userInfo p-3">

                        </div>
                        </div>
                   
                        </td> </tr>`
                        
    })
}


const extraInfo = function(event){
    let card = document.querySelectorAll(".userInfo")
    let userId = event.target.id
    card[userId-1].classList.toggle("toggleDisplay")
    console.log(userId)
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    .then(response=> response.json())
    .then(jsonData => {
        let container = document.querySelectorAll(".userInfo")
        container.innerHTML=""
        // let div = document.querySelector(".userInfo")
        // div.innerHTML=""
       
      container[userId-1].innerHTML =`<div class="card p-1" style="width: 18rem;">
      <p class="card-text">${jsonData.name}</p>
            <p class="card-title">Company -${jsonData.company.name}</p>
            <p class="card-text">${jsonData.company.catchPhrase}</p>
            <p class="card-text">${jsonData.company.bs}</p>
        </div>
        </div>
        `
    
    })
}




window.onload =function(){
loadAll()


}