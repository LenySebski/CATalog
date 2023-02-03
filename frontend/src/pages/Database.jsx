import { PostList } from "../components/PostList";
import videoBg from "../assets/video-bg4.mp4";
import { RandomPhrase } from "../components/RandomPhrase";
export const DatabasePage = () => {
	return (
		<div className='layout__wrapper--columns'>
			<div className='layout__filler--columns'>
				<div className='overlay'></div>
				<video src={videoBg} autoPlay loop muted />
				<div className='overlay__text'>
					<RandomPhrase />
				</div>
			</div>
			<div className='layout__content--columns'>
				<PostList />
			</div>
		</div>
	);
};
