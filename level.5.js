setTimeout(() => {
    const message = document.createElement("div");

    message.innerHTML = `
        <div class="message-content">
            اللهم صلِّ وسلم على نبينا محمد ﷺ ❤️
            <button id="closeMessage">متابعة الامتحان</button>
        </div>
    `;

    Object.assign(message.style, {
        position: "fixed",
        inset: "0",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0",
        transition: "opacity 0.8s ease",
        zIndex: "99999"
    });

    const style = document.createElement("style");
    style.textContent = `
        .message-content {
            background: #222;
            color: #f7df1e;
            padding: 30px;
            border-radius: 16px;
            text-align: center;
            font-family: Cairo, sans-serif;
            box-shadow: 0 10px 40px rgba(0,0,0,.3);
            transform: translateY(15px);
            transition: transform .8s ease;
        }

        #closeMessage {
            display: block;
            margin: 20px auto 0;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            background: #f7df1e;
            color: #222;
            cursor: pointer;
            font-weight: bold;
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(message);

    requestAnimationFrame(() => {
        message.style.opacity = "1";
        message.querySelector(".message-content").style.transform =
            "translateY(0)";
    });

    document.getElementById("closeMessage").addEventListener("click", () => {
        message.style.opacity = "0";

        setTimeout(() => {
            message.remove();
            style.remove();
        }, 800);
    });
}, 10000);

let submit = document.getElementById("submit");
let result = document.getElementById("result");


submit.onclick = function(){

    let score = 0;


    for(let i = 1; i <= 15; i++){

        let answers = document.querySelectorAll(
            `input[name="q${i}"]`
        );


        let selected = document.querySelector(
            `input[name="q${i}"]:checked`
        );


        answers.forEach(input => {

            let label = input.parentElement;


            if(input.value === "correct"){
                label.classList.add("correct-answer");
            }


            if(selected && input.checked && input.value === "wrong"){
                label.classList.add("wrong-answer");
            }


            input.disabled = true;

        });



        if(selected && selected.value === "correct"){
            score++;
        }

    }


    let percentage = (score / 15) * 100;
result.style.display = "block";


let message;


if(score === 15){
    message = "🔥 ممتاز أنت مهندس بارع";
}

else if(score >= 7){
    message = "👏 أداء جيد حافظ على هذا";
}

else{
    message = "💪 حاول من جديد";
}


result.innerHTML = `

<h2>🎯 Quiz Result</h2>

<p>
Score : ${score} / 15
</p>

<p>
Accuracy : ${percentage}%
</p>

<p>
${message}
</p>

`;


    submit.disabled = true;
    submit.style.opacity = "0.5";

};
