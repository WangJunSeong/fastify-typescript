import { FastifyInstance, FastifyPluginOptions, FastifyRequest } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { ContentTypeParserDoneFunction } from "fastify/types/content-type-parser";
import humps from "humps";

const FastifyContentTypeParser = async (
    fastify: FastifyInstance,
    ports: FastifyPluginOptions
) => {
    fastify.addContentTypeParser(
        'application/json',
        {
            parseAs: 'string'
        },
        (
            request: FastifyRequest,
            body: string,
            done: ContentTypeParserDoneFunction
        ) => {
            done(null, humps.camelizeKeys(JSON.parse(body)));
        }
    );
}

export default fastifyPlugin(FastifyContentTypeParser);