

import { createContext, useContext } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

import { models } from '../../content-settings'


let Models = models

Object.values(Models).forEach(model=>{
	useGLTF.preload(model.modelPath)
	useTexture.preload(model.colorPath)
	if (model.shadowObjectPath) {
		useGLTF.preload(model.shadowObjectPath)
		useTexture.preload(model.objectAlphaPath)		
	}
	if (model.alphaPath) {
		useTexture.preload(model.alphaPath)
	}
})


const SceneContext = createContext()

const useSceneContext = () => {
	return useContext(SceneContext)
}

export default function SceneState({children}) {

	const canChange = useRef(false)
	const isChanging = useRef(false)
	const [ current, setCurrent ] = useState(0)
	const [ nViews, setNViews ] = useState(Object.keys(models).length + 1)

	useEffect(()=>{
		addEventListener('click', e=>changeScene(e, 1))
		addEventListener('contextmenu', e=>changeScene(e, -1))
	}, [])

	const changeScene = (e, dt) => {
		e.preventDefault()
		if (isChanging.current||!canChange.current) return
		setCurrent(prev=>{
			if (prev + dt >= nViews || prev + dt < 0) return prev
			isChanging.current = true
			setTimeout(()=>isChanging.current=false, 1000)
			return prev + dt
		})
	}

	return (	
		<SceneContext.Provider value={{
			current,
			canChange,
			setCurrent,
			isChanging,
		}}
		>
			{children}
		</ SceneContext.Provider>
	)
}



export {
	SceneContext,
	useSceneContext
}