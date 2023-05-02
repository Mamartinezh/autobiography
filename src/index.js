
import './style.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import ViewState from './contexts/view/ViewState'
import ClientState from './contexts/client/ClientState'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<ClientState>
	<ViewState>
	<App />
	</ViewState>
	</ClientState>
)