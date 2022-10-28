# @miquelfire/fastify-oracle-shim

A simple library to inject [node-oracledb](https://github.com/oracle/node-oracledb) into [Fastify](https://www.fastify.io/).

## Install

`npm install @miquelfire/fastify-oracle-shim`

## Usage

Once installed, just register it:

```js
// CommonJS
fastify.register(require('@miquelfire/fastify-oracle-shim'));

// JS Module
import oracledb from '@miquelfire/fastify-oracle-shim';
...
fastify.register(oracledb);
```

Because oracledb uses constants for almost all options, I found it was simpler to just expose the API under `fastify.oracledb`, so the result is anywhere in the [oracledb docs](https://oracle.github.io/node-oracledb/doc/api.html) you see `oracledb`, you would write `fastify.oracledb`, so the following code would be valid in a route:

```js
// Called after you register
async function init() {
    try {
        await fastify.oracledb.createPool({/* See docs */});
    }
}

// random function handling a route
async (req, reply) => {
    // ...

    let connection;
    try {
        connection = await oracledb.getConnection();
        // Do stuff with connection
    } catch (err) {
        console.error(err); // However you handle errors in your code
    } finally {
        if (connection) {
            try {
                await connection.close(); // Gives the connection back to the pool
            } catch (err) {
                console.error(err);
            }
        }
    }

    // ...
}
```

## License

[MIT License](http://jsumners.mit-license.org/)

## Versions

Includes and exposes oracledb 5.5.0
