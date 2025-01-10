export default () => {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const chatSend = document.getElementById("chatSend");
    let canchat = true;
    const chatHistory = [];

    function addMessage(content, isMyMessage = false) {
        const message = document.createElement("div");
        message.className = "numbers_chat_message" + (isMyMessage ? " numbers_chat_message_my" : "");

        const messageContent = document.createElement("div");
        messageContent.className = "numbers_chat_message_content";
        messageContent.textContent = content;
        if (!isMyMessage) {
            const messageDecor = document.createElement("div");
            messageDecor.className = "numbers_chat_message_img";
            messageDecor.innerHTML = `<img src='/img/logo.png' alt='decor'>`;
            message.appendChild(messageDecor);
        }

        message.appendChild(messageContent);

        chatMessages.appendChild(message);
        chatHistory.push({ my: isMyMessage, text: content })
    }

    const addLoader = () => {
        const loader = document.createElement("div");
        loader.className = "numbers_chat_message_loader";
        loader.id = "chatLoader";
        loader.innerHTML = "<img src='/img/logo.png' alt='decor'>";
        chatMessages.appendChild(loader)
    }
    const deleteLoader = () => {
        const loader = document.getElementById('chatLoader');
        if (loader) {
            loader.remove();
        }
    }


    const sendMessage = async () => {
        if (canchat) {
            canchat = false;
            const message = chatInput.value.trim();
            if (message) {
                addMessage(message, true);
                chatInput.value = "";
                addLoader()

                const url = 'https://api.buko.meme/chat'; // Замените на ваш URL

                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json', // Указываем, что отправляем JSON
                        },
                        body: JSON.stringify({ messages: chatHistory }), // Передаем параметры в теле запроса
                    });

                    if (!response.ok) {
                        throw new Error(`Err: ${response.status}`);
                    }

                    const data = await response.json(); // Получаем ответ в формате JSON
                    deleteLoader()
                    addMessage(data.message);
                    canchat = true;

                } catch (error) {
                    console.error('Err during send:', error);
                }
            }
        }
    }

    chatSend.addEventListener("click", sendMessage);

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            chatSend.click();
        }
    });
}