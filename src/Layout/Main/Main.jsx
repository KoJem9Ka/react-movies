import {Component} from "react";
import Movies from "../../Components/Movies/Movies";
import Preloader from "../../Components/Preloader/Preloader";
import Search from "../../Components/Search/Search";
import styles from "./Main.module.scss"

const API_KEY = process.env.REACT_APP_API_KEY

export class Main extends Component {
	state = {
		loading: true,
		search: '',
		type: '',
		currentPage: 1,
		movies: [],
		totalMoviesCount: 0,
	}

	searchMovies = (s, type = '', page = 1) => {
		this.setState({
			loading: true,
			search: s,
			type: type
		}, () => {
			let params = []
			params.push(`s=${s}`)
			if (type !== '')
				params.push(`type=${type}`)
			if (page)
				params.push(`page=${page}`)
			fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&${params.join('&')}`)
			.then(response => response.json())
			.then(({Search, totalResults}) => this.setState({
				movies: Search,
				totalMoviesCount: parseInt(totalResults),
				currentPage: page,
				loading: false,
			}))
			.catch(error => {
				console.error(error);
				this.setState({
					loading: false
				})
			})
		})
	}

	render() {
		const {
			loading,
			movies = [],
			totalMoviesCount = 0,
			currentPage,
			search,
			type
		} = this.state;
		const {searchMovies} = this;

		const pages = Math.ceil(totalMoviesCount / 10)

		return (
			<main className={styles.Main}>
				<Search handler={searchMovies}/>
				{loading
					? <Preloader/>
					: <Movies
						movies={movies}
						currentPage={currentPage}
						pagesCount={pages}
						nextPageHandler={searchMovies.bind(this, search, type)}
					/>}
			</main>
		)
	}
}