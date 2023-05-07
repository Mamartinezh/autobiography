

let TextContent = {
	0: '',
	1: 'I was born in San Andres on june the 21st in the year 1992, My parents were living there.',
	2: 'Since I was a child I always loved playing the guitar, my first guitar was given to me when I was 8; it was a fender stratocaster.',
	3: 'My favourite sport was always tennis, as a result, I started playing tennis by the year of 2004 and reached a competitive level, which led me to play in municipal tournaments.',
	4: 'I finished my elementary studies when I was 16, afterwards, I decided to continue my studies looking for a civil engineering degree. I enrolled the program at the Universidad De Medellin.',
	5: 'During my university studies I got my first dog, Paul, a siberian husky that will became one of the most important beings of my life; later He would meet his two siblings, Kayra and Pirulo.',
	6: 'Then, I discovered one of my biggest passions, cyling. At first, it was my primary mean of transportation, however, it quickly became a hobbie that led to lots of happiness.',
	7: "Recently, I've been very enthusiastic about programming, althought it was always one of my passions."
}

let models = {
	1: {
		modelPath: './models/scene/ambulance.glb',
		colorPath: './textures/ambulanceColor.png',
		// objectAlphaPath: './textures/ambulanceAlpha.png',	
		// shadowObjectPath: './models/scene/ambulanceShadow.glb',
		// shadowObject: 'ambulance',
		// shadowObjectY0: 0.544293
	},
	2: {
		modelPath: './models/scene/guitar.glb',
		colorPath: './textures/guitarColor.png',
		alphaPath: './textures/guitarAlpha.png'	
	},
	3: {
		modelPath: './models/scene/tennis.glb',
		colorPath: './textures/tennisColor.png',
		objectAlphaPath: './textures/ballAlpha.png',	
		shadowObjectPath: './models/scene/ballShadow.glb',
		shadowObject: 'ball',
		shadowObjectY0: 0.074288
	},
	4: {
		modelPath: './models/scene/bulldozer.glb',
		colorPath: './textures/bulldozerColor.png',
		alphaPath: './textures/bulldozerAlpha.png'

	},
	5: {
		modelPath: './models/scene/dogos.glb',
		colorPath: './textures/dogosColor.png',
		alphaPath: './textures/dogosAlpha.png'

	},
	6: {
		modelPath: './models/scene/bicycle.glb',
		colorPath: './textures/bicycleColor.png',
		alphaPath: './textures/bicycleAlpha.png'
	},
	7: {
		modelPath: './models/scene/computer.glb',
		colorPath: './textures/computerColor2.png',
		alphaPath: './textures/computerAlpha.png'		
	}
}

let views = {
	0: {
		z: 0.625,
		angle: 135,
		sx: -0.5,
		sz: -0.5
	},
	1: {
		z: 1,
		angle: 150,
		sx: -4,
		sz: -4
	},
	2: {
		z: 1,
		angle: 50,
		sx: 2,
		sz: -4
	},
	3: {
		z: 1,
		angle: 100,
		sx: -4,
		sz: -4
	},
	4: {
		z: 1,
		angle: 150,
		sx: -4,
		sz: -4
	},
	5: {
		z: 1.5,
		angle: 100,
		sx: -4,
		sz: -4
	},
	6: {
		z: 1,
		angle: 60,
		sx: 2,
		sz: -4
	},	
	7: {
		z: 1,
		angle: 150,
		sx: -4,
		sz: -4
	}
}

let viewsSmall = {
	0: {
		z: 0.625,
		angle: 135,
		sx: -0.5,
		sz: -0.5
	},
	1: {
		z: 1,
		angle: 150,
		sx: 0,
		sz: 0
	},
	2: {
		z: 1,
		angle: 50,
		sx: 0,
		sz: 0
	},
	3: {
		z: 1,
		angle: 100,
		sx: 0,
		sz: 0
	},
	4: {
		z: 1,
		angle: 150,
		sx: -1,
		sz: -1
	},
	5: {
		z: 1.5,
		angle: 100,
		sx: 0,
		sz: 0
	},
	6: {
		z: 1,
		angle: 60,
		sx: 0,
		sz: 0
	},	
	7: {
		z: 1,
		angle: 150,
		sx: 0,
		sz: 0
	}
}

views = {
	850: {
		0: { z: 0.625, angle: 135, sx: -0.5, sz: -0.5 },
		1: { z: 1, angle: 150, sx: 0, sz: 0 },
		2: { z: 1, angle: 50, sx: 0, sz: 0 },
		3: { z: 1, angle: 100, sx: 0, sz: 0 },
		4: { z: 1, angle: 150, sx: -1, sz: -1 },
		5: { z: 1.5, angle: 100, sx: 0, sz: 0 },
		6: { z: 1, angle: 60, sx: 0, sz: 0 },	
		7: { z: 1, angle: 150, sx: 0, sz: 0 }		
	},
	10000: {
		0: { z: 0.625, angle: 135, sx: -0.5, sz: -0.5 },
		1: { z: 1, angle: 150, sx: -4, sz: -4 },
		2: { z: 1, angle: 50, sx: 2, sz: -4 },
		3: { z: 1, angle: 100, sx: -4, sz: -4 },
		4: { z: 1, angle: 150, sx: -4, sz: -4 },
		5: { z: 1.5, angle: 100, sx: -2, sz: -2 },
		6: { z: 1, angle: 60, sx: 2, sz: -4 },	
		7: { z: 1, angle: 150, sx: -4, sz: -4 }		
	}
}

export {
	views,
	models,
	viewsSmall,
	TextContent,
}