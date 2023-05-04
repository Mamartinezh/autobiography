

import { MeshBasicMaterial, LoopOnce, SRGBColorSpace } from 'three'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useRef, useEffect, Suspense, primitive } from 'react'
import gsap from 'gsap'

export default function Model({id, current, colorPath, 
	modelPath, isChanging, materials = {} }) {

	const isAnimated = useRef(false)
	const isActive = useRef(false)

	const bakedMap= !colorPath?null:useTexture(colorPath, map=>{
		map.flipY = false
		map.colorSpace = SRGBColorSpace
	})

	const model = useGLTF(modelPath)
	const animations = useAnimations(model.animations, model.scene)

	useEffect(()=>{
		const bakedMaterial = new MeshBasicMaterial({map: bakedMap})
		let children = [...model.scene.children]
		children.forEach(child=>{
			child.material = bakedMaterial
			Object.entries(materials).map(([name, material])=>{
				if (child.name.includes(name)) child.material = material
			})
		})
	}, [])

	useEffect(()=>{
		if (current!=id && !isActive.current) return
		if (current!=id) {
			isActive.current = false
			gsap.to(model.scene.scale, {x: 0.001, y: 0.001, z: 0.001, duration: 0.5})
			return
		}
		if (isActive.current) return
		isActive.current = true
		if (!isAnimated.current) {
			isAnimated.current = true
			runAnimations()
		} else {
			isChanging.current = true
			setTimeout(()=>isChanging.current=false, 1000)
			gsap.to(model.scene.scale, {x: 1, y: 1, z: 1, delay: 1, duration: 0.5})
		}

	}, [current])


	const runAnimations = () =>{
		Object.entries(animations.actions).forEach(([name, action])=>{
			if (name.includes('initAnim')) {
                action.setLoop(LoopOnce, 1) 
                action.clampWhenFinished = true  
                action.play()
			}
		})
	}


	return (
		<>
		<Suspense>
			<primitive object={model.scene} />
		</Suspense>
		</>
	)
}