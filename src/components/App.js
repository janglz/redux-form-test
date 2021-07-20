
import '../styles/App.css';
import store from '../store/store'
import FormContext from './FormContext'
import FormContent from './FormContent'

function App() {
	

	return (
		<FormContext.Provider value={store}>
		<div className="App">
			<div className="form-container">
				<FormContent />
			</div>
		</div>
		</FormContext.Provider>
	);
}

export default App;
