
const httplog = function (obj) {
    if (httplog.enable) {
        console.log(JSON.stringify(obj, null, 4))
    }
}

httplog.enable = true

export default httplog
