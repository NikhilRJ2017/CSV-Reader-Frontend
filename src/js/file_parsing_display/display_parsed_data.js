// importing all essentials
import get from '../utils/getElement.js'

// getting all essentials
const container = get('.container');
const searchField = get('#search_field');

// displaying parsed data
const displayParsedData = (data) => {

    // extracting first file to create column headers
    const file = data[0];
    const extractHeaders = Object.keys(file)

    //  using Handsontable API to create table and populate it
    const hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: [...extractHeaders],
        height: 'auto',
        width: 'auto',
        columnSorting: true,
        search: true,
        licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });

    // listening to search field
    Handsontable.dom.addEvent(searchField, 'keyup', function (event) {
        // get the `Search` plugin's instance
        const search = hot.getPlugin('search');
        // use the `Search` plugin's `query()` method
        const queryResult = search.query(this.value);

        hot.render();
    });


};

export default displayParsedData;

