import React from 'react'
import Category from './Category'
export default function CategoryList(props) {
    return (
        <ul className="category-list">
         {props.categories.map((category) => (
            <Category
            key = {category.id}
            catPhoto ={category.catPhoto}
            catName = {category.catName}
            >
            </Category>
        ))}
        </ul>
    )
}