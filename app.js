let questionArray = [
    {
        question: "What is the meaning of RAM?",
        answer : "Random Access Memory",
        options : [
            "Random Access Memory",
            "Programmable Logic Unit",
            "Integrated Circuit",
            "Memory"
        ]
    },
    {
        question: "What is the meaning of CPU?",
        answer : "Central Processing Unit",
        options : [
            "Random Access Memory",
            "Programmable Logic Unit",
            "Central Processing Unit",
            "Memory"
        ]
    },
    {
        question: "What is the meaning of IC?",
        answer : "Integrated Circuit",
        options : [
            "Random Access Memory",
            "Programmable Logic Unit",
            "Memory",
            "Integrated Circuit"
        ]
    }
];
let quesNo = 0;
let fetchQues = () => {
    let questionDiv = document.getElementById("question")
    let answersDiv = document.getElementById("answers")
    let qNo = document.getElementById("qNo")
    let createLi = document.createElement("li")
    questionArray.forEach( que => {
        questionDiv.innerHTML = que.question;
        let textNode = document.createTextNode(que.options)
        answersDiv.innerHTML = createLi.appendChild(textNode)
        console.log(que.question)
    })
    qNo.innerHTML = `Q 0${++quesNo}. &nbsp;`;
    // questionDiv.innerText("aa")


}