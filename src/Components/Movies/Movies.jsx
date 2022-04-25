import Movie from './Movie';
import styles from './Movies.module.scss'
import {Component} from 'react';

export default class Movies extends Component {
	constructor(props) {
		super(props);
		this.nextPageHandler = props.nextPageHandler
	}

	render() {
		const {movies, currentPage, pagesCount} = this.props

		let pages = []
		for (let i = 1; i <= pagesCount; ++i)
			pages.push(
				<li
					key={i}
					className={i === currentPage ? styles.current : null}
					onClick={i !== currentPage ? () => this.nextPageHandler(i) : null}
				>{i}
				</li>
			)

		return (
			<>
				<ul className={styles.pages}>{pages}</ul>

				<div className={styles.movies}>
					{movies.length
						? movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)
						: <h4>Ничего не найдено...</h4>}
				</div>

				<ul className={styles.pages}>{pages}</ul>
			</>
		)
	}
}