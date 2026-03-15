import { getHelpMessage } from '../constants';
import commandRegistry from './registry';

async function helpHandler (ctx) {
    const helpList = commandRegistry.getList()
        .map(cmd => `/${cmd.trigger} - ${cmd.description}`)
        .join('\n');
    const message = getHelpMessage(ctx) + helpList;
    await ctx.reply(message);
}

export default helpHandler;