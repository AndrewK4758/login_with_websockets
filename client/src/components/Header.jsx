export default function Header({ className, title, message, additional }) {
	return (
		<header className={className}>
			<h1>{title}</h1>
			<h2>{message}</h2>
			<h3>{additional}</h3>
		</header>
	);
}
