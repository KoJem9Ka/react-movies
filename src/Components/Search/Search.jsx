import {Component, createRef, useEffect, useState} from 'react';
import styles from './Search.module.scss'


export default ({handler}) => {
	const [search, setSearch] = useState('matrix')
	const [type, setType] = useState('')

	useEffect(() => {
		handler(search, type)
	}, [])

	const onInputChange = e => setSearch(e.target.value)
	const onSelectChange = e => setType(e.target.value) || handler(search, e.target.value)
	const onKeyPress = e => e.which === 13 && handler(search, type)
	const onButtonClick = () => handler(search, type)

	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Название фильма ...'
				value={search}
				onChange={onInputChange}
				onKeyDown={onKeyPress}
			/>
			<select
				type='select'
				onChange={onSelectChange}
			>
				<option value=''>Любой</option>
				<option value='movie'>Фильм</option>
				<option value='series'>Сериал</option>
				<option value='episode'>Эпизод</option>
				<option value='game'>Игра</option>
			</select>
			<button
				onClick={onButtonClick}>
				Поиск
			</button>
		</div>
	)
}

// export default class Search extends Component {
// 	constructor(props) {
// 		super(props);
// 		// console.log(props)
// 		this.handler = props.handler;
// 		this.inputRef = createRef();
// 		this.selectRef = createRef();
// 		this.searchParams = ''
// 		this.state = {
// 			search: 'matrix'
// 		}
// 	}
//
// 	onInputChange = e => this.setState({[e.target.name]: e.target.value})
// 	onKeyPress = e => {
// 		// console.log(`${e.which}\n${e.keyCode}\n${e.code}\n${e.key}`)
// 		if (e.which === 13) this.handler(this.state.search, this.selectRef.current.value)
// 	}
// 	onButtonPress = () => this.handler(this.state.search, this.selectRef.current.value)
// 	componentDidMount = () => this.handler(this.state.search, this.selectRef.current.value)
//
// 	render() {
// 		const {
// 			onKeyPress,
// 			onButtonPress,
// 			onInputChange,
// 			inputRef,
// 			selectRef,
// 		} = this
// 		const {search} = this.state
//
// 		return (
// 			<div className={styles.search}>
// 				<input
// 					name='search'
// 					className='validate'
// 					placeholder='Поиск'
// 					value={search}
// 					type='text'
// 					onChange={onInputChange}
// 					onKeyDown={onKeyPress}
// 					ref={inputRef}
// 				/>
// 				<select
// 					type='select'
// 					ref={selectRef}
// 				>
// 					<option value=''>Любой</option>
// 					<option value='movie'>Фильм</option>
// 					<option value='series'>Сериал</option>
// 					<option value='episode'>Эпизод</option>
// 					<option value='game'>Игра</option>
// 				</select>
// 				<button
// 					onClick={onButtonPress}>
// 					Поиск
// 				</button>
// 			</div>
// 		)
// 	}
// }