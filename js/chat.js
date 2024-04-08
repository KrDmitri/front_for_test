const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-form input");
const answer = document.querySelector("#answer");

const API_URL = 'http://127.0.0.1:8080/chatbot/get-answer/';

function onChatSubmit(event) {
    const question = chatInput.value;
    event.preventDefault();
    console.log("typed question: " + question);

    const postData = {
        query: question
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.dir(data);
        answer.innerHTML = data.answer
    })
    .catch(error => {
        console.log("오류 발생: ", error);
    });
}

chatForm.addEventListener("submit", onChatSubmit);