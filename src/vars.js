const data = {};
if (process.env.NODE_ENV == 'production') {
    data.baseUrl = "http://manyibar.com"
}
if (process.env.NODE_ENV == 'development') {
    data.baseUrl = "http://192.168.1.14:8082"
}

export default {
    data
}
