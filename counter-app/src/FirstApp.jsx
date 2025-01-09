import React from 'react'
import PropTypes from 'prop-types'

export const FirstApp = ( { title, subtitle, name }) => {

	return (
		<>
			<div data-testid="test-title">{ title }</div>
			<h2>{subtitle}</h2>
            <p>{ name }</p>
			 
		</>
	)
}

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Cinlo Losada',
    subtitle: 'No hay subtitulo',

}
