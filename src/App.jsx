import {Component} from "react";
import {Header} from "./Layout/Header&Footer/Header";
import {Footer} from "./Layout/Header&Footer/Footer";
import {Main} from "./Layout/Main/Main";

//54f8cba0

class App extends Component {
	render() {
		return (
			<>
				<Header/>
				<Main/>
				<Footer/>
			</>
		);
	}
}

export default App;
