

import { useFrame } from '@react-three/fiber'
import { ConvexHull } from 'three/addons/math/ConvexHull.js'
import { MeshBasicMaterial, LoopOnce, SRGBColorSpace } from 'three'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useRef, useEffect, Suspense, primitive, useState } from 'react'
import gsap from 'gsap'

export default function Model(props) {

	const shadows = useRef([])
	const children = useRef([])
	const group = useRef()
	const hull = useRef(new ConvexHull())
	const [ show, setShow ] = useState(false)

	const bakedMap = !props.colorPath?null:useTexture(props.colorPath, map=>{
		map.flipY = false
		map.colorSpace = SRGBColorSpace
	})
	const alphaMap = !props.alphaPath?null:useTexture(props.alphaPath, map=>{
		map.flipY = false
		map.colorSpace = SRGBColorSpace
	})
	const objectAlphaMap = !props.objectAlphaPath?null:useTexture(props.objectAlphaPath, map=>{
		map.flipY = false
		map.colorSpace = SRGBColorSpace
	})

	const model = useGLTF(props.modelPath)
	const animations = useAnimations(model.animations, model.scene)
	const shadow = props.shadowObjectPath?useGLTF(props.shadowObjectPath):null

	useEffect(()=>{

		const bakedMaterial = new MeshBasicMaterial({map: bakedMap})
		const alphaMaterial = new MeshBasicMaterial({
			alphaMap, 
			color: '#000',
			depthWrite: false,
			transparent: true,
		})
		const objectAlphaMaterial = new MeshBasicMaterial({
			color: '#000', 
			transparent: true, 
			depthWrite: false,
			alphaMap: objectAlphaMap, 
		})

		if (objectAlphaMap) shadow.scene.children[0].material = objectAlphaMaterial

		children.current = [...model.scene.children]
		children.current.forEach((child, id)=>{
			child.material = bakedMaterial
			Object.entries(props.materials).map(([name, material])=>{
				if (child.name.includes(name)) child.material = material
			})
			if (alphaMap&&child.name.includes('Shadow'))  {
				child.material = alphaMaterial}
			if (!shadow) return
			shadows.current.push(shadow.scene.children[0].clone())
			shadows.current[id].position.x = child.position.x
			shadows.current[id].position.z = child.position.z
			shadows.current[id].position.y = (0.074288 + id * 0.0001)
			shadows.current[id].position.y0 = child.position.y
			shadows.current[id].scale.set(0, 0, 0)
		})

		if (!shadow) return
		hull.current.setFromObject(props.hull)

	}, [])

	useEffect(()=>{
		if (props.isActive) {
			setShow(true)
			if (group.current.scale.x===0.001) {
				gsap.to(group.current.scale, {x: 1, y: 1, z: 1, delay: 1, duration: 0.5})
			} else setTimeout(e=>runAnimations(), 500)
			return ()=>{
				gsap.to(group.current.scale, {x: 0.001, y: 0.001, z: 0.001, duration: 0.5,
					onComplete: e=>setShow(false)})
			}
		}

	}, [props.isActive])


	const runAnimations = () =>{
		let maxDur = 0
		Object.entries(animations.actions).forEach(([name, action])=>{
			if (name.includes('initAnim')) {
				if (action._clip.duration>maxDur) {
					maxDur = action._clip.duration
				}
                action.setLoop(LoopOnce, 1) 
                action.clampWhenFinished = true 
                action.play()
			}
		})

		setTimeout(()=>{
			Object.entries(animations.actions).forEach(([name, action])=>{
				if (name.includes('Action')) action.play()
			})
		}, maxDur * 1000)

		if (!shadow) return
		let interval = setInterval(()=>{
			shadows.current.forEach((mesh, id)=>{
				mesh.position.x = children.current[id].position.x
				mesh.position.z = children.current[id].position.z	
				if (!hull.current.containsPoint(mesh.position)) {
					mesh.scale.set(0,0,0)
				} else {
					let child = children.current[id]
					let s = 1 - (child.position.y  - props.shadowObjectY0) 
					/ (mesh.position.y0 - props.shadowObjectY0)
					mesh.scale.set(s, s, s)
				}
			})			
		}, 16)
		setTimeout(()=>clearInterval(interval), maxDur * 1000)
	}

	return (
		<Suspense>
			<group ref={group} >
			{show && <primitive object={model.scene} />}
			{(shadow&&show)&&
				shadows.current.map((mesh,id)=>
					<primitive key={id} object={mesh} />
				)
			}
			</group>
		</Suspense>
	)
}