import styles from './Movie.module.scss'

export default function Movie(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster
	} = props
	const poster = Poster !== 'N/A' ? Poster : `https://via.placeholder.com/300x451?text=${title}`

	return (
		<div className={styles.card}>
			<img src={poster} width="300" height="451" alt="poster"/>
			<p>{title}</p>
			<p>{year}<span>{type}</span></p>
		</div>
	)
}