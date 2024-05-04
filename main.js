let list=[]
function create(){
    let sl = document.getElementById('sl').value
    for (let i = 0; i < sl; i++) {
        let sp = prompt("Nhập sản phẩm thứ: "+i)
        list.push(sp)
        //console.log(list[i])
        //document.getElementById('display').innerHTML = "Danh sách sản phẩm <br>"+list+"<br>"
    }
    //return list
    showList()
}

function showList(){
    let str = "<h1>Danh sách sản phẩm</h1>"
    str +=`<h2>Số lượng sản phẩm: ${list.length}</h2>`
    for (let i = 0; i < list.length; i++) {
        str+= `<h3>${list[i]}<button onclick="edit(${[i]})">Sửa</button></h3>`
    }
    document.getElementById('display').innerHTML = str
}
function add(){
    let str = "<input type='text' placeholder='Nhập sản phẩm cần thêm' id='addproduct'> <button onclick='addProduct()'>Thêm</button>"
    document.getElementById('display').innerHTML = str
}
function addProduct(){
    list.push(document.getElementById('addproduct').value)
    showList()
}
function edit(editproduct){
    let str  =  `<input type='text' id='editPro' value='${list[editproduct]}'><button onclick="save(${[editproduct]})">Lưu</button>`
    document.getElementById('display').innerHTML = str
}
function save(editproduct){
    list[editproduct]= document.getElementById('editPro').value
    showList()
}