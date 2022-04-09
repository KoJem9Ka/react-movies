import Movie from "./Movie";
import styles from './Movies.module.scss'

export default function Movies(props) {
	const {movies} = props

	return (
		<div className={styles.movies}>
			{movies.length
				? movies.map(movie => <Movie key={movie.imdbID} {...movie}/>
				)
				: <h4>Ничего не найдено...</h4>}
		</div>
	)
}