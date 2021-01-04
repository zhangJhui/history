import axios from 'axios'
var situo_Url = 'https://pub1.arm.autops.xyz'
var haishi_Url = 'https://network-plus.3xmt.com/network-plus/api'
var chuantou_Url = 'http://xzg2eq.natappfree.cc/network-plus/api'
var chuantou2_Url = 'http://txx5yk.natappfree.cc/network-plus/api'

export function getList(id, pageNum = 1, pageSize = 10) {
    return axios.get(situo_Url + '/getlist?id=' + id + '&pageNum=' + pageNum + '&pageSize=' + pageSize)
}
export function getDetail(id) {
    return axios.get(situo_Url + '/getdetail?id=' + id)
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
    return axios.post(chuantou2_Url + '/mediaPersonal/points',{
        uid:id
    })
}
export function getpoints(id) {
    return axios.post(chuantou2_Url + '/pointDetail/personDetail',{
        uid:id
    })
}
export function getrecord(id,type) {
    return axios.post(chuantou_Url + '/militaryhistory/upload/log/list',{
        userId:id,
        type
    })
}