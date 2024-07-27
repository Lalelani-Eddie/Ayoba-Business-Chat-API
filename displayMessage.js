function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function displayMessage(text, type) {
    const conversation = document.querySelector('.conversation');
    const messageBubble = document.createElement('div');
    const timestamp = document.createElement('span');
    const now = new Date();

    messageBubble.classList.add('message-bubble', type);
    messageBubble.textContent = text;

    timestamp.classList.add('timestamp');
    timestamp.textContent = formatTime(now);
    messageBubble.appendChild(timestamp);

    // Check if a date separator is needed
    const lastMessage = conversation.lastElementChild;
    if (!lastMessage || !lastMessage.classList.contains('date-separator') || formatDate(now) !== lastMessage.textContent) {
        const dateSeparator = document.createElement('div');
        dateSeparator.classList.add('date-separator');
        dateSeparator.textContent = formatDate(now);
        conversation.appendChild(dateSeparator);
    }

    conversation.appendChild(messageBubble);
    conversation.scrollTop = conversation.scrollHeight;
}
