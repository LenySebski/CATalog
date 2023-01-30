import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const PostForm = () => {
	const { user, setUser } = useContext(UserContext);

	const [content, setContent] = useState("");
	const [district, setDistrict] = useState("");
	const [image, setImage] = useState("");
	const [error, setError] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const post = { content, district, image };
		const res = await fetch(`${import.meta.env.VITE_URL_BASE}/api/post`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user?.token}`,
			},
			body: JSON.stringify(post),
		});
		const data = await res.json();
		console.log(data);
		if (data.error) {
			setError(data.errors);
		} else {
			context.setUser({ username, token: data.token });
		}
	};
	//form to create a post with optional content,district and image
	return (
		<div className='post'>
			<h2>Post</h2>
			<form onSubmit={handleSubmit}>
				<label>Content:</label>
				<input
					type='text'
					required
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<label>District:</label>
				<input
					type='text'
					required
					value={district}
					onChange={(e) => setDistrict(e.target.value)}
				/>
				<label>Image URL:</label>
				<input
					type='text'
					required
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<button>Post</button>
			</form>
		</div>
	);
};
