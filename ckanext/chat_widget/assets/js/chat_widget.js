  function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  }

  function handleKey(e) {
    if (e.key === 'Enter') sendMessage();
  }

  function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const text = input.value.trim();
    if (!text) return;

    // Append user's message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;

    // Clear input
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'chat-message bot';
      botMsg.textContent = "Echo: " + text; // Replace this with API call if needed
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 500);
  }