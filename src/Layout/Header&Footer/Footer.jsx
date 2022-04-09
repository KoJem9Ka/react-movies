import './Footer.module.scss'

export function Footer() {
	return (
		<footer>
			<p>© {new Date().getFullYear()} Copyright Text</p>
			<a href="#">Repo</a>
		</footer>
	)
}