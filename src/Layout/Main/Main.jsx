import {Component} from "react";
import Movies from "../../Components/Movies/Movies";
import Preloader from "../../Components/Preloader/Preloader";
import Search from "../../Components/Search/Search";
import styles from "./Main.module.scss"

const API_KEY = process.env.REACT_APP_API_KEY

export class Main extends Component {
	state = {
		loading: true,
		movies: []
	}

	searchMovies = (s, type = '', page = 1) => {
		this.setState({loading: true}, () => {
			let params = []
			params.push(`s=${s}`)
			if (type !== '')
				params.push(`type=${type}`)
			if (page)
				params.push(`page=${page}`)
			fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&${params.join('&')}`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search, loading: false}))
			.catch(error => {
				console.error(error);
				this.setState({loading: false})
			})
		})
	}

	render() {
		const {loading, movies = []} = this.state;
		const {searchMovies} = this;

		return (
			<main className={styles.Main}>
				<Search handler={searchMovies}/>
				{loading
					? <Preloader/>
					: <Movies movies={movies}/>}
			</main>
		)
	}
}