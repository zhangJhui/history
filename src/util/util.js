import axios from 'axios'
var situo_Url = 'https://demo.arm.autops.xyz/#/media/myworkbench'
var haishi_Url = 'https://network-plus.3xmt.com/network-plus/api'
var chuantou_Url = 'http://cc65d9.natappfree.cc/network-plus/api'

export function getList(id, pageNum = 1, pageSize = 10) {
    return axios.get(situo_Url + '/getlist?id=' + id + '&pageNum=' + pageNum + '&pageSize=' + pageSize)
}
export function getDetail(id, pageNum = 1, pageSize = 10) {
    return axios.get(situo_Url + '/getdetail?id=' + id + '&pageNum=' + pageNum + '&pageSize=' + pageSize)
}
export function getUser(id) {
    return axios.post(haishi_Url + '/user/info', {
        userId: id
    })
}
export function getLoad(id,type) {
    return axios.post(chuantou_Url + '/militaryhistory/upload/log/count',{
        userId:id,
        type
    })
}
export function getintegrl(id) {
    return axios.post(haishi_Url + '/mediaPersonal/points',{
        uid:id
    })
}
export function getrecord(id,type) {
    return axios.post(chuantou_Url + '/militaryhistory/upload/log/list',{
        userId:id,
        type
    })
}