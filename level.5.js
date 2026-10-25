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