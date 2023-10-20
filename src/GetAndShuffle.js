import { listQuest } from "./Question";

export const getRandomQuests = (n) => {
  const shuffled = listQuest.slice(); // Create a copy of the original listQuest

  let i = listQuest.length;
  let temp, randomIndex;

  while (i > 0) {
    randomIndex = Math.floor(Math.random() * i); // Generate a random index
    i--;

    // Swap elements between current index and random index
    temp = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }

  return shuffled.slice(0, n); // Return the first n items from the shuffled listQuest
};
