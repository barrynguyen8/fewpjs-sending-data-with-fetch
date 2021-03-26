// Add your code here
// const dogForm = document.getElementById('dogForm');
// const dogName = document.getElementById('dogName');
// const dogBreed = document.getElementById('dogBreed');

function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name, 
            email: email 
        })
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response){return response.json()})
        .then(function(result){document.body.innerHTML = result['id']}) 
        .catch(error => document.body.innerHTML=error.message);
};

submitData(); 

