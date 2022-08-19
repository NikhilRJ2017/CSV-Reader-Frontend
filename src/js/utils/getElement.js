// saving some seconds by not writing document.querySelector() everytime
const getElement = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
        return element;
    } else {
        throw new Error(`No element found with ${selector} selector`)
    }
}

export default getElement;