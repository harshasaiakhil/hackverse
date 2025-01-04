// function storeInput() {

//     let inputElement = document.getElementById("userInputQuestion");

//     let inputQuestion = inputElement.value;

//     console.log("Stored value:", inputQuestion);

//   }

const chatSpace = document.querySelector(".chat-space");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");
const API_KEY = 'AIzaSyAQO5-4D3rvyUvyhykzLOZXIxtRbpy1CDY';
const API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;


const userData = {
  message: null,
};

//create message element with dynamic classes and return it
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

//generate bot response using api and based on user message
const generateBotResponse = async (incomingMessageDiv) => {
    const messageElement = incomingMessageDiv.querySelector(".message-text");
    const requestOptions = {
        method:"POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            contents:[{
                "parts":[{"text": userData.message}]
                }]
        })
    }

    try{
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);

        //extract and display bot response text 
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
        messageElement.innerText = apiResponseText;


    }catch(error){
        console.log(error);
        messageElement.innerText=error.message;
        messageElement.style.color="red";
        messageElement.style.fontWeight="bolder";
    }
    finally{
        incomingMessageDiv.classList.remove("thinking");
        chatSpace.scrollTo({top:chatSpace.scrollHeight,behavior:"smooth"});

    }
};

//handle outgoing user message
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = "";

  //create and display user message
  const messageContent = `<div class="message-text"></div>`;

  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  outgoingMessageDiv.querySelector(".message-text").textContent =
    userData.message;
  chatSpace.appendChild(outgoingMessageDiv);
  chatSpace.scrollTo({top:chatSpace.scrollHeight,behavior:"smooth"});

  //simulate bot message with thinking indicator after 
  setTimeout(() => {
    const messageContent = `<div class="message-text">
                <div class="thinking-indicator">
                   <div class="dot">.</div>
                   <div class="dot">.</div>
                   <div class="dot">.</div>
                </div>
            </div>`;

    const incomingMessageDiv = createMessageElement(
      messageContent,
      "bot-message","thinking"
    );
    chatSpace.appendChild(incomingMessageDiv);
    chatSpace.scrollTo({top:chatSpace.scrollHeight,behavior:"smooth"});

    generateBotResponse(incomingMessageDiv); 
  }, 600);
};

//handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    handleOutgoingMessage(e);
  }
});

sendMessageButton.addEventListener("click", (e) => {
  handleOutgoingMessage(e);
});

//   const { GoogleGenerativeAI } = require("@google/generative-ai");

//   const genAI = new GoogleGenerativeAI("AIzaSyAQO5-4D3rvyUvyhykzLOZXIxtRbpy1CDY");
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const prompt = inputQuestion;

//   async function generateContent() {
//       const result = await model.generateContent(prompt);
//       console.log(result.response.text());
//   }

//   generateContent();
