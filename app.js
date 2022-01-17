const colors = ["green", "red", "rgba(133, 122, 200)", "#f1f5025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function()
   {  // get random number between between 0 and 3
      const randomNumber = getRandomNumber();
      console.log(randomNumber);

      document.body.style.backgroundColor = colors[randomNumber];
      color.textContent = colors[randomNumber];
      console.log(document.body);
   });

   function getRandomNumber()
   {
      // return Math.random()*colors.length;
      return Math.floor(Math.random()*colors.length);   // this code line rounds off to the closest ineger value instad of displaying a float value
   }