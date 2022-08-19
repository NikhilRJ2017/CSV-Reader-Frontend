// importing all essentials
import { getAllFilesUrl } from '../js/utils/urls.js'
import get from '../js/utils/getElement.js'
import { hideLoading, showLoading } from "./utils/toggleLoading.js";


// getting all essentials
const allDataHtml = get('.all-data');
const totalFileCount = get('.total_file_count');

const showAllFiles = async () => {
    try {
        // showing load gif
        showLoading();

        // fetching all uploaded files
        const response = await axios.get(getAllFilesUrl);
        const { data } = response;
        const { count, files } = data;

        // constructing template
        const allFilesCard = files.map((file) => {
            const { name, _id } = file;

            return `
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body text-center">
                        <p class="card-text card-name">${name}.csv</p>
                        <button type="button" class="btn btn-sm btn-outline-secondary view-parsed-file" data-fileid="${_id}" data-filename="${name}.csv">View</button>
                    </div>
                </div>
            </div>`
        }).join('');

        // updating total file count
        totalFileCount.textContent = count;

        // attaching all card files to html
        allDataHtml.innerHTML = allFilesCard;

        //hiding loading gif
        hideLoading();

    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            window.document.body.innerHTML = `<div class="text-center"><h2 class="text-danger">Server down, please reload or try again after some time</h2></div>`
        }
        hideLoading();
    }
}

// listening to view button click
allDataHtml.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-parsed-file')) {
        const fileId = e.target.dataset.fileid;
        const fileName = e.target.dataset.filename;
        window.open(`http://localhost:5500/src/html/show_parsed.html?id=${fileId}&filename=${fileName}`, '_blank', 'popup:yes');
    }
})

export default showAllFiles;