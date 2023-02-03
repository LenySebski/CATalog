export const RandomPhrase = () => {
	const phraseList = [
		<div>
			<bold>Lost Cats</bold>
			, <br /> But<bold> Not Lost Hope</bold>
		</div>,
		<div>
			Where Every <bold> Mew </bold>
			<br /> Brings You <bold>Closer </bold>
		</div>,
		<div style={{ textAlign: "center" }}>
			A Database
			<br />
			of
			<bold> Fur</bold>-ever
			<br />
			Homes
		</div>,

		<div style={{ textAlign: "center" }}>
			In Search
			<br /> of
			<br />
			<bold> Lost Whiskers</bold>
		</div>,
		<div style={{ textAlign: "center" }}>
			The
			<br />
			<bold>Meow</bold>
			-ment
			<br /> to Reunite
		</div>,
		<div style={{ textAlign: "center" }}>
			Hope
			<br />
			<bold>Purrs</bold>
			<br />
			Loud
			<br /> in
			<br />
			<bold>CAT</bold>
			alog
		</div>,

		<div>
			<bold>Searching</bold> Hard,
			<br />
			<bold> Meowing</bold> Loud
		</div>,
		<div style={{ textAlign: "center" }}>
			A<br />
			<bold> Lost Cat</bold>
			<br /> is a<br />
			<bold> Temporary State</bold>
		</div>,
	];

	const randomIndex = Math.floor(Math.random() * phraseList.length);
	const phrase = phraseList[randomIndex];

	return <h1 className='random-phrase'>{phrase}</h1>;
};
