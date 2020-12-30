import axios from 'axios'
var Url = 'https://publish.node2.autops.xyz'
export function getList(id,pageNum=1,pageSize=10){
    return axios.get(Url+'/getlist?id='+id+'&pageNum='+pageNum+'&pageSize='+pageSize)
}
export function getDetail(id,pageNum=1,pageSize=10){
    return axios.get('https://publish.node2.autops.xyz/getdetail?id='+id+'&pageNum='+pageNum+'&pageSize='+pageSize)
}