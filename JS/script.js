const adviceNumber = document.querySelector(".advicecount")
const advice = document.querySelector(".address")
const submit = document.querySelector(".button")

const getRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log(data); // Handle the data from the response

    adviceNumber.textContent = data.slip.id

    advice.textContent = data.slip.advice
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

submit.addEventListener('click', getRandomAdvice)

