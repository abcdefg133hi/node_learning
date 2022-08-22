
/*
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

console.log("Hello People!")
//http
const http = require('http')

const server = http.Server((req, res) => {
    res.write('Welcome to our home page.')
    res.end()
})

server.listen(5000)*/

/*
const http = require('http')

const server = http.createServer((req, res)=>{
if (req.url == '/'){
    res.end('Home Page!')
}

else if (req.url == '/about'){
    res.end('About Page!')
}

else
{
    res.end('Error Page')
}
})

server.listen(1000, ()=>{
    console.log(`Server is listening 1000...`)
})

*/

const fs = require('fs')
const { resolve } = require('path')
const util = require('util')
const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)

/*const getText = (path) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf-8', (err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

getText('./apple.txt')
.then(result => console.log(result))
.catch(((err) => console.log(err)))*/

const start = async() => {
    try{
        const apple = await readFilePromise('./apple.txt', 'utf-8')
        console.log(apple)
        await writeFilePromise('./result.txt', `Awesome!`)
    }

    catch (error){
        console.log(error)
    }
}

start()