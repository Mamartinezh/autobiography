

import { useRef, useEffect, useState } from 'react'
import { useContext, createContext } from 'react'
import { views } from '../../view-settings'
import { useClientContext } from '../client/ClientState'
import gsap from 'gsap'

const ViewContext = createContext()

const useViewContext = () => {
	return useContext(ViewContext)
}

export default function ViewState({children}) {

	const watcher = useRef([])
	const refView = useRef(views.init)
	const newView = useRef(views.init)
	const angle = useRef(views.init.ct)
	const { cursor, setCursorSettings } = useClientContext()
	const [ lockScroll, setLockScroll ] = useState(true)
	const [ viewSettings, setViewSettings ] = useState(null)

	useEffect(()=>{
		setViewSettings(interpolateSettings(0, 'init'))
	}, [])

	const interpolateSettings = (pctg, to) => {
		const aspect = window.innerWidth / window.innerHeight
    	angle.current = refView.current.ct - (refView.current.ct - views[to].ct) * pctg
		let settings = {
			z: refView.current.z - (refView.current.z - views[to].z) * pctg,
	    	cx: refView.current.cr * Math.sin(angle.current * Math.PI / 180),
	    	cz: refView.current.cr * Math.cos(angle.current * Math.PI / 180),
	    	cy: refView.current.cy - (refView.current.cy - views[to].cy) * pctg,
			sx: refView.current.sx - (refView.current.sx - views[to].sx) * pctg, 
			sy: refView.current.sy - (refView.current.sy - views[to].sy) * pctg,
			sz: refView.current.sz - (refView.current.sz - views[to].sz) * pctg,
			tx: refView.current.tx - (refView.current.tx - views[to].tx) * pctg,
			ty: refView.current.ty - (refView.current.ty - views[to].ty) * pctg,
			tz: refView.current.tz - (refView.current.tz - views[to].tz) * pctg
		}
		updateNewView(settings)
		// console.log(settings.cx)
		return settings
	}

	const updateSettings = (pctg, to) => {
		setViewSettings(interpolateSettings(pctg, to))
	}

	const updateNewView = (settings) => {
	    newView.current = {
	    	...refView.current,
	    	...settings,
	        ct: angle.current,
	        cr: Math.sqrt((settings.cx)**2 + settings.cz**2), //+ cursor.current.offset
	    }
	    // console.log(newView.current.cr)
	}

	const setNewAsRefView = () => {
		refView.current = newView.current
	}

	const loadView = (to, ref, keepLock = true, callback = null, delay = 0, ease='power1.out') => {
		// setCursorSettings(prev=>({...prev, isOn: false}))
		setLockScroll(prev=>true)
		// console.log(newView.current, refView.current)
		let base = newView.current[ref]
		let object = {[ref]: base}
	    gsap.to(object, {
	        [ref]: views[to][ref],
	        duration: views[to].d,
	        delay,
	        ease,
	        onUpdate: function() {
	        	let pctg = (object[ref] - base)/(views[to][ref]-base)
	        	if (pctg) updateSettings(pctg, to)
	        },
	    	onComplete: function() {
	    		setNewAsRefView()
	    		if (!keepLock) setLockScroll(prev=>false)
	    		// setCursorSettings(prev=>({...prev, isOn: true}))
	    	}
	    })       
	}

	return (
		<ViewContext.Provider 
			value={{
				watcher,
				refView,
				loadView,
				lockScroll,
				viewSettings,
				updateSettings,
				setNewAsRefView,
			}} 
		>
			{children}
		</ViewContext.Provider>
	)
}

export { ViewContext, useViewContext }