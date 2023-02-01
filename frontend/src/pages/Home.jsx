import videoBg from "../assets/video-bg4.mp4";

export const HomePage = () => {
	return (
		<div className='layout__wrapper--home'>
			<div className='layout__filler--home'>
				<div className='overlay'></div>
				<video src={videoBg} autoPlay loop muted />
				<div className='overlay__text'>
					<h1>Meow!</h1>
				</div>
			</div>
			<div className='layout__content--home'>Hello</div>
		</div>
	);
};
