import { FastifyPluginCallback } from 'fastify';
import * as oracledb from "oracledb";

export const fastifyOracle: FastifyPluginCallback;
export default fastifyOracle;

declare module 'fastify' {
	interface FastifyInstance {
		oracledb: typeof oracledb
	}
}
