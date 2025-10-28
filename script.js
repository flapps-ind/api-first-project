let newFact = '';
async function fact() { // async tells a function that this is dealing with promises (it is a container which is waiting for value to eventually to enter)
  try {
    const res = await fetch("https://uselessfacts.jsph.pl/random.json");
    const data = await res.json();
    newFact = data.text;
    console.log(data.text);
  }
  catch(err) {
    console.error("Error:", err);
  }

  const diplay = document.getElementById('factBar');
  diplay.innerHTML = newFact;
  
}