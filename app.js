

const path = require('path')
let pathObj = path.parse(__filename);
console.log(path.sep);

const os = require('os');
//info about the current user
const user = os.userInfo()
//console.log(user)

//method returns the system uptime in seconds
//console.log(`The System Uptime is ${os.uptime()} seconds.`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

//console.log(currentOs)
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
//console.log('Total Memor: ' + totalMemory);

//console.log(`Free Memory: ${freeMemory}`)

const fs = require('fs');
const { ReadableStreamDefaultController } = require('stream/web');
//const first = fs.readFileSync('./apple.txt', 'utf-8')
//const second = fs.readFileSync('./banana.txt', 'utf-8')
//fs.writeFileSync('./ab.txt', `Hello! ${first} ${second} `, {flag: 'a'})
//console.log(first)

//Asynchronous:
fs.readFile('./apple.txt', 'utf-8', function (err, result)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(result)
    }
}
)

/*//http
const http = require('http')

const server = http.Server((req, res) => {
    res.write('Welcome to our home page.')
    res.end()
})

server.listen(5000)*/