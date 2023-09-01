//Testimonial Data

const testimonials = [
  {
    name: "Pedro Hiroshi",
    job: "aluno",
    testimonial:
      "Uma academia para todos os tipos de pessoas, o Melhor atendimento, e boa qualidade dos aparelhos. Na academia treinar se torna a melhor hora do dia ;)",
  },
  {
    name: "Gilherme Henrique",
    job: "Aluno",
    testimonial:
      "Academia muito boa, ambiente bom me sinto até feliz treinando lá, agora que sofreu bastante reformas e mudanças no interior e exterior da academia, recomendo muito!",
  },
  {
    name: "Kauã da Silva Virgilio",
    job: "Aluno",
    testimonial:
      "Academia muito boa, recebeu uma reforma que mudou o jeito que eu olhava pra ela, e ficou muito bonita, e as máquinas são muito boas também, 10/10 para a academia e as pessoas que cuidaram dela",
  },
  {
    name: "maria da silva santos",
    job: "aluna",
    testimonial:
      "Gosto muito dessa academia, me sinto respeitada. aparelhos bons e uma otima professora.",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("nextd");
let prevBtn = document.getElementById("prevd");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;