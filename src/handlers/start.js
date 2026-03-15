import { getStartMessage } from '../constants';

async function startHandler (ctx) {
    const message = getStartMessage(ctx);
    await ctx.reply(message);
}

export default startHandler;