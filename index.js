'use strict';

const fp = require('fastify-plugin');
const oracledb = require('oracledb');

function fastifyOracle(fastify, options, next) {
	fastify.decorate('oracledb', oracledb);

	next();
}

module.exports = fp(fastifyOracle, {
	fastify: '4.x',
	name: '@miquelfire/fastify-oracle',
});
