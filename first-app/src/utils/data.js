const pagesKey = 'pages';

let pageJson = localStorage.getItem(pagesKey);
let pageStore = JSON.parse(pageJson);

export default { 
    getAllPages() { 
        return pageStore;
    },
    getSinglePage(index){ 
        return pageStore[index];
    },
    editPage(index, page){
        pageStore[index] = page;

        localStorage.setItem(index, JSON.stringify(page));
    }
}