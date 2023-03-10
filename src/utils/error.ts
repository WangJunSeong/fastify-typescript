import { copyDone } from "pg-protocol/dist/messages";

export type FastifyErrorResponseType = {
    code:  number,
    message: string
};

export const fastifyErrorWrapper = (code: number, message: string): FastifyErrorResponseType => {
    return {
        code: code,
        message: message
    };
};
