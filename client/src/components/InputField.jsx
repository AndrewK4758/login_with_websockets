export default function InputField({
	autoComplete,
	type,
	name,
	id,
	value,
	handleInput,
}) {
	return (
		<input
			autoComplete={autoComplete}
			placeholder={value}
			type={type}
			name={name}
			id={id}
			onChange={handleInput}
		/>
	);
}
