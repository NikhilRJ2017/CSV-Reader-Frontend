// importing all urls
import { getSingleFileUrl } from "../utils/urls.js";
import axios from '../utils/axiosInstance.js';
import displayParsedData from "./display_parsed_data.js";
import { hideLoading, showLoading } from "../utils/toggleLoading.js";


// fetching parsed data
const fetchParsedData = async (fileId) => {

    try {
        //changing the title of page
        document.title = localStorage.getItem("fileName")
        localStorage.setItem("fileName", '');

        // showing loading gif
        showLoading();

        // creating urls using file id
        const url = `${getSingleFileUrl}${fileId}`;

        // fetching data
        const response = await axios.get(url);
        const { data } = response;
        const { jsonData } = data;

        // displaying parsed data
        displayParsedData(jsonData);

        // hiding loading gif
        hideLoading();
    } catch (error) {
        hideLoading()

        if (error.code === 'ERR_NETWORK') {
            window.document.body.innerHTML = `<div class="text-center"><h2 class="text-danger">Server down, please reload or try again after some time</h2></div>`
        }
        const { message } = error.response.data;
        alert(message)
    }
}

export default fetchParsedData;
