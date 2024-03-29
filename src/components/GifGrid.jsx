import PropTypes from 'prop-types';

import { GifCard } from './GifCard';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3> Resultado de: {category} </h3>

			{
				isLoading && (<h2>Cargando...</h2>)
			}

			<div className='card-grid'>
				{
					images.map((image) => (
						<GifCard key={image.id} {...image} />
					))
				}
			</div>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

