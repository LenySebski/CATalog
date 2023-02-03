import { PostForm } from "../components/PostForm";
import videoBg from "../assets/video-bg1.mp4";
import { RandomPhrase } from "../components/RandomPhrase";
export const NewPostPage = () => {
	return (
		<div className='layout__wrapper--columns'>
			<div className='layout__filler--columns'>
				<div className='overlay'></div>
				<video src={videoBg} autoPlay loop muted />
				<div className='overlay__text'>
					<RandomPhrase />
				</div>
			</div>
			<PostForm />
		</div>
	);
};
