import {Component, createRef} from "react";
import styles from './Search.module.scss'

class Search extends Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.handler = props.handler;
		this.inputRef = createRef();
		this.selectRef = createRef();
		this.searchParams = ''
		this.state = {
			search: 'matrix'
		}
	}

	onInputChange = e => this.setState({[e.target.name]: e.target.value})

	onKeyPress = e => {
		// console.log(`${e.which}\n${e.keyCode}\n${e.code}\n${e.key}`)
		if (e.which === 13) this.handler(this.state.search, this.selectRef.current.value)
	}

	onButtonPress = () => this.handler(this.state.search, this.selectRef.current.value)

	componentDidMount = () => this.handler(this.state.search, this.selectRef.current.value)

	render() {
		const {
			onKeyPress,
			onButtonPress,
			onInputChange,
			inputRef,
			selectRef,
		} = this
		const {search} = this.state

		return (
			<div className={styles.search}>
				<input
					name="search"
					className="validate"
					placeholder='Поиск'
					value={search}
					type="s"
					onChange={onInputChange}
					onKeyPress={onKeyPress}
					ref={inputRef}
				/>
				<select
					type="select"
					ref={selectRef}>
					<option value="">Любой</option>
					<option value="movie">Фильм</option>
					<option value="series">Сериал</option>
					<option value="episode">Эпизод</option>
					<option value="game">Игра</option>
				</select>
				<button onClick={onButtonPress}>Поиск</button>
			</div>
		)
	}
}

export default Search
