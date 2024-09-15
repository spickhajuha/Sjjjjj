
const wheel = document.querySelector('.wheel');
const pointer = document.querySelector('.pointer');
const sectionsContainer = document.querySelector('.sections');
const spinButton = document.querySelector('#spin-button');
let currentSection = 0;
let score = 0;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.sections.forEach(section => {
      const sectionElement = document.createElement('div');
      sectionElement.classList.add('section');
      sectionElement.textContent = section.text;
      sectionsContainer.appendChild(sectionElement);
    });
  });

spinButton.addEventListener('click', () => {
  const randomSection = Math.floor(Math.random() * 6);
  wheel.style.transform = `rotate(${randomSection * 60}deg)`;
  pointer.style.transform = `rotate(${randomSection * 60}deg)`;
  currentSection = randomSection;
  score++;
  document.querySelector('#score').innerHTML = `Score: ${score}`;
  setTimeout(() => {
    wheel.style.transition = 'transform 2s ease-in-out';
    wheel.style.transform = `rotate(0deg)`;
    pointer.style.transform = `rotate(0deg)`;
  }, 2000);
});