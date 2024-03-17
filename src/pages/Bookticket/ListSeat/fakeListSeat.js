// 20240317113215
// https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=46109

const listSeat = [
    {
      "maGhe": 47401,
      "tenGhe": "01",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "01",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47402,
      "tenGhe": "02",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "02",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47403,
      "tenGhe": "03",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "03",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47404,
      "tenGhe": "04",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "04",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47405,
      "tenGhe": "05",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "05",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47406,
      "tenGhe": "06",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "06",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47407,
      "tenGhe": "07",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "07",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47408,
      "tenGhe": "08",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "08",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47409,
      "tenGhe": "09",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "09",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47410,
      "tenGhe": "10",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "10",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47411,
      "tenGhe": "11",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "11",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hoanghh.21it@vku.udn.vn"
    },
    {
      "maGhe": 47412,
      "tenGhe": "12",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "12",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hieuadmin1232"
    },
    {
      "maGhe": 47413,
      "tenGhe": "13",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "13",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hieuadmin1232"
    },
    {
      "maGhe": 47414,
      "tenGhe": "14",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "14",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thanhtan123"
    },
    {
      "maGhe": 47415,
      "tenGhe": "15",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "15",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hieuadmin1232"
    },
    {
      "maGhe": 47416,
      "tenGhe": "16",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "16",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thanhtan123"
    },
    {
      "maGhe": 47417,
      "tenGhe": "17",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "17",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47418,
      "tenGhe": "18",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "18",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47419,
      "tenGhe": "19",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "19",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47420,
      "tenGhe": "20",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "20",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47421,
      "tenGhe": "21",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "21",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "phannguyenminhphat1@gmail.com"
    },
    {
      "maGhe": 47422,
      "tenGhe": "22",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "22",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "Thao098"
    },
    {
      "maGhe": 47423,
      "tenGhe": "23",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "23",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "Thao098"
    },
    {
      "maGhe": 47424,
      "tenGhe": "24",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "24",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47425,
      "tenGhe": "25",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "25",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47426,
      "tenGhe": "26",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "26",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47427,
      "tenGhe": "27",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "27",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47428,
      "tenGhe": "28",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "28",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hieuadmin1232"
    },
    {
      "maGhe": 47429,
      "tenGhe": "29",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "29",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "admin321"
    },
    {
      "maGhe": 47430,
      "tenGhe": "30",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "30",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thanhtan123"
    },
    {
      "maGhe": 47431,
      "tenGhe": "31",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "31",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thanhtan123"
    },
    {
      "maGhe": 47432,
      "tenGhe": "32",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "32",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thanhtan123"
    },
    {
      "maGhe": 47433,
      "tenGhe": "33",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "33",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47434,
      "tenGhe": "34",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "34",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47435,
      "tenGhe": "35",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "35",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47436,
      "tenGhe": "36",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "36",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "khanhntq"
    },
    {
      "maGhe": 47437,
      "tenGhe": "37",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "37",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "khanhntq"
    },
    {
      "maGhe": 47438,
      "tenGhe": "38",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "38",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "HieuNV65"
    },
    {
      "maGhe": 47439,
      "tenGhe": "39",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "39",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "huyzz12"
    },
    {
      "maGhe": 47440,
      "tenGhe": "40",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "40",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "huyzz12"
    },
    {
      "maGhe": 47441,
      "tenGhe": "41",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "41",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "huyzz12"
    },
    {
      "maGhe": 47442,
      "tenGhe": "42",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "42",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "namnguyen"
    },
    {
      "maGhe": 47443,
      "tenGhe": "43",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "43",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "namnguyen"
    },
    {
      "maGhe": 47444,
      "tenGhe": "44",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "44",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47445,
      "tenGhe": "45",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "45",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "admin321"
    },
    {
      "maGhe": 47446,
      "tenGhe": "46",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "46",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47447,
      "tenGhe": "47",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "47",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "demo112233@gmail.com"
    },
    {
      "maGhe": 47448,
      "tenGhe": "48",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "48",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "demo112233@gmail.com"
    },
    {
      "maGhe": 47449,
      "tenGhe": "49",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "49",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47450,
      "tenGhe": "50",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "50",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47451,
      "tenGhe": "51",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "51",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47452,
      "tenGhe": "52",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "52",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "danhth90"
    },
    {
      "maGhe": 47453,
      "tenGhe": "53",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "53",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47454,
      "tenGhe": "54",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "54",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47455,
      "tenGhe": "55",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "55",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "dvphuc96"
    },
    {
      "maGhe": 47456,
      "tenGhe": "56",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "56",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47457,
      "tenGhe": "57",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "57",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47458,
      "tenGhe": "58",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "58",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47459,
      "tenGhe": "59",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "59",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47460,
      "tenGhe": "60",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "60",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47461,
      "tenGhe": "61",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "61",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47462,
      "tenGhe": "62",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "62",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47463,
      "tenGhe": "63",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "63",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "demo112233@gmail.com"
    },
    {
      "maGhe": 47464,
      "tenGhe": "64",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "64",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "demo112233@gmail.com"
    },
    {
      "maGhe": 47465,
      "tenGhe": "65",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "65",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47466,
      "tenGhe": "66",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "66",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47467,
      "tenGhe": "67",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "67",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47468,
      "tenGhe": "68",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "68",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47469,
      "tenGhe": "69",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "69",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47470,
      "tenGhe": "70",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "70",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47471,
      "tenGhe": "71",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "71",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47472,
      "tenGhe": "72",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "72",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "Han"
    },
    {
      "maGhe": 47473,
      "tenGhe": "73",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "73",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "Han"
    },
    {
      "maGhe": 47474,
      "tenGhe": "74",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "74",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47475,
      "tenGhe": "75",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "75",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47476,
      "tenGhe": "76",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "76",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47477,
      "tenGhe": "77",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "77",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47478,
      "tenGhe": "78",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "78",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47479,
      "tenGhe": "79",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "79",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "demo112233@gmail.com"
    },
    {
      "maGhe": 47480,
      "tenGhe": "80",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "80",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47481,
      "tenGhe": "81",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "81",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47482,
      "tenGhe": "82",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "82",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47483,
      "tenGhe": "83",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "83",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47484,
      "tenGhe": "84",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "84",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47485,
      "tenGhe": "85",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "85",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47486,
      "tenGhe": "86",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "86",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47487,
      "tenGhe": "87",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "87",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47488,
      "tenGhe": "88",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "88",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47489,
      "tenGhe": "89",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "89",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "admintest"
    },
    {
      "maGhe": 47490,
      "tenGhe": "90",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "90",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "admintest"
    },
    {
      "maGhe": 47491,
      "tenGhe": "91",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "91",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47492,
      "tenGhe": "92",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "92",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47493,
      "tenGhe": "93",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "93",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47494,
      "tenGhe": "94",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "94",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47495,
      "tenGhe": "95",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "95",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47496,
      "tenGhe": "96",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "96",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "joeltest"
    },
    {
      "maGhe": 47497,
      "tenGhe": "97",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "97",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47498,
      "tenGhe": "98",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "98",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47499,
      "tenGhe": "99",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "99",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47500,
      "tenGhe": "100",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "100",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47501,
      "tenGhe": "101",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "101",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47502,
      "tenGhe": "102",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "102",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47503,
      "tenGhe": "103",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "103",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "giahuy5"
    },
    {
      "maGhe": 47504,
      "tenGhe": "104",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "104",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "thinh123321"
    },
    {
      "maGhe": 47505,
      "tenGhe": "105",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "105",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "giahuy5"
    },
    {
      "maGhe": 47506,
      "tenGhe": "106",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "106",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "chuppiteo123"
    },
    {
      "maGhe": 47507,
      "tenGhe": "107",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "107",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "chuppiteo123"
    },
    {
      "maGhe": 47508,
      "tenGhe": "108",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "108",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "danhth90"
    },
    {
      "maGhe": 47509,
      "tenGhe": "109",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "109",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "danhth90"
    },
    {
      "maGhe": 47510,
      "tenGhe": "110",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "110",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "giahuy5"
    },
    {
      "maGhe": 47511,
      "tenGhe": "111",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "111",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "123123"
    },
    {
      "maGhe": 47512,
      "tenGhe": "112",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "112",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "123123"
    },
    {
      "maGhe": 47513,
      "tenGhe": "113",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "113",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47514,
      "tenGhe": "114",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "114",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47515,
      "tenGhe": "115",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "115",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47516,
      "tenGhe": "116",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "116",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47517,
      "tenGhe": "117",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "117",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47518,
      "tenGhe": "118",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "118",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47519,
      "tenGhe": "119",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "119",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47520,
      "tenGhe": "120",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "120",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "giahuy5"
    },
    {
      "maGhe": 47521,
      "tenGhe": "121",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "121",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "giahuy5"
    },
    {
      "maGhe": 47522,
      "tenGhe": "122",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "122",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47523,
      "tenGhe": "123",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "123",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47524,
      "tenGhe": "124",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "124",
      "giaVe": 108000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47525,
      "tenGhe": "125",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "125",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "giahuy5"
    },
    {
      "maGhe": 47526,
      "tenGhe": "126",
      "maRap": 451,
      "loaiGhe": "Vip",
      "stt": "126",
      "giaVe": 108000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "danhth90"
    },
    {
      "maGhe": 47527,
      "tenGhe": "127",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "127",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "123123"
    },
    {
      "maGhe": 47528,
      "tenGhe": "128",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "128",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hieuadmin1232"
    },
    {
      "maGhe": 47529,
      "tenGhe": "129",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "129",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47530,
      "tenGhe": "130",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "130",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47531,
      "tenGhe": "131",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "131",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47532,
      "tenGhe": "132",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "132",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47533,
      "tenGhe": "133",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "133",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47534,
      "tenGhe": "134",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "134",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47535,
      "tenGhe": "135",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "135",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47536,
      "tenGhe": "136",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "136",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47537,
      "tenGhe": "137",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "137",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47538,
      "tenGhe": "138",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "138",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47539,
      "tenGhe": "139",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "139",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47540,
      "tenGhe": "140",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "140",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47541,
      "tenGhe": "141",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "141",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47542,
      "tenGhe": "142",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "142",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47543,
      "tenGhe": "143",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "143",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "hieuadmin1232"
    },
    {
      "maGhe": 47544,
      "tenGhe": "144",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "144",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "123123"
    },
    {
      "maGhe": 47545,
      "tenGhe": "145",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "145",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47546,
      "tenGhe": "146",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "146",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47547,
      "tenGhe": "147",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "147",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47548,
      "tenGhe": "148",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "148",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47549,
      "tenGhe": "149",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "149",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47550,
      "tenGhe": "150",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "150",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47551,
      "tenGhe": "151",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "151",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47552,
      "tenGhe": "152",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "152",
      "giaVe": 90000.0,
      "daDat": false,
      "taiKhoanNguoiDat": null
    },
    {
      "maGhe": 47553,
      "tenGhe": "153",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "153",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47554,
      "tenGhe": "154",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "154",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "bao123"
    },
    {
      "maGhe": 47555,
      "tenGhe": "155",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "155",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "bao123"
    },
    {
      "maGhe": 47556,
      "tenGhe": "156",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "156",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "bao123"
    },
    {
      "maGhe": 47557,
      "tenGhe": "157",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "157",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "bao123"
    },
    {
      "maGhe": 47558,
      "tenGhe": "158",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "158",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "BC42admin"
    },
    {
      "maGhe": 47559,
      "tenGhe": "159",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "159",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "bao123"
    },
    {
      "maGhe": 47560,
      "tenGhe": "160",
      "maRap": 451,
      "loaiGhe": "Thuong",
      "stt": "160",
      "giaVe": 90000.0,
      "daDat": true,
      "taiKhoanNguoiDat": "123123"
    }
  ]

export {listSeat}