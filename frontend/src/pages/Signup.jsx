import { SignupForm } from "../components/SignupForm";
import videoBg from "../assets/video-bg2.mp4";
export const SignupPage = () => {
	return (
		<div className='layout__wrapper--columns'>
			<div className='layout__filler--columns'>
				<div className='overlay'></div>
				<video src={videoBg} autoPlay loop muted />
				<div className='overlay__text'>
					<h1>Meow!</h1>
				</div>
			</div>
			<SignupForm />
		</div>
	);
};
