import { animals } from './animals';
import './App.css';

const title = "";

const background = (
  <img className="background" alt="ocean" src="../files/images/ocean.jpg" />
);

const images = [];

for (let animal in animals){
  images.push(
    <img key = {animal} 
    className = "animal" 
    alt = {animal}
    src = {animals[animal].image} 
    ariaLabel = {animal} 
    role = "button"
    onClick = {displayFact}
    />
  )
}

const animalFacts = (
  <div>
    <h1>
      {title === "" ? 'Click an animal for a fun fact' : title}
    </h1>
    {background}
    <p id='fact'></p>
    <div className="animals">
      {images}
    </div>
  </div>
);

function displayFact (e) {
 const selectedAnimal = e.target.alt;
 const animalInfo = animals[selectedAnimal];
 const randomFact = Math.floor(Math.random() * animalInfo.facts.length);
 const funFact = animalInfo.facts(randomFact);
document.getElementById('fact').innerHTML = funFact;
}

export default animalFacts;
