import { PostForm } from "../components/PostForm";
import videoBg from "../assets/video-bg1.mp4";
export const NewPostPage = () => {
	return (
		<div className='layout__wrapper--columns'>
			<div className='layout__filler--columns'>
				<div className='overlay'></div>
				<video src={videoBg} autoPlay loop muted />
				<div className='overlay__text'>
					<h1>Meow!</h1>
				</div>
			</div>
			<PostForm />
		</div>
	);
};
