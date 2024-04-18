import {create} from 'apisauce';

const baseURL ='http://apis.data.go.kr/B551011/GoCamping'
//'http://13.209.27.220:8080'


export const API = create({
    baseURL,
    withCredentials: true,
})