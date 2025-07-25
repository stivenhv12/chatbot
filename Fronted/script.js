async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const pregunta = input.value.trim();
  
    if (!pregunta) return;
  
    chatBox.innerHTML += `<p class="user"><strong>Tú:</strong> ${pregunta}</p>`;
    input.value = "";
  
    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pregunta })
      });
  
      const data = await response.json();
      chatBox.innerHTML += `<p class="bot"><strong>Bot:</strong> ${data.respuesta}</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
      chatBox.innerHTML += `<p class="bot"><strong>Bot:</strong> Error al conectar con el servidor.</p>`;
    }
  }
  
  