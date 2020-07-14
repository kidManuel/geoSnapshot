const suggestions = [
  'Mountains',
  'Lakes',
  'Forests',
  'People',
  'Food',
  'Monument',
  'Art',
  'Museum',
  'Graffitti',
  'Music',
  'Dance',
  'Concert',
  'Games',
  'Nights',
  'Portrait',
  'Beaches',
  'Casino',
  'Park',
  'Animals',
  'Cats',
  'Dogs',
  'Cemetery',
  'Historic',
  'Attraction',
  'Sights',
  'Woods',
  'Store',
  'Shopping',
  'Restaurant',
  'University',
  'Hike',
  'Zoo',
  'Castle'
];

const shuffleArray = (array) => {
  // stolen from stackoverflow...
  const newArray = [...array];
  let currentIndex = newArray.length;
  let temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }
  return newArray;
};

const pickRandomSuggestions = (ammount = 5) => {
  return shuffleArray(suggestions).slice(0, ammount + 1);
};

export { pickRandomSuggestions };