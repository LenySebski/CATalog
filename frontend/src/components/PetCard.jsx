import React from "react";
const PetCard = ({ pet }) => {
	const { content, district, status, imagesURL, id } = pet;
	return (
		<div className='card'>
			<div className='card-body'>
				{imagesURL.length > 0
					? imagesURL.map((imageURL) => <img src={imageURL} />)
					: null}
				<h5 className='card-title'>{content}</h5>
				<h6 className='card-subtitle mb-2 text-muted'>{district}</h6>
				<p className='card-text'>{status}</p>
				<a href={`/pet/${id}`} className='card-link'>
					View
				</a>
			</div>
		</div>
	);
};

export default PetCard;
