
import gsap from 'gsap'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useRef, useEffect, useState, Suspense, primitive, useMemo } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MeshBasicMaterial, LoopOnce, SRGBColorSpace, DoubleSide, Group, CanvasTexture } from 'three'


import CustomModel from './CustomModel'
import MatrixCanvas from '../utils/matrix-canvas'
import { views, viewsSmall, models } from '../content-settings'
import { useSceneContext } from '../contexts/scene/SceneState'
import { useClientContext } from '../contexts/client/ClientState'

extend({ OrbitControls })

let Models = models

export default function Scene({onLoad}) {

	const control = useRef()
	const sceneY0 = useRef(-5)
	const elapsed = useRef(0)
	const mainGroup = useRef()
	const fitZoom = useRef(null)
	const baseZoom = useRef(80)
	const { camera, gl } = useThree()

	const { current, isChanging } = useSceneContext()
	const { cursor, cursorSettings, sizes } = useClientContext()

	useFrame((state, delta)=>{
		control.current.update()
	    if (cursorSettings.isOn) {
	        mainGroup.current.position.x += cursor.current.left * cursorSettings.damping * 5
	        mainGroup.current.position.z += cursor.current.left * cursorSettings.damping * 5
	        cursor.current.left += - cursor.current.left * cursorSettings.damping
	    	cursor.current.offset = cursor.current.x * cursorSettings.delta - cursor.current.left
	    }

	    elapsed.current += delta

		mainGroup.current.position.y = sceneY0.current + Math.sin(elapsed.current) * 0.05

	})

	useMemo(()=>{

		// Matrix Texture
		const matrixCanvas = new MatrixCanvas()
		const matrixTexture = new CanvasTexture(matrixCanvas.matrixCanvas)
		matrixCanvas.texture = matrixTexture

		const blackMaterial = new MeshBasicMaterial({color: '#13120f'})
		const matrixMaterial = new MeshBasicMaterial({map: matrixTexture})

		Object.keys(Models).forEach(key=>{
			Models[key].materials = {'justBlack': blackMaterial}
		})

		Models = {
			...Models,
			7: {
				...Models[7],
				materials: {
					'Screen': matrixMaterial
				}
			}
		}
	}, [])


	const [ bakedMap ] = useTexture(
		[
		'./textures/landColor-compress.png'
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
	const hull = useGLTF('./models/scene/shadowHull.glb')
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
		if (!zoom) return fitZoom.current = null
		camera.zoom = zoom
		fitZoom.current = zoom
		let factor = sizes.current.height / (sizes.current.height - 210) 
		if (sizes.current.width>850) sceneY0.current = -4
		else sceneY0.current = -3
		// sceneY0.current = - 300 * 0.5 * factor * 12.6357 / (sizes.current.height * 16 / Math.sqrt(16**2+2**2))
		camera.updateProjectionMatrix()
		setView()
	}, [sizes.current])

	useEffect(()=>{
		setView()
	}, [current])

	const setView = () => {
		let view = views[Object.keys(views).reduceRight((a,b)=>
			b>sizes.current.width?b:a,0)]
		gsap.to(camera, {
			duration: 2, 
			'zoom': (fitZoom.current??baseZoom.current) * view[current].z, 
			ease: 'power2.inOut',
			onUpdate: ()=> camera.updateProjectionMatrix()
		})
		gsap.to(camera.position, {
			x: 16 * Math.sin(view[current].angle * Math.PI / 180),
			y: 2 + 0.5,
			z: 16 * Math.cos(view[current].angle * Math.PI / 180),
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
				x: view[current].sx,
				z: view[current].sz,
				duration: 2, 
				ease: 'power2.inOut'
		})		
	}

	return (
		<>
			<orbitControls ref={control} args={[camera, gl.domElement]} damping={0.05} enableDamping enabled={false} />
			<group ref={ mainGroup }>
				<Suspense>
					<primitive object={land.scene} />
				</Suspense>
				{Object.entries(Models).map(([id, props])=>
					<CustomModel key={id} {...props} isActive={current==id} hull={hull.scene.children[0]} />
				)}
			</group>
		</>
	)
}


