getUsers();
function getUsers() {
    let fetchInit = {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default"
   
    };
    fetch("http://localhost:3000/users", fetchInit).then(
        data => data.json(), 
        err => console.error(err)
    ).then(
        users => createUsersTable(users)
    );
    
}

function createUsersTable(users) {
    let parent = document.querySelector("#usersTbody");
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let tableRow = document.createElement("tr");
        let tableDataId = document.createElement("td");
        let tableDataName = document.createElement("td");
        let tableDataAddress = document.createElement("td");
        let tableDataUserName = document.createElement("td");
        let tableDataEmail = document.createElement("td");
    
        tableDataId.innerHTML = user.id;
        tableRow.appendChild(tableDataId); 
    
        tableDataName.innerHTML = user.Name;
        tableRow.appendChild(tableDataName); 
    
        tableDataAddress.innerHTML = user.Address;
        tableRow.appendChild(tableDataAddress); 
    
        tableDataUserName.innerHTML = user.UserName;
        tableRow.appendChild(tableDataUserName); 
    
        tableDataEmail.innerHTML = user.Email;
        tableRow.appendChild(tableDataEmail); 
    
        parent.appendChild(tableRow);
        
    };
    
}
 /*
 let fetchInit = {
     method: "GET",
     headers: new Headers(),
     mode: "cors",
     cache: "default"

 };
 fetch("http://localhost:3000/users", fetchInit).then(
     data => data.json(), 
     err => console.error(err)
 ).then(
     users => console.log(users)
 );
  */