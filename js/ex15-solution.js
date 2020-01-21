//The use of arrow function
//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// document.querySelector('button.btn').addEventListener("click", function(){
//     document.getElementById("top").innerText = "Test Clicked!!!";
// })

document.querySelector('button.btn').addEventListener("click", () =>document.getElementById("top").innerText = "Test Clicked!!!")


url = 'https://jsonplaceholder.typicode.com/albums'
// fetch(url)
//   .then(response => response.json())
//   .then(json => console.log(json))



fetch(url)
.then(response=> response.json())
.then(json => {
    console.log(json)
    populateAlbum(json)});

// let listAlbum = document.getElementById("album").innerHTML
let listAlbum = document.getElementById("albumList").innerHTML
function populateAlbum(json){
    for (let n of json){
        console.log(n);
        // listAlbum += '<option value="' + n.title + '">';
        listAlbum += '<option value="' + n.id + '">' + n.title + '</option>';
    }
    document.getElementById("albumList").innerHTML = listAlbum;

}

let obj = fetch(url)
console.log(obj);
obj.then(function(data) {
    return data.json();
}).then(function(data) {
    console.log(data.id);
})

document.getElementById("albumList").addEventListener("change", function(){
    // document.getElementById("displayStuff").innerText = document.getElementById("albumList").value;
    urlPhotos = 'https://jsonplaceholder.typicode.com/photos?albumId=' + document.getElementById("albumList").value;
    fetch(urlPhotos)
        .then(response=> response.json())
        .then(json => {
            console.log(json)
            populatePhotos(json)});
}
)
let listPhoto;
function populatePhotos(json){
    listPhoto="";
    for (let n of json){
        console.log(n);
        listPhoto += '<div class="card col-3" ><img src="' + n.url +
        '" class="card-img-top" alt="' + n.title +
        '"><div class="card-body"> <p class="card-text">' +
        n.title + '</p></div></div>'

    }
    document.getElementById("photos").innerHTML = listPhoto;

}

//   fetch(url)
//   .then(function(response) {return response.json()})
//   .then(function(json) {console.log(json)})