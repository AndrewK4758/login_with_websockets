export default function InputField({
	autoComplete,
	type,
	name,
	id,
	value,
	handleChange,
}) {
	return (
		<input
			autoComplete={autoComplete}
			type={type}
			name={name}
			id={id}
			value={value}
			onChange={(e) => handleChange(e.target.value)}
		/>
	);
}
