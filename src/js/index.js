import showAllFiles from "./show_all_files.js"

// listening to DOM load
window.addEventListener('DOMContentLoaded', async () => {

    // showing all uploaded files
    showAllFiles();
})

// *check for internet connection
window.addEventListener("online", function() {
    this.document.body.innerHTML = '';
    this.window.location.reload();
});

window.addEventListener("offline", function () {
    // alert("Oops! You are offline now!");
    this.document.body.innerHTML = `<div class="text-center"><h1 class="text-danger">Oppsie! No Internet</h1></div>`
});