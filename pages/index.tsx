import { Button, Htag, P, Rating, Tag } from '../components';
import { useState } from 'react';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(2);
	return (
		<div>
			<Htag tag="h1">GGGGGfffff</Htag>
			<Htag tag="h2">gggg</Htag>
			<Htag tag="h3">yyyy</Htag>
			<Button appearance="primary" arrow="right">
				FFgg
			</Button>
			<Button appearance="ghost" arrow="down">
				FFgg
			</Button>
			<P size="l">Large</P>
			<P>middle</P>
			<P size="s">small</P>
			<Tag color="red" size="s">
				sdfsdf
			</Tag>
			<Tag color="ghost">sdfsdf</Tag>
			<Tag color="green">sdfsdf</Tag>
			<Tag color="primary" size="s" href="http://google.com">
				sdfsdf
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</div>
	);
}
