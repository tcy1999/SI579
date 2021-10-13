const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
messageInput.addEventListener('input', () => {
    if(messageInput.value.length <= MAX_CHARACTERS) {
        messageInput.classList.add('is-valid');
        messageInput.classList.remove('is-invalid');
        messageFeedback.classList.add('valid-feedback');
        messageFeedback.classList.remove('invalid-feedback');
        const n = MAX_CHARACTERS - messageInput.value.length;
        messageFeedback.textContent = n + ' character' + addS(n) + ' left';
    }
    else {
        messageInput.classList.remove('is-valid');
        messageInput.classList.add('is-invalid');
        messageFeedback.classList.remove('valid-feedback');
        messageFeedback.classList.add('invalid-feedback');
        const n = messageInput.value.length - MAX_CHARACTERS;
        messageFeedback.textContent = n + ' character' + addS(n) + ' too long';
    }
});