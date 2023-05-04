

import './TextEffect.css'

export default function TextEffect({text, hide=false}) {

	return (
		text.split('-').map((fragment, id)=>
			<div 
				key={id}
				style={{'--n': id, '--t': text.split('-').length}} 
				className='onload-div'>
			{fragment.split('').map((letter, idx)=>
				<span
					key={idx}
					style={{
						'--id': idx,
						'--total': text.split('-').slice(0, id).join('').length??0}} 
					className={`onload-text ${hide?'reverse':''}`}
				>
					{letter}
				</span>
			)}
			</div>
		)		
	)
}