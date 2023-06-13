const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addClass = document.getElementById("ingredients");
const emptyList = [];
ingredients.forEach((ingredient) => {
  const addTag = document.createElement("li");
  addTag.textContent = ingredient;
  addTag.classList.add("item");
  emptyList.push(addTag);
});
addClass.append(...emptyList);
