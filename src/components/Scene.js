
import { useFrame, useThree, extend } from '@react-three/fiber'
import { MeshBasicMaterial, LoopOnce, SRGBColorSpace, DoubleSide, Group } from 'three'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useRef, useEffect, useState, Suspense, primitive } from 'react'
import { useClientContext } from '../contexts/client/ClientState'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import gsap from 'gsap'

import Ambulance from './Ambulance'
import Guitar from './Guitar'
import Tenis from './Tenis'
import Bulldozer from './Bulldozer'
import Bicycle from './Bicycle'
import Computer from './Computer'

extend({ OrbitControls })

export default function Scene({onLoad, current}) {

	const control = useRef()
	const sceneY0 = useRef(-3)
	const elapsed = useRef(0)
	const mainGroup = useRef()
	const { camera, gl } = useThree()
	const { cursor, cursorSettings, sizes } = useClientContext()

	useFrame((state, delta)=>{
		control.current.update()
	    if (cursorSettings.isOn) {
	        // mainGroup.current.position.x += cursor.current.left * cursorSettings.damping * 5
	        cursor.current.left += - cursor.current.left * cursorSettings.damping
	    	cursor.current.offset = cursor.current.x * cursorSettings.delta - cursor.current.left
	    }

	    elapsed.current += delta

		mainGroup.current.position.y = sceneY0.current + Math.sin(elapsed.current) * 0.05

	})

	const [ bakedMap ] = useTexture(
		[
		'./textures/islandColor.png'
		],
		([...maps])=>{
			maps.forEach((map, id)=>{
				map.flipY = false
				if (id===0) map.colorSpace = SRGBColorSpace
				else map.colorSpace = SRGBColorSpace
			})
		}
	)

	const land = useGLTF('./models/scene/land.glb')
	const animations = useAnimations(land.animations, land.scene)

	useEffect(()=>{
		camera.lookAt(0, -4.5, 0)
		const bakedMaterial = new MeshBasicMaterial({map: bakedMap, side: DoubleSide})

		let children = [...land.scene.children]
		children.forEach(child=>child.material = bakedMaterial)

		Object.entries(animations.actions).forEach(([name, action])=>action.play())

		onLoad()
	}, [])


	useEffect(()=>{
		let zoom, zoomH, zoomV
		if (sizes.current.width < 750) {
			zoomH = sizes.current.width / (Math.sqrt(2) + 0.5)
		}		
		if (sizes.current.height < 2000) {
			zoomV = (sizes.current.height) / 12.6357
		}
		zoom = zoomH?zoomV?zoomH<zoomV?zoomH:zoomV:zoomH:zoomV?zoomV:null
		if (!zoom) return
		camera.zoom = zoom
		let factor = sizes.current.height / (sizes.current.height - 210) 
		// sceneY0.current = - 300 * 0.5 * factor * 12.6357 / (sizes.current.height * 16 / Math.sqrt(16**2+2**2))
		camera.updateProjectionMatrix()
	}, [sizes.current])

	useEffect(()=>{
		gsap.to(camera, {
			duration: 2, 
			'zoom': views[current].z, 
			ease: 'power2.inOut',
			onUpdate: ()=> camera.updateProjectionMatrix()
		})
		gsap.to(camera.position, {
			x: 16 * Math.sin(views[current].angle * Math.PI / 180),
			y: 2 + 0.5,
			z: 16 * Math.cos(views[current].angle * Math.PI / 180),
			duration: 2, 
			ease: 'power2.inOut'
		})
		gsap.to(control.current.target, {
			x: 0,
			y: -4.5,
			z: 0,
			duration: 2, 
			ease: 'power2.inOut'
		})
		gsap.to(mainGroup.current.position, {
				x: views[current].sx,
				z: views[current].sz,
				duration: 2, 
				ease: 'power2.inOut'
		})
	}, [current])


	return (
		<>
			<orbitControls ref={control} args={[camera, gl.domElement]} damping={0.05} enableDamping enabled={false} />
			<group ref={ mainGroup }>
				<Suspense>
					<primitive object={land.scene} />
				</Suspense>
				<Ambulance current={current} />
				<Guitar current={current} />
				<Tenis current={current} />
				<Bulldozer current={current} />
				<Bicycle current={current} />
				<Computer current={current} />
			</group>
		</>
	)
}


const views = {
	0: {
		z: 50,
		angle: 135,
		sx: 0,
		sz: 0
	},
	1: {
		z: 80,
		angle: 150,
		sx: -4,
		sz: -4
	},
	2: {
		z: 80,
		angle: 90,
		sx: 2,
		sz: -4
	},
	3: {
		z: 80,
		angle: 150,
		sx: -4,
		sz: -4
	},
	4: {
		z: 80,
		angle: 150,
		sx: -4,
		sz: -4
	},
	5: {
		z: 80,
		angle: 90,
		sx: 2,
		sz: -4
	},
	5: {
		z: 80,
		angle: 90,
		sx: 2,
		sz: -4
	},	
	6: {
		z: 80,
		angle: 150,
		sx: -4,
		sz: -4
	}
}