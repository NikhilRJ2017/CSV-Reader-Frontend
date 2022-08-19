import get from "./getElement.js";

// getting all essentials
const loading = get('.loading');

// showing loading gif
export const showLoading = () => { 
    loading.classList.remove('hide-loading');
}

// hiding loading gif
export const hideLoading = () => { 
    loading.classList.add('hide-loading');
}