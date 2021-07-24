import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({ children, size = 'm', className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.paragraph, className, {
				[styles.small]: size === 's',
				[styles.middle]: size === 'm',
				[styles.large]: size === 'l'
			})}
			{...props}
		>
			{children}
		</p>
	);
};
