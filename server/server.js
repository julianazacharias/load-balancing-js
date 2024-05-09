const http = require('http');
const roundRobin = require("../algorithms/round_robin")
const leastConnections = require("../algorithms/least_connections")
const serverConfig = require("../config.json").servers

const servers = serverConfig.map(server => ({
    ...server,

    // connections is used in least connections algorithm
    connections: 0
    
}))

//insert the chosen algorithm here:

const algorithm = 'leastConnections'

const server = http.createServer((req, res) => {
    if(algorithm == 'roundRobin') {
        roundRobin(servers, req, res)
    } else if (algorithm === 'leastConnections') {
        leastConnections(servers, req, res)
    }else {
        res.writeHead(500)
        res.end('Load balancing algorithm invalid')
    }
})

server.listen(3000, () => {
    console.log('Load balancer running on port 3000')
})