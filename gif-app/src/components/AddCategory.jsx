import { useState } from 'react'
import PropTypes from 'prop-types'
 

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        
    }

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (inputValue.trim().length <= 1) return

        setCategories(categories => [inputValue, ...categories])
        setInputValue('')
        }

  return (
    <>
        <form onSubmit={onSubmit} action="">
            <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ handleInputChange}
            />
        </form>
    </>
  )
}

AddCategory.propTypes = {
    categories: PropTypes.array,
    setCategories: PropTypes.func
  }
