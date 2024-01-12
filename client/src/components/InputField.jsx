export default function InputField({ autoComplete, type, name, id, refValue }) {
	return (
		<input
			autoComplete={autoComplete}
			type={type}
			name={name}
			id={id}
			ref={refValue}
		/>
	);
}
