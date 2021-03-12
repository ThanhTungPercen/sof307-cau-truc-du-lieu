let pagination = {
    page: 1,
    pageSize: 1,
    totalPage: 1,
    row: []
}
const getTotalPage = () => {
    let jsonProducts = localStorage.getItem("totalPages") || "[]";
    let products = JSON.parse(jsonProducts);
    return products;
}
const setTotalPage = (totalPages) => localStorage.setItem("totalPages", JSON.stringify(totalPages));
const funcSetConstructorPagination = (page, pageSize, totalPage) => {
    const nodeRow = localStorage.getItem("user");
    let row = JSON.parse(nodeRow)
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setTotalPage(Math.ceil(row.length / pageSize));
    row = row.slice(startIndex, endIndex)
    return row;
}
const renderNavPagination = (totalPages) => {
    const childProducts = funcSetConstructorPagination(1, 4, 10, localStorage.getItem('user'));
    let paginationHTML = ``
    for (let index = 1; index <= totalPages; index++) {
        paginationHTML += `<li onClick="setPagination(${index},${4},${totalPages})" class="page-item" ><a class="page-link">${index}</a></li>`
    }
    return document.getElementById('pagination-id').innerHTML = paginationHTML;
}
const setPagination = (page, pageSize, totalPage) => {
    let nodeRow = localStorage.getItem('user')
    let row = JSON.parse(nodeRow)
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setTotalPage(Math.ceil(row.length / pageSize));
    row = row.slice(startIndex, endIndex)
    console.log(row)
    dsUser(row)
    return row;
}