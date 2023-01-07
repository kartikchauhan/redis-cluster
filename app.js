const Redis = require('ioredis')

const cluster = new Redis.Cluster([
    {
        port: 7000,
        host: '127.0.0.1',
    },
    {
        port: 7001,
        host: '127.0.0.1',
    },
    {
        port: 7002,
        host: '127.0.0.1',
    },
]);

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function exec() {
    for (let i = 0; i <100000; i++) {
        await cluster.set(`foo${i}`, i)
        await cluster.set(`offset`, i)
        await sleep()
    }
}

exec()
   .then(() => process.exit(0))