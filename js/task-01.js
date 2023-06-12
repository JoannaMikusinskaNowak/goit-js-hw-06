const listWithId = document.querySelector("#categories");
const listWithItem = listWithId.querySelectorAll(".item");
const lengthItem = listWithItem.length;

listWithItem.forEach((item) => {
  const nameCategory = item.querySelector("h2").textContent;
  const elementCategory = item.querySelectorAll("li");
  const elementCategoryLength = elementCategory.length;

  console.log("Category: " + nameCategory);
  console.log("Elements: " + elementCategoryLength);
});
