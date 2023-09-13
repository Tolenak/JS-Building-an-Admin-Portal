
// Your Code Here

let response = await fetch ("http://localhost:3001/updateBook", {
    method: "Patch", 
    headers: {
        'Content-Type': 'application/json'
       }
    body:JSON.stringify ( {
        "id": 3, 
        'title': "Lengends of Arathrae"
}), 
})

let updatedBook = await response.json():
console.log(updatedBook) 