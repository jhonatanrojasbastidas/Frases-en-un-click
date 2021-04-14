(function(){
    const quotes = [
        {
         quote:"Mientras el enemigo siga en pie yo seguiré luchando.",


         author: "Vegeta"

        },
        {
            quote:"La vida nos tira a todos alguna vez. Cada cual decide si quedarse en el suelo, o levantarte y enfrentarla.",
   
   
            author: "Goku"
   
        },
        {
            quote:"Quienes rompen las reglas son basura pero quienes abandonan a sus amigos son peor que la basura. ",
   
   
            author: "Hatake Kakashi"
   
        },   
        {
            quote:"Un héroe no es el que nunca cae. Él es quien se levanta, una y otra vez, sin perder nunca de vista sus sueños.",
   
   
            author: "Rock Lee"
   
        },
        {
            quote:"Había una mujer, fue la primera vez que encontré a alguien que estuviera verdaderamente vivo. Al menos, eso fue lo que pensé. Ella era... la parte de mí que perdí en algún lugar del camino, la parte que faltaba, la que deseaba.",
   
   
            author: "Spike"
   
        },
        {
            quote:"Puedes morir en cualquier momento, pero vivir requiere de valentía. ",
   
   
            author: "Kenshin Himura"
   
        },
        {
            quote:"Es fácil perder la calma, más difícil es mantenerla.",
   
   
            author: "Yoh Asakura"
   
        },
        {
            quote:"Se que no puedo quererte de la forma en que tu quieres, pero yo te voy a querer de la mejor forma que sé.",
   
   
            author: "Inuyasha"
   
        },
        {
            quote:"No se necesitan razones particulares para ayudar a alguien.",
   
   
            author: "Aioria de Leo"
   
        },
    ];

    const btn = document.querySelector("button");
    const text = document.querySelector("#quote");
    const author = document.querySelector(".author");
    btn.addEventListener("click", function(){
        let index = Math.floor(Math.random()*quotes.length);
        text.textContent = quotes[index].quote;
        author.textContent = quotes[index].author;
    })
})();









