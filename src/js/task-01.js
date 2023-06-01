const listWithId = document.querySelector("#categories");
console.log(listWithId);
const listWithItem = listWithId.querySelectorAll(".item");
console.log(listWithItem);
const lengthItem = listWithItem.length;
console.log("Number of categories: " + lengthItem);

listWithItem.forEach((item) => {
  const nameCategory = item.querySelector("h2").textContent;
  const elementCategory = item.querySelectorAll("li");
  const elementCategoryLength = elementCategory.length;

  console.log("Category: " + nameCategory);
  console.log("Elements: " + elementCategoryLength);
});
