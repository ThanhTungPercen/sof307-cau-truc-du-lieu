const user = [{
        id: 1,
        name: "Vương Nhất Bác",
        gioitinh: "Nam",
        phone: "0901973141",
        idcar: "231068111",
        email: "nhatbac@gmail.vn",
        luong: "50,000,000 vnđ",


    }, {
        id: 2,
        name: "Triệu Lễ Dĩnh",
        gioitinh: "Nữ",
        phone: "0901973142",
        idcar: "231068112",
        email: "ledinh@gmail.vn",
        luong: "22,000,000 vnđ",
    },
    {
        id: 3,
        name: "Tống Uy Long",
        gioitinh: "Nam",
        phone: "0901973143",
        idcar: "231068113",
        email: "yulong@gmail.vn",
        luong: "16,000,000 vnđ",
    },
    {
        id: 4,
        name: "Dương Mịch",
        gioitinh: "Nữ",
        phone: "0901973144",
        idcar: "231068114",
        email: "duongmich@gmail.vn",
        luong: "30,000,000 vnđ",
    },
    {
        id: 5,
        name: "Nhậm Gia Luân",
        gioitinh: "Nam",
        phone: "0901973145",
        idcar: "231068115",
        email: "gialuan@gmail.vn",
        luong: "15,000,000 vnđ",
    },
    {
        id: 6,
        name: "Dương Tử",
        gioitinh: "Nữ",
        phone: "0901973146",
        idcar: "231068116",
        email: "duongtu@gmail.vn",
        luong: "10,000,000 vnđ",
    },
    {
        id: 7,
        name: "Địch Lệ Nhiệt Ba",
        gioitinh: "Nữ",
        phone: "0901973147",
        idcar: "231068117",
        email: "nhietba@gmail.vn",
        luong: "45,000,000 vnđ",
    },
    {
        id: 8,
        name: "Tiêu Chiến",
        gioitinh: "Nam",
        phone: "0901973148",
        idcar: "231068118",
        email: "tieuchen@gmail.vn",
        luong: "24,000,000 vnđ",
    }, {
        id: 9,
        name: "Triệu Lộ Tư",
        gioitinh: "Nữ",
        phone: "0901973149",
        idcar: "231068119",
        email: "lotu@gmail.vn",
        luong: "21,000,000 vnđ",
    }, {
        id: 10,
        name: "Vương Trung Khiên",
        gioitinh: "Nam",
        phone: "0901973110",
        idcar: "231068110",
        email: "khien@gmail.vn",
        luong: "49,000,000 vnđ",
    }, {
        id: 11,
        name: "Cúc Tịnh Y",
        gioitinh: "Nữ",
        phone: "0901973111",
        idcar: "231068121",
        email: "tinhy@gmail.vn",
        luong: "19,000,000 vnđ",
    }, {
        id: 12,
        name: "Hứa Quang Hán",
        gioitinh: "Nam",
        phone: "0901973112",
        idcar: "231068122",
        email: "quanghan@gmail.vn",
        luong: "26,000,000 vnđ",
    }, {
        id: 13,
        name: "Trương Tân Thành",
        gioitinh: "Nam",
        phone: "0901973113",
        idcar: "231068123",
        email: "tanthanh@gmail.vn",
        luong: "27,000,000 vnđ",
    }, {
        id: 14,
        name: "Bành Tiểu Nhiễm",
        gioitinh: "Nữ",
        phone: "0901973114",
        idcar: "231068124",
        email: "nhiem@gmail.vn",
        luong: "48,000,000 vnđ",
    }, {
        id: 15,
        name: "Trần Đức Chiến",
        gioitinh: "Nam",
        phone: "0901973115",
        idcar: "231068125",
        email: "ducchien@gmail.vn",
        luong: "36,000,000 vnđ",
    }, {
        id: 16,
        name: "Bạch Lộc",
        gioitinh: "Nữ",
        phone: "0901973116",
        idcar: "231068126",
        email: "bachloc@gmail.vn",
        luong: "32,000,000 vnđ",
    }, {
        id: 17,
        name: "La Vân Hi",
        gioitinh: "Nam",
        phone: "0901973117",
        idcar: "231068127",
        email: "vanhi@gmail.vn",
        luong: "39,000,000 vnđ",
    }, {
        id: 18,
        name: "Khóc Vô Lệ",
        gioitinh: "Nữ",
        phone: "0901973118",
        idcar: "231068128",
        email: "vole@gmail.vn",
        luong: "36,000,000 vnđ",
    }, {
        id: 19,
        name: "Chung Hán Lương",
        gioitinh: "Nam",
        phone: "0901973119",
        idcar: "231068129",
        email: "hanluong@gmail.vn",
        luong: "35,000,000 vnđ",
    }, {
        id: 20,
        name: "Ngô Diệc Phàm",
        gioitinh: "Nam",
        phone: "0901973130",
        idcar: "231068130",
        email: "diepham@gmail.vn",
        luong: "17,000,000 vnđ",
    }
];


