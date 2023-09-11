
// Bai 1

document.getElementById('formTinh').onsubmit = function(event){
    event.preventDefault(); //chan reload trang
    tinhLuong();
}

function tinhLuong() {
    var soNgayLam = +document.getElementById('soNgayLam').value;
    document.getElementById('tongLuong').innerHTML = soNgayLam * 100000 + ' ' + 'đồng';
}

// Bai 2
document.getElementById('trungBinh').onsubmit = function(event){
    event.preventDefault(); //chan reload trang
    tinhTrungBinh();
}

function tinhTrungBinh() {
    var soThuNhat = +document.getElementById('soThuNhat').value;
    var soThuHai = +document.getElementById('soThuHai').value;
    var soThuBa = +document.getElementById('soThuBa').value;
    var soThuTu = +document.getElementById('soThuTu').value;
    var soThuNam = +document.getElementById('soThuNam').value;

    document.getElementById('giaTriTB').innerHTML = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam ) /5 ;
}


// Bai 3

document.getElementById('formDoiTien').onsubmit = function(event){
    event.preventDefault(); //chan reload trang
    quyDoiTien();
}
function quyDoiTien() {
    var soUSD = +document.getElementById('soUSD').value;
    var tongTien = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(soUSD * 23500);

    document.getElementById('tongTienVND').innerHTML = tongTien;
}

//bài 4

document.getElementById('formToan').onsubmit = function(event){
    event.preventDefault(); //chan reload trang
    toanHinh();
}

function toanHinh(){
    var chieuRong = +document.getElementById('chieuRong').value;
    var chieuDai = +document.getElementById('chieuDai').value;
    document.getElementById('chuVi').innerHTML = (chieuRong + chieuDai)*2;
    document.getElementById('dienTich').innerHTML = chieuRong * chieuDai;
}

//bài 5

document.getElementById('formSo').onsubmit = function(event){
    event.preventDefault(); //chan reload trang
    tongSo();
}

function tongSo(){
    var soNguyen = +document.getElementById('soNguyen').value;
    var hangChuc = Math.floor(soNguyen / 10);
    var hangDonVi = soNguyen % 10;
    document.getElementById('tongSo').innerHTML = hangChuc + hangDonVi;
}