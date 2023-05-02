

const MatrixSettigns = {
	fps: 30,
	nCols: 20,
	width: 400,
	height: 400,
	color: '#0f0',
	fontSize: '15pt',
	background: '#000',
	backgroundCover: '#0001'
}

export default class MatrixCanvas {

	constructor(texture, settings = MatrixSettigns) {

		this.texture = texture
		this.settings = settings

		// Matrix Effect
		this.matrixCanvas = document.createElement('canvas')
		this.matrixCanvas.width = settings.width
		this.matrixCanvas.height = settings.height
		this.ctx = this.matrixCanvas.getContext('2d')

		this.w = this.matrixCanvas.width
		this.h = this.matrixCanvas.height

		this.ctx.fillStyle = settings.background
		this.ctx.fillRect(0, 0, this.w, this.h)

		this.cols = Math.floor(this.w / settings.nCols) + 1
		this.posicion_y = Array(this.cols).fill(0)

	    this.fpsInterval = 1000 / this.settings.fps
	    this.then = Date.now()

	    // this.update()
		setInterval(this.update.bind(this), 50)		

	}

	update() {

	    // requestAnimationFrame(this.update.bind(this))

	    // // elapsed time since last loop
	    // const now = Date.now();
	    // const elapsed = now - this.then;

	    // if (elapsed < this.fpsInterval) return

	    // this.then = now - (elapsed % this.fpsInterval);

	    this.ctx.fillStyle = this.settings.backgroundCover
	    this.ctx.fillRect(0, 0, this.w, this.h)

	    this.ctx.fillStyle = this.settings.color
	    this.ctx.font =`${this.settings.fontSize} monospace`

	    this.posicion_y.forEach((y, ind)=>{
	        const text = String.fromCharCode(Math.random() * 128)
	        const x = ind * this.settings.nCols
	        this.ctx.fillText(text, x, y)
	        if (y > 100 + Math.random() * 10000) {
	            this.posicion_y[ind] = 0
	        }
	        else this.posicion_y[ind] = y + this.settings.nCols
	    })   	

		if (this.texture) this.texture.needsUpdate = true
	
	}

}