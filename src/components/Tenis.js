
import { MeshBasicMaterial, LoopOnce, SRGBColorSpace } from 'three'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useRef, useEffect, Suspense, primitive } from 'react'
import gsap from 'gsap'

export default function Model({current}) {

	const isAnimated = useRef(false)
	const isActive = useRef(false)

	const [ bakedMap ] = useTexture(
		[
		'./textures/tenisColor.png'
		],
		([...maps])=>{
			maps.forEach((map, id)=>{
				map.flipY = false
				if (id===0) map.colorSpace = SRGBColorSpace
				else map.colorSpace = SRGBColorSpace
			})
		}
	)

	const model = useGLTF('./models/scene/tenis.glb')
	const animations = useAnimations(model.animations, model.scene)

	useEffect(()=>{
		const bakedMaterial = new MeshBasicMaterial({map: bakedMap})
		let children = [...model.scene.children]
		children.forEach(child=>child.material = bakedMaterial)
	}, [])

	useEffect(()=>{
		if (current!==3 && !isActive.current) return
		if (current!==3) {
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