// Đưa user lên local
let uplocal = localStorage.setItem('user', JSON.stringify(user));
let dowload = localStorage.getItem('user');
let array = JSON.parse(dowload);
console.log(array);
// = |

// Tạo danh sách
function dsUser(arrayUser) {
    let htmlUser = "";
    arrayUser.map(user => {
        return htmlUser += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.gioitinh}</td>
            <td>${user.email}</td>
            <td>${user.idcar}</td>
            <td>${user.phone}</td>
            <td>${user.luong}</td>
            <td>
                <button type="button" class="btn btn-outline-primary" 
                onclick="deleteProducts(${user.id})"
                ><i class="far fa-trash-alt"></i>
            </td>
        </tr>
        `
    })
    document.getElementById('user').innerHTML = htmlUser;
}
const renderObj = (obj) => {
    return document.getElementById("user").innerHTML = ` <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.gioitinh}</td>
            <td>${obj.email}</td>
            <td>${obj.idcar}</td>
            <td>${obj.phone}</td>
            <td>${obj.luong}</td>
            <td>
                <button type="button" class="btn btn-outline-primary" 
                onclick="deleteProducts(${user.id})"
                ><i class="far fa-trash-alt"></i>
            </td>
        </tr>`
}

const setProducts = (users) => {
    localStorage.setItem("user", JSON.stringify(users));
}
// Xóa ID 
const deleteProducts = (id) => {
    let jsonProducts = localStorage.getItem("user") || "[]";
    let products = JSON.parse(jsonProducts);
    products = products.filter(item => item.id != id)
    setProducts(products)
    dsUser(products)
    console.log(id)
}

// TODO func lấy danh sách user trên local
const getUsers = () => {
    const jsonUsers = localStorage.getItem("user") || "[]";
    const users = JSON.parse(jsonUsers);
    return users;
}

// Tìm User
const findUses = (array, left, right, objSearch) => {
    if (right >= left) {
        let mid = Math.ceil(left + (right - left) / 2);
        console.log('id'+objSearch)       
        console.log('left' + array[left].id)
        console.log('right' + array[right].id)
        console.log('mid' + array[mid].id)
        if (array[mid].id == objSearch) {
            renderObj(array[mid])
            return array[mid];
        }
        if (array[mid].id > objSearch) return findUses(array, left, mid - 1, objSearch);
        return findUses(array, mid + 1, right, objSearch);
    }
    return -1;

}

// Hàm Tìm kiếm
const inputSearch = () => {
    const users = getUsers();
    // gọi tên hàm tìm kiếm bang id 
    var nodeInputSearch = document.getElementById(`input-search`);
    let arrLength = users.length;
    findUses(users, 0, arrLength - 1, nodeInputSearch.value)
    if (nodeInputSearch.value == null || nodeInputSearch.value == "") dsUser(users)
    console.log(inputSearch)
}

// Tìm kiếm theo tên 
// const searchInput = document.getElementById('search');
// const rows = document.querySelectorAll('dsUser tr');
// console.log(rows);

// selection sort
function selectionPrice(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j].luong < arr[min].luong) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
        console.log('lần lặp thứ-------------'+''+ i)
        for (let i = 0; i < arr.length; i++) {          
           console.log(arr[i].luong)          
        }
       
    }
    setProducts(arr)
    return dsUser(arr);
}
// Sắp xếp lương từ cao xuống thấp
function bubbleSortProduct(arr) {
    const arrLength = arr.length;
    // 
    for (let i = arrLength - 1; i >= 0; i--) {
    
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1].luong < arr[j].luong) {
               
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log('lần lặp thứ-------------'+''+ i)
        for (let i = 0; i < arr.length; i++) {          
           console.log(arr[i].luong)          
        }
       

    }
    setProducts(arr);
    return dsUser(arr);

}

// ----------------------------------------------------------------
// Tìm kiếm theo tên 
function inputSearchName(user) {
    var input = document.getElementById(`search`);
    console.log(user);
    console.log(input.value);
    find1(array, input.value)
    if (input.value == null || input.value == "") dsUser(user)
}

function find1(user, inputSeach) {
    console.log(inputSeach);
    for (var i = 0; i < user.length; i++) {
        var c = user[i].name.includes(inputSeach);
        if (c == true) {
            loadData1(user[i])
            return user[i].name;
        }

    }
    return -1;
}

function loadData1(user) {
    return document.getElementById("user").innerHTML = `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.gioitinh}</td>
    <td>${user.email}</td>
    <td>${user.idcar}</td>
    <td>${user.phone}</td>
    <td>${user.luong}</td>
    <td>
    <button type="button" class="btn btn-outline-primary" 
    onclick="deleteProducts(${user.name})"
    ><i class="far fa-trash-alt"></i>
</td>
</tr>`
}
// ----------------------------------------------------------------

// Refesh lại trang 
function refreshPage() {
    window.location.reload();
}
// ------------------------------------------------------------------------




// pagination. Phân Trang 