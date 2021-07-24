import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ children, size = 'm', color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.tag, className, {
				[styles.small]: size === 's',
				[styles.middle]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary'
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</p>
	);
};
