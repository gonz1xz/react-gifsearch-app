import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {

		if (categories.includes(newCategory)) return console.log("Ya existe");
		setCategories([newCategory, ...categories]);
	}


	return (
		<>
			<h1>Search Gifs App</h1>

			<AddCategory
				onNewCategory={onAddCategory}
			/>

			{
				categories.map((category) => (
					<GifGrid key={category} category={category} />
				))
			}

		</>
	)
}