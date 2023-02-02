import videoBg from "../assets/video-bg4.mp4";
import HeroImage from "../components/HeroImage";
import { PostList } from "../components/PostList";

export const HomePage = () => {
	return (
		<div className='layout__wrapper--home'>
			<HeroImage />
			<div className='layout__content--home'>
				<PostList />
			</div>
		</div>
	);
};
