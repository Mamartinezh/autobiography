

import { useState, useRef } from 'react'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'
import Blob from './components/Blob'
import TextEffect from './components/TextEffect'
import LoadingCube from './components/LoadingCube'
import { NoToneMapping, LinearEncoding, sRGBEncoding } from 'three'
import { TextContent, views } from './content-settings'

export default function App() {

	const isChanging = useRef(false)
	const [ isLoaded, setIsLoaded ] = useState(false)
	const [ showHint, setShowHint ] = useState(false)
	const [ hideText, setHideText ] = useState(false)
	const [ hasClicked, setHasCliked ] = useState(false)
	const [ currentScene, setCurrentScene ] = useState(0)
	const [ nViews, setNViews ] = useState(Object.keys(views).length)
	const [ onLoadText, setOnLoadText ] = useState('¡Welcome to my autobiography!')

	const showText = () => {
		setIsLoaded(true)
		setTimeout(()=>{
			setShowHint(true)
			addEventListener('click', hideWelcomeText)
		}, onLoadText.length * 0.05 * 1000 + 1000)
	}

	const hideWelcomeText = () => {
		setHideText(true)
		setShowHint(false)
		setCurrentScene(1)
		removeEventListener('click', hideWelcomeText)
		setTimeout(()=>{
			addEventListener('click', e=>changeScene(e, 1))
			addEventListener('contextmenu', e=>changeScene(e, -1))
			setHasCliked(true)
		}, onLoadText.length * 0.05 * 1000)
	}

	const changeScene = (e, dt) => {
		e.preventDefault()
		if (isChanging.current) return
		setCurrentScene(prev=>{
			if (prev + dt >= nViews || prev + dt < 0) return prev
			return prev + dt
		})
	}

	return (
		<>
		<div className={`webgl ${isLoaded?'':'hide'}`}>
			<Canvas
				orthographic
				gl={{
					toneMapping: NoToneMapping,
					outputEncoding: sRGBEncoding
				}}
				camera={{
					zoom: 50,
					near:0.001,
					fal: 1000,
					position: [
					16 * Math.sin(135 * Math.PI / 180),
					2 + 0.5,
					16 * Math.cos(135 * Math.PI / 180),
					]
				}}
			>	
				<Scene 
					onLoad={showText} 
					current={currentScene} 
					isChanging={isChanging} />
			</Canvas>
		</div>
		<LoadingCube isLoaded={isLoaded} />
		{isLoaded && 
			<TextEffect text={onLoadText} hide={hideText}/>
		}
		<div className={`click-hint ${showHint?'active':''}`}>
			Click to continue
		</div>
		<div
			className={`text-content ${hasClicked?'':'hide'}`}>
			{currentScene>0 &&
				<>
				<Blob />
				<Blob />
				{Object.entries(TextContent).map(([key, text])=>
					<p key={key} className={`${currentScene==key?'':'hide'}`}>{text}</p>
				)}
				</>
			}
		</div>
		</>
	)
}

