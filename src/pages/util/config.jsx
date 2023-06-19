import axios from "axios";
import { customNavigate } from "../..";
//tập tin lưu các dữ liệu hằng số hoặc các utility function
export const USER_LOGIN = 'userLogin';
export const TOKEN = 'accessToken';
export const DOMAIN = 'https://shop.cyberlearn.vn';



export const configClient = {
    setStoreJson: (name, data) => {
        let sData = JSON.stringify(data);
        localStorage.setItem(name, sData);
    },
    getStoreJson: (name) => {
        if (localStorage.getItem(name)) {
            let sData = localStorage.getItem(name);
            let data = JSON.parse(sData);
            return data;
        }
        return undefined;
    },
    setStore: (name, data) => {
        localStorage.setItem(name, data);
    },
    getStore: (name) => {
        if (localStorage.getItem(name)) {
            return localStorage.getItem(name);
        }
        return undefined;
    }
}

export const { setStoreJson, getStoreJson, setStore, getStore } = configClient;


//tạo bản sao của axios
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000 // thời gian chờ
});



//cấu hình interceptor cấu hình cho request (api gửi đi )
http.interceptors.request.use((req) => {
    // req.data ={...data,'adc':'123'}
    if (getStoreJson(USER_LOGIN)) {
        req.headers = {
            ...req.headers,
            Authorization: `Bearer ${getStoreJson(USER_LOGIN)?.accessToken}`,
        }
    }
    return req;
}, err => {
    return Promise.reject(err)
})

// cấu hình cho interceptor cho reponse (kết quả trả về)
http.interceptors.response.use((res) => {
    res.data.result ='abc';
    console.log(res.data)
    //tất cả kết quả trả về http đều chạy qua hàm này
    return res;

}, err => {
    // xử lí lỗi
    if (err.response?.status === 401) {

        //nếu chưa đủ quyền thì đá về login
        customNavigate.push('/login');
        return;
    };
    if (err.response?.status === 400 || err.response?.status ===404) {
        customNavigate.push('/');
        return;
    }
    return Promise.reject(err);
});

/*

request: là data gửi lên server
response: là data trả về từ server
status thông dụng
200: OK data thao tác trên server thành côg và trả về client
201: dữ liệu đã được khởi tạo ở phía server
400: bad request (dũ liệu gửi đi ko hợp lệ)
404: not found (không tìm thấy data => do sai link api)
500: error in server (lỗi xảy ra tại server nguyên nhân có thể do 
 frontend gửi sai đingj dạng
 or backend xử lí logic bị lỗi )
401:  unauthorize ( không có quyền truy cập vào api - có thể do
  thiếu token  hoặc token hết hạn)
403:forbiden (chưa đủ quyền truy cập vào api đó)
*/

