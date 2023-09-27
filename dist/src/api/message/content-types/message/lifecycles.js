"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'polishchyk.a.v@gmail.com',
                subject: 'Повідомлення з контактної форми',
                text: 'Нове повідомлення від ${Name}, Email: ${Email}. Текст повідомлення: ${Question} ',
                html: 'Нове повідомлення від ${Name}, Email: ${Email}. Текст повідомлення: ${Question} ',
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
