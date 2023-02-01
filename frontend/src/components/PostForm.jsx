import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const PostForm = () => {
	const { user } = useContext(UserContext);

	const [content, setContent] = useState("");
	const [district, setDistrict] = useState("");
	const [image, setImage] = useState("");
	const [error, setError] = useState(null);
	const [notification, setNotification] = useState(null);
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
		if (data.error) {
			setError(data.error);
			console.error(error);
		} else {
			setNotification("Posted successfuly! Redirecting to home page...");
			setTimeout(() => {
				window.location.reload();
			}, 2500);
		}
	};
	//form to create a post with optional content,district and image
	return (
		<div className='form__wrapper'>
			<h2 className='form__header'>Post</h2>
			<form onSubmit={handleSubmit} className='form__container'>
				<label className='form__label'>Content</label>
				<input
					className='form__input'
					required
					type='text'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<label className='form__label'>District</label>
				<input
					className='form__input'
					type='text'
					value={district}
					onChange={(e) => setDistrict(e.target.value)}
				/>
				<label className='form__label'>Image URL</label>
				<input
					className='form__input'
					type='text'
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<button className='form__btn--primary'>Post</button>
				{notification && (
					<div className='form__notification-container'>
						<span className='form__notification-text'>
							{notification}
						</span>
					</div>
				)}
				{error && (
					<div className='form__error-container'>
						<span className='form__error-text'>{error?.message}</span>
					</div>
				)}
			</form>
		</div>
	);
};
