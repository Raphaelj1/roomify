import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';

// Define the custom prop types for our Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className = '',
	children,
	...props
}) => {
	// Construct BEM class names based on props
	const baseClass = 'btn';
	const variantClass = `${baseClass}--${variant}`;
	const sizeClass = `${baseClass}--${size}`;
	const fullWidthClass = fullWidth ? `${baseClass}--full` : '';

	// Combine all classes, filtering out empty strings and trimming spaces
	const combinedClasses = [baseClass, variantClass, sizeClass, fullWidthClass, className]
		.filter(Boolean)
		.join(' ')
		.trim();

	return (
		<button className={combinedClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
