//Get data from the server.
function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    )
}
function startGetUsers() {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
}
document.querySelector("#getDataBtn").addEventListener("click", startGetUsers);

//Fill table with server data
function fillDataTable(data,tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found.`);
        return;
    }
    //Add new user row to the table
    let newRow = newUserRow();
    table.appendChild(newRow);

    let tBody = table.querySelector("tbody");
    for (let row of data) {
        let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);

    }
}

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function createBtnGroup(){
    
    let group = createAnyElement("div", {class: "btn btn-group"});
    let infoBtn = createAnyElement("button", {class: "btn btn-info", onclick: "getInfo(this)"});
    infoBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    let delBtn = createAnyElement("button", {class: "btn btn-danger", onclick: "delRow(this)"});
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group);
    return td;
}

function delRow(btn) {
   let tr = btn.parentElement.parentElement.parentElement;
   let id = tr.querySelector("td:first-child").innerHTML;
   let fetchOptions = {
       method: "DELETE",
       mode: "cors",
       cache: "no-cache"
   };

   fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
       resp => resp.json(),
       err => console.error(err)
   ).then(
       data => {
        startGetUsers();
       }
   );
}

//create new user.
function newUserRow(row) {
    let tr = createAnyElement("tr");
    for (let k in {id: '', Name: '', Address: '', UserName: '', Email: '' }) {
        let td = createAnyElement("td");
        let input = createAnyElement("input", {
            class: "form-control",
            name: k
        });
        td.appendChild(input);
        tr.appendChild(td);
    }
    let newBtn = createAnyElement("button", {
        class: "btn btn-success",
        onclick: "createUser(this)"
    });
    newBtn.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
    let td = createAnyElement("td");
    td.appendChild(newBtn);
    tr.appendChild(td);
    

    return tr;

}


function createUser(btn) {
    let tr = btn.parentElement.parentElement;
    let data = getRowData(tr);
    
    console.log(data);

}

function getRowData(tr) {
    let inputs = tr.querySelectorAll("input.form-control");
    let data = {};
    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;
    }
    return data;
}