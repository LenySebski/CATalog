import heroImage from "../Images/Cats.jpg";

function HeroImage() {
	return (
		<div className='hero__container'>
			<img className='hero__image' src={heroImage} alt='Cats' />
			<div className='hero__content'>
				<h1 className='hero__header'>
					<span className='hero__header--bold'>CAT</span>alog
				</h1>
				<p className='hero__subheader'>
					Reuniting cats with<br></br> their owners
				</p>
			</div>
		</div>
	);
}

export default HeroImage;
