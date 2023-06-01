const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addClass = document.getElementById("ingredients");
console.log(addClass);
ingredients.forEach((ingredient) => {
  const addTag = document.createElement("li");
  addTag.textContent = ingredient;
  addTag.classList.add("item");
  addClass.appendChild(addTag);

  console.log(addTag);
});
