import fetchParsedData from "./fetch_parsed_data.js";

// listening to DOM load
window.addEventListener('DOMContentLoaded', () => {

    const fileId = getFileID();

    //fetching parsed data
    fetchParsedData(fileId)
})

// getting fileId from URL
function getFileID() {
    const params = new URLSearchParams(window.location.search);
    const fileName = params.get('filename');
    localStorage.setItem('fileName', fileName);
    return params.get('id');
}

// *check for internet connection
window.addEventListener("online", function() {
    this.document.body.innerHTML = '';
    this.window.location.reload();
});

window.addEventListener("offline", function () {
    // alert("Oops! You are offline now!");
    this.document.body.innerHTML = `<div class="text-center"><h1 class="text-danger">Oppsie! No Internet</h1></div>`
});