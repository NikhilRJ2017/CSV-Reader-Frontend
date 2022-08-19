// importing all essentails
import { uploadFilesUrl } from "./utils/urls.js";
import axios from './utils/axiosInstance.js';
import get from "./utils/getElement.js";
import showAllFiles from "./show_all_files.js";
import { hideLoading, showLoading } from './utils/toggleLoading.js'

// getting all essentails
const fileUploadForm = get('.file-upload-form');
const fileInput = get('.file-dom')

// variables
let csvFile;

// listening to file input change event listener
fileUploadForm.addEventListener('change', (e) => {
    csvFile = e.target.files[0];
    console.log(csvFile);
});

// listening to form submission
fileUploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        // showing loading gif
        showLoading();
        const formData = new FormData();

        // checking if file exists in input field
        if (!csvFile) {
            hideLoading();
            alert("Please select csv file");
            return;
        }
        formData.append('csv_file', csvFile);

        // creating entry into a database
        const data = await axios.post(uploadFilesUrl, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });

        // hideing loading gif
        hideLoading();

        // updating home page to reflect newly uploaded file
        showAllFiles();

        // clearing input field once uploaded
        clearField();

    } catch (error) {
        // hideing loading gif
        hideLoading();
        const { message } = error.response.data;
        alert(message)
    }


});

function clearField() {
    csvFile = '';
    fileInput.value = '';
}


