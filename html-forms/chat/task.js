const chatOpen = document.querySelector('.chat-widget');
const today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
chatOpen.onclick = function() {
    chatOpen.classList.add('chat-widget_active');
};

let input = document.getElementById('chat-widget__input');

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        if (input.value.length > 0) {
            const messages = document.querySelector( '.chat-widget__messages' );
            
            messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time"></div>
                <div class="message__text">
                </div>
            </div>
            `;
            let message_text = document.querySelector('.message__text');
            message_text.innerHTML = input.value;
            
            let message_time = document.querySelector('.message__time');
            message_time.innerHTML = time;
        }
    }
})

