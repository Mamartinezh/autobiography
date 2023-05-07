
import './style.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import SceneState from './contexts/scene/SceneState'
import ClientState from './contexts/client/ClientState'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<ClientState>
	<SceneState>
	<App />
	</SceneState>
	</ClientState>
)