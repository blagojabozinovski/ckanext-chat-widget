function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

if (window !== window.top) {
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
        chatButton.style.display = 'none';
    }
}