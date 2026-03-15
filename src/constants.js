/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 */
function getStartMessage(ctx) {
    const username = ctx.from?.username || 'пользователь';
    return `Доброго времени суток, ${username}!`;
}

function getHelpMessage(ctx) {
    const header = "Список команд:\n";
    return header;
}

export {
    getStartMessage,
    getHelpMessage
}