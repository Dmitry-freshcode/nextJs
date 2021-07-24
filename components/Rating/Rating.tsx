import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < currentRating
					})}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(e, i)}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i + 1);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span
					key={i}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => constructRating(rating)}
					onClick={() => {
						if (isEditable && setRating) {
							setRating(i + 1);
						}
					}}
				>
					{r}
				</span>
			))}
		</div>
	);
};
