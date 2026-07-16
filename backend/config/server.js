import http from 'http'
const server = http.createServer()

server.listen(process.env.PORT || 8080, () => {
    console.log(`Server Running on `, process.env.PORT)
})