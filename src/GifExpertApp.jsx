import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    const lowerCaseCategories = categories.map((category) =>
      category.toLowerCase()
    );
    const lowerCaseNewCategory = newCategory.toLowerCase();

    if (lowerCaseCategories.includes(lowerCaseNewCategory)) return;

    // console.log(newCategory);
    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
