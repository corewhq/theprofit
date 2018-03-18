const data = {};
if (process.env.NODE_ENV == 'production') {
    data.baseUrl = "http://manyibar.com"
}
if (process.env.NODE_ENV == 'development') {
    data.baseUrl = "http://localhost:8082"
}

export default {
    data
}
