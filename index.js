const renderFilter =function(userInput){
    fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    let table = document.querySelector("table")
    
    users.forEach(data => {
        table.innerHTML += `<tr>
                                <td>${data.name}</td>
                            </tr>`
       
    })
})
}

const filterName = function(event){
    let userInput = event.target.value;
    renderFilter(userInput)

}

const displayNames = function(event){
  
    renderFilter()
}

const displayAddress

window.onload =function(){

}