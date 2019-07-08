const chatOpen = document.querySelector('.chat-widget');
const today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
chatOpen.onclick = function() {
    chatOpen.classList.add('chat-widget_active');
};

let input = document.getElementById('chat-widget__input');

const respondList = ['Добрый день! Мы сегодня не работаем!', 'Что Вы себе позволяете?', 'У нас нет времени на Ваш запрос', 'Для связи с оператором увеличте стоимость заказа'];


const messageTemplate = ((text, time, className) => {
    const message = document.createElement('div');
    message.classList = 'message';
    message.classList.add(className);

    const messageTime = document.createElement('div');
    messageTime.classList = 'message__time';
    messageTime.innerText = time;

    const messageText = document.createElement('div');
    messageText.classList = 'message__text';
    messageText.innerText = text;

    message.appendChild(messageTime);
    message.appendChild(messageText);

    return message.outerHTML;
});
input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        if (input.value.length > 0) {
            const message = document.querySelector( '.chat-widget__messages' );
            
            message.insertAdjacentHTML('afterbegin', messageTemplate(input.value, time, 'message_client'));
            input.value = '';

            let outputMessage = respondList[Math.floor(Math.random() * respondList.length)];

            message.insertAdjacentHTML('afterbegin', messageTemplate(outputMessage, time));
        }
    }
});

