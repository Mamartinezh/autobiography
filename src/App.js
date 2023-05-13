

import { useState, useRef } from 'react'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'
import Blob from './components/Blob'
import TextEffect from './components/TextEffect'
import LoadingCube from './components/LoadingCube'
import { NoToneMapping, LinearEncoding, sRGBEncoding } from 'three'
import { TextContent, views } from './content-settings'
import { useSceneContext } from './contexts/scene/SceneState'

export default function App() {

	const [ isLoaded, setIsLoaded ] = useState(false)
	const [ showHint, setShowHint ] = useState(false)
	const [ hideText, setHideText ] = useState(false)
	const { canChange, current, setCurrent, nViews } = useSceneContext()
	const [ onLoadText, setOnLoadText ] = useState("¡Welcome to my autobiography!-I'm Mateo Martinez Herrera-Creative Developer")

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
		setCurrent(1)
		removeEventListener('click', hideWelcomeText)
		setTimeout(()=>{
			canChange.current = true
		}, onLoadText.length * 0.05 * 1000)
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
				<Scene onLoad={showText} />
			</Canvas>
		</div>
		<LoadingCube isLoaded={isLoaded} />
		{isLoaded && 
			<TextEffect text={onLoadText} hide={hideText&&current>0}/>
		}
		{isLoaded&&
			<TextEffect text='The End' hide={current<nViews-1}/>
		}
		<div className={`click-hint ${showHint?'active':''}`}>
			<p>forwards<br/>left click/touch</p>
			<p>backwards<br/>right click/2s touch</p>
			<i className="fa-solid fa-computer-mouse"></i>
		</div>
		<div
			className={`text-content ${(current>0&&current<nViews-1)?'':'hide'}`}>
				<>
				<Blob />
				<Blob />
				{Object.entries(TextContent).map(([key, text])=>
					<p key={key} className={`${current==key?'':'hide'}`}>{text}</p>
				)}
				</>
		</div>
		</>
	)
}

