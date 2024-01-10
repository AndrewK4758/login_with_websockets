/* eslint-disable react/prop-types */
export default function Button({ className, type, name, onclick }) {
	return (
		<button className={className} type={type} onClick={onclick}>
			{name}
		</button>
	);
}
