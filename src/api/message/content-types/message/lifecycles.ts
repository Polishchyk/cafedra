
export default {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'polishchyk.a.v@gmail.com',
              subject: 'Повідомлення з контактної форми',
              text: 'Нове повідомлення від ${Name}, Email: ${Email}. Текст повідомлення: ${Question} ', // Replace with a valid field ID
              html: 'Нове повідомлення від ${Name}, Email: ${Email}. Текст повідомлення: ${Question} ', 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}
