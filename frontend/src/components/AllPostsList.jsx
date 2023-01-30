import PetCard from "./PetCard";
import { useEffect, useState } from "react";

const AllPostsList = () => {
	let [pets, setPets] = useState([]);
	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL_BASE}/posts`)
			.then((res) => res.json())
			.then((data) => setPets(data));
	}, []);

	return (
		<div className='card-list'>
			{pets.length > 0 ? (
				pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
			) : (
				<p>We couldn't fetch the pets</p>
			)}
		</div>
	);
};

export default AllPostsList;
