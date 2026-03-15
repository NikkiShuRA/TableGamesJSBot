import startHandler from './start';
import helpHandler from './help';
import commandRegistry from './registry';

function createCommandObject(trigger, handler, description) {
    return {
        trigger: trigger,
        handler: handler,
        description: description
    }
}

function setupHandlers(bot) {
    commandRegistry.setup(
        bot,
        [
            createCommandObject("start", startHandler, "Команда старта"),
            createCommandObject("help", helpHandler, "Список команд"),
        ]
    );
}

export default setupHandlers;