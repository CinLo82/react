import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Naruto'])

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>GifApp</h1>
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={ onAddCategory }
      
            />

            <ol>
                {
                    categories.map( (category) => (
                            <div  key={category}>
                                <li>{category}</li>
                            </div>
                        )
                    )
                }
            </ol>
        </>
    )
}
