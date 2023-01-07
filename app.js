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

async function exec() {
    console.log(await cluster.set('baz', 'bar'))
}

exec()
   .then(() => process.exit(0))