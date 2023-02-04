import { FastifyInstance, FastifyServerOptions } from "fastify";
import RootRouter from "./root";

const fastifyRouter = async (
    fastify: FastifyInstance,
    opts: FastifyServerOptions
) => {
    // Index
    fastify.register(RootRouter, {
        prefix: "/"
    });

    // API V1

}

export default fastifyRouter;