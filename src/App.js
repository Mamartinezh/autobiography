

import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'
import { useState } from 'react'
import LoadingCube from './components/LoadingCube'
import Blob from './components/Blob'
import { NoToneMapping, LinearEncoding, sRGBEncoding } from 'three'

export default function App() {

	const [ isLoaded, setIsLoaded ] = useState(false)
	const [ showHint, setShowHint ] = useState(false)
	const [ hideText, setHideText ] = useState(false)
	const [ hasClicked, setHasCliked ] = useState(false)
	const [ currentScene, setCurrentScene ] = useState(0)
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
			addEventListener('click', e=>setCurrentScene(prev=>prev===6?prev:prev+1))
			addEventListener('contextmenu', e=>{
				e.preventDefault()
				setCurrentScene(prev=>prev===0?prev:prev-1)
			})
			setHasCliked(true)
		}, onLoadText.length * 0.05 * 1000)
	}

	console.log(currentScene)

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
				<Scene onLoad={showText} current={currentScene} />
			</Canvas>
		</div>
		<LoadingCube isLoaded={isLoaded} />
		{isLoaded && 
			onLoadText.split('-').map((fragment, id)=>
				<div 
					key={id}
					style={{'--n': id, '--t': onLoadText.split('-').length}} 
					className='onload-div'>
				{fragment.split('').map((letter, idx)=>
					<span
						key={idx}
						style={{
							'--id': idx,
							'--total': onLoadText.split('-').slice(0, id).join('').length??0}} 
						className={`onload-text ${hideText?'reverse':''}`}
					>
						{letter}
					</span>
				)}
				</div>
			)
		}
		<div className={`click-hint ${showHint?'active':''}`}>
			Click to continue
		</div>
		<div
			className={`text-content ${hasClicked?'':'hide'}`}>
			{currentScene>0 &&
				<>
				<Blob />
				<p className={`${currentScene===0?'':'hide'}`}>{content[0]}</p>
				<p className={`${currentScene===1?'':'hide'}`}>{content[1]}</p>
				<p className={`${currentScene===2?'':'hide'}`}>{content[2]}</p>
				<p className={`${currentScene===3?'':'hide'}`}>{content[3]}</p>
				<p className={`${currentScene===4?'':'hide'}`}>{content[4]}</p>
				<p className={`${currentScene===5?'':'hide'}`}>{content[5]}</p>
				<p className={`${currentScene===6?'':'hide'}`}>{content[6]}</p>
				</>
			}
		</div>
		</>
	)
}


const content = {
	0: '',
	1: 'I was born on june the 21th in the year 1992 in San Andres. My parents were living there.',
	2: 'Since I was a child, I always love playing the guitar. My first guitar was given to me when I was 8 years old, it was a fender stratocaster.',
	3: 'My favourite sport was alwayd tenis; by the year of 2004 I started playing tenis, and reached a competitive level, which lead me to play in municipal tournaments.',
	4: 'I finished my elementary studies when I was 16 years old, so I decided to continue my studies searching a civil engineering degree. I enrolled the program at the Universidad De Medellin.',
	5: 'Then, I discovered one of my biggest passions, cyling. At first it was my trasportation media, but very quickly became an hobbie that lead to a lot of happiness.',
	6: "Recently, I've been very enthusiastic about programming, althought it was always one of my passions, nevertheless, I'm decided to make it my career."
}