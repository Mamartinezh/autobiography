


export default function Blob() {

	return (
		<div className='blob'>
			<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
	  			<path  transform="translate(40 40)">
		  			<animate 
		  				attributeName='d'
		  				dur='300000ms'
		  				repeatCount='indefinite'
		  				values='M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M37.3,-55.6C51.1,-49.3,66.8,-43.5,73.5,-32.5C80.1,-21.5,77.7,-5.4,72.9,8.7C68,22.7,60.9,34.6,52.1,45.8C43.4,56.9,33.1,67.3,20.1,73.2C7.1,79.2,-8.5,80.7,-22.5,76.6C-36.5,72.5,-48.8,62.7,-56.9,50.8C-65,38.8,-68.9,24.6,-69.9,10.7C-70.9,-3.2,-69,-16.9,-64.3,-30.3C-59.7,-43.7,-52.3,-56.8,-41.1,-64.3C-29.9,-71.8,-15,-73.6,-1.6,-71.2C11.8,-68.7,23.6,-61.9,37.3,-55.6Z;M39.6,-61.1C51.6,-53.9,61.8,-43.4,67,-30.9C72.2,-18.4,72.4,-4,68.7,8.6C64.9,21.3,57.3,32.1,49.3,44.6C41.4,57,33.2,71.1,21.3,76.3C9.4,81.5,-6.2,78,-18.4,70.8C-30.6,63.5,-39.4,52.7,-48.5,42.1C-57.6,31.5,-66.9,21.2,-72.4,8.1C-77.9,-5,-79.5,-21,-72.8,-32.2C-66.1,-43.4,-51.1,-49.7,-37.5,-56.2C-24,-62.7,-12,-69.4,0.9,-70.8C13.8,-72.2,27.6,-68.3,39.6,-61.1Z;M36.3,-55.8C47.6,-49.2,57.6,-40.1,67,-28.1C76.3,-16.1,85,-1.3,82,11C79,23.3,64.3,33.1,52.7,44.8C41.2,56.5,32.9,70,21,75.1C9.1,80.3,-6.3,77,-18.6,70.3C-31,63.5,-40.2,53.2,-49.1,42.7C-58,32.2,-66.5,21.5,-72.6,7.8C-78.8,-5.9,-82.5,-22.7,-78.8,-38.2C-75.1,-53.7,-64,-67.9,-49.6,-73.1C-35.2,-78.3,-17.6,-74.3,-2.5,-70.3C12.5,-66.4,25,-62.4,36.3,-55.8Z;M34.7,-56.2C46.4,-46.6,58.2,-39.3,65.2,-28.5C72.2,-17.7,74.3,-3.3,73.3,11.2C72.3,25.8,68.1,40.6,59.8,54.1C51.6,67.7,39.4,80,24.9,83.6C10.5,87.3,-6.1,82.3,-21.3,76.2C-36.5,70,-50.4,62.9,-59.6,51.8C-68.7,40.8,-73.2,26,-74.7,11.2C-76.1,-3.6,-74.5,-18.4,-68.8,-31.7C-63.2,-45,-53.7,-56.8,-41.5,-66.3C-29.4,-75.7,-14.7,-82.8,-1.6,-80.4C11.5,-77.9,23.1,-65.9,34.7,-56.2Z;M40,-61.4C54.2,-53.2,69.5,-46,74.9,-34.2C80.2,-22.4,75.6,-6.1,70.7,8.4C65.8,22.8,60.7,35.5,52.5,46.4C44.4,57.4,33.4,66.7,20,73C6.5,79.3,-9.3,82.4,-24.2,79.4C-39,76.3,-52.9,67.1,-63,54.9C-73.2,42.7,-79.6,27.5,-78.5,13.3C-77.3,-0.9,-68.6,-14.1,-61.8,-28C-55.1,-41.9,-50.3,-56.4,-40.4,-66.4C-30.4,-76.5,-15.2,-82.1,-1.1,-80.3C13,-78.6,25.9,-69.5,40,-61.4Z;M42,-65C53,-58.2,59.6,-44.2,63.8,-30.5C67.9,-16.7,69.6,-3.3,70.6,12.3C71.7,27.8,72.1,45.3,63.2,53.6C54.2,61.9,35.9,61,19.6,65C3.2,69,-11.2,78,-24.7,77.2C-38.2,76.3,-50.8,65.7,-62.8,53.5C-74.8,41.3,-86.1,27.7,-87.3,13.2C-88.4,-1.3,-79.3,-16.7,-69.7,-29.5C-60.2,-42.3,-50.3,-52.5,-38.6,-59C-26.9,-65.5,-13.4,-68.2,1,-69.7C15.5,-71.3,30.9,-71.8,42,-65Z;M44.9,-66.4C58.3,-61.4,69.1,-48.9,75,-34.6C81,-20.3,82.1,-4.2,77.2,9.2C72.3,22.6,61.4,33.2,51.8,45.5C42.1,57.9,33.7,72.1,20.9,79.6C8.2,87.1,-9,88,-23.5,82.6C-38.1,77.2,-50.1,65.5,-57.3,52.4C-64.4,39.2,-66.7,24.6,-70.5,9.2C-74.2,-6.2,-79.3,-22.4,-73.5,-32.9C-67.7,-43.3,-50.8,-48.1,-36.7,-52.8C-22.6,-57.5,-11.3,-62.1,2.2,-65.6C15.8,-69.1,31.6,-71.5,44.9,-66.4Z;M35.1,-57.1C45.1,-48.3,52.5,-37.8,61.3,-25.8C70.1,-13.9,80.3,-0.4,82.1,14.3C83.8,28.9,76.9,44.8,66.4,58.1C55.8,71.3,41.5,81.9,25.4,86.7C9.4,91.4,-8.4,90.4,-24.7,85.1C-41,79.9,-55.7,70.5,-65.9,57.7C-76,44.9,-81.5,28.7,-81.6,13.1C-81.7,-2.5,-76.4,-17.5,-70.1,-32.3C-63.7,-47.1,-56.4,-61.8,-44.6,-69.8C-32.7,-77.8,-16.4,-79.1,-1.9,-76.2C12.6,-73.2,25.2,-66,35.1,-57.1Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M37.3,-55.6C51.1,-49.3,66.8,-43.5,73.5,-32.5C80.1,-21.5,77.7,-5.4,72.9,8.7C68,22.7,60.9,34.6,52.1,45.8C43.4,56.9,33.1,67.3,20.1,73.2C7.1,79.2,-8.5,80.7,-22.5,76.6C-36.5,72.5,-48.8,62.7,-56.9,50.8C-65,38.8,-68.9,24.6,-69.9,10.7C-70.9,-3.2,-69,-16.9,-64.3,-30.3C-59.7,-43.7,-52.3,-56.8,-41.1,-64.3C-29.9,-71.8,-15,-73.6,-1.6,-71.2C11.8,-68.7,23.6,-61.9,37.3,-55.6Z;M39.6,-61.1C51.6,-53.9,61.8,-43.4,67,-30.9C72.2,-18.4,72.4,-4,68.7,8.6C64.9,21.3,57.3,32.1,49.3,44.6C41.4,57,33.2,71.1,21.3,76.3C9.4,81.5,-6.2,78,-18.4,70.8C-30.6,63.5,-39.4,52.7,-48.5,42.1C-57.6,31.5,-66.9,21.2,-72.4,8.1C-77.9,-5,-79.5,-21,-72.8,-32.2C-66.1,-43.4,-51.1,-49.7,-37.5,-56.2C-24,-62.7,-12,-69.4,0.9,-70.8C13.8,-72.2,27.6,-68.3,39.6,-61.1Z;M36.3,-55.8C47.6,-49.2,57.6,-40.1,67,-28.1C76.3,-16.1,85,-1.3,82,11C79,23.3,64.3,33.1,52.7,44.8C41.2,56.5,32.9,70,21,75.1C9.1,80.3,-6.3,77,-18.6,70.3C-31,63.5,-40.2,53.2,-49.1,42.7C-58,32.2,-66.5,21.5,-72.6,7.8C-78.8,-5.9,-82.5,-22.7,-78.8,-38.2C-75.1,-53.7,-64,-67.9,-49.6,-73.1C-35.2,-78.3,-17.6,-74.3,-2.5,-70.3C12.5,-66.4,25,-62.4,36.3,-55.8Z;M34.7,-56.2C46.4,-46.6,58.2,-39.3,65.2,-28.5C72.2,-17.7,74.3,-3.3,73.3,11.2C72.3,25.8,68.1,40.6,59.8,54.1C51.6,67.7,39.4,80,24.9,83.6C10.5,87.3,-6.1,82.3,-21.3,76.2C-36.5,70,-50.4,62.9,-59.6,51.8C-68.7,40.8,-73.2,26,-74.7,11.2C-76.1,-3.6,-74.5,-18.4,-68.8,-31.7C-63.2,-45,-53.7,-56.8,-41.5,-66.3C-29.4,-75.7,-14.7,-82.8,-1.6,-80.4C11.5,-77.9,23.1,-65.9,34.7,-56.2Z;M40,-61.4C54.2,-53.2,69.5,-46,74.9,-34.2C80.2,-22.4,75.6,-6.1,70.7,8.4C65.8,22.8,60.7,35.5,52.5,46.4C44.4,57.4,33.4,66.7,20,73C6.5,79.3,-9.3,82.4,-24.2,79.4C-39,76.3,-52.9,67.1,-63,54.9C-73.2,42.7,-79.6,27.5,-78.5,13.3C-77.3,-0.9,-68.6,-14.1,-61.8,-28C-55.1,-41.9,-50.3,-56.4,-40.4,-66.4C-30.4,-76.5,-15.2,-82.1,-1.1,-80.3C13,-78.6,25.9,-69.5,40,-61.4Z;M42,-65C53,-58.2,59.6,-44.2,63.8,-30.5C67.9,-16.7,69.6,-3.3,70.6,12.3C71.7,27.8,72.1,45.3,63.2,53.6C54.2,61.9,35.9,61,19.6,65C3.2,69,-11.2,78,-24.7,77.2C-38.2,76.3,-50.8,65.7,-62.8,53.5C-74.8,41.3,-86.1,27.7,-87.3,13.2C-88.4,-1.3,-79.3,-16.7,-69.7,-29.5C-60.2,-42.3,-50.3,-52.5,-38.6,-59C-26.9,-65.5,-13.4,-68.2,1,-69.7C15.5,-71.3,30.9,-71.8,42,-65Z;M44.9,-66.4C58.3,-61.4,69.1,-48.9,75,-34.6C81,-20.3,82.1,-4.2,77.2,9.2C72.3,22.6,61.4,33.2,51.8,45.5C42.1,57.9,33.7,72.1,20.9,79.6C8.2,87.1,-9,88,-23.5,82.6C-38.1,77.2,-50.1,65.5,-57.3,52.4C-64.4,39.2,-66.7,24.6,-70.5,9.2C-74.2,-6.2,-79.3,-22.4,-73.5,-32.9C-67.7,-43.3,-50.8,-48.1,-36.7,-52.8C-22.6,-57.5,-11.3,-62.1,2.2,-65.6C15.8,-69.1,31.6,-71.5,44.9,-66.4Z;M35.1,-57.1C45.1,-48.3,52.5,-37.8,61.3,-25.8C70.1,-13.9,80.3,-0.4,82.1,14.3C83.8,28.9,76.9,44.8,66.4,58.1C55.8,71.3,41.5,81.9,25.4,86.7C9.4,91.4,-8.4,90.4,-24.7,85.1C-41,79.9,-55.7,70.5,-65.9,57.7C-76,44.9,-81.5,28.7,-81.6,13.1C-81.7,-2.5,-76.4,-17.5,-70.1,-32.3C-63.7,-47.1,-56.4,-61.8,-44.6,-69.8C-32.7,-77.8,-16.4,-79.1,-1.9,-76.2C12.6,-73.2,25.2,-66,35.1,-57.1Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M37.3,-55.6C51.1,-49.3,66.8,-43.5,73.5,-32.5C80.1,-21.5,77.7,-5.4,72.9,8.7C68,22.7,60.9,34.6,52.1,45.8C43.4,56.9,33.1,67.3,20.1,73.2C7.1,79.2,-8.5,80.7,-22.5,76.6C-36.5,72.5,-48.8,62.7,-56.9,50.8C-65,38.8,-68.9,24.6,-69.9,10.7C-70.9,-3.2,-69,-16.9,-64.3,-30.3C-59.7,-43.7,-52.3,-56.8,-41.1,-64.3C-29.9,-71.8,-15,-73.6,-1.6,-71.2C11.8,-68.7,23.6,-61.9,37.3,-55.6Z;M39.6,-61.1C51.6,-53.9,61.8,-43.4,67,-30.9C72.2,-18.4,72.4,-4,68.7,8.6C64.9,21.3,57.3,32.1,49.3,44.6C41.4,57,33.2,71.1,21.3,76.3C9.4,81.5,-6.2,78,-18.4,70.8C-30.6,63.5,-39.4,52.7,-48.5,42.1C-57.6,31.5,-66.9,21.2,-72.4,8.1C-77.9,-5,-79.5,-21,-72.8,-32.2C-66.1,-43.4,-51.1,-49.7,-37.5,-56.2C-24,-62.7,-12,-69.4,0.9,-70.8C13.8,-72.2,27.6,-68.3,39.6,-61.1Z;M36.3,-55.8C47.6,-49.2,57.6,-40.1,67,-28.1C76.3,-16.1,85,-1.3,82,11C79,23.3,64.3,33.1,52.7,44.8C41.2,56.5,32.9,70,21,75.1C9.1,80.3,-6.3,77,-18.6,70.3C-31,63.5,-40.2,53.2,-49.1,42.7C-58,32.2,-66.5,21.5,-72.6,7.8C-78.8,-5.9,-82.5,-22.7,-78.8,-38.2C-75.1,-53.7,-64,-67.9,-49.6,-73.1C-35.2,-78.3,-17.6,-74.3,-2.5,-70.3C12.5,-66.4,25,-62.4,36.3,-55.8Z;M34.7,-56.2C46.4,-46.6,58.2,-39.3,65.2,-28.5C72.2,-17.7,74.3,-3.3,73.3,11.2C72.3,25.8,68.1,40.6,59.8,54.1C51.6,67.7,39.4,80,24.9,83.6C10.5,87.3,-6.1,82.3,-21.3,76.2C-36.5,70,-50.4,62.9,-59.6,51.8C-68.7,40.8,-73.2,26,-74.7,11.2C-76.1,-3.6,-74.5,-18.4,-68.8,-31.7C-63.2,-45,-53.7,-56.8,-41.5,-66.3C-29.4,-75.7,-14.7,-82.8,-1.6,-80.4C11.5,-77.9,23.1,-65.9,34.7,-56.2Z;M40,-61.4C54.2,-53.2,69.5,-46,74.9,-34.2C80.2,-22.4,75.6,-6.1,70.7,8.4C65.8,22.8,60.7,35.5,52.5,46.4C44.4,57.4,33.4,66.7,20,73C6.5,79.3,-9.3,82.4,-24.2,79.4C-39,76.3,-52.9,67.1,-63,54.9C-73.2,42.7,-79.6,27.5,-78.5,13.3C-77.3,-0.9,-68.6,-14.1,-61.8,-28C-55.1,-41.9,-50.3,-56.4,-40.4,-66.4C-30.4,-76.5,-15.2,-82.1,-1.1,-80.3C13,-78.6,25.9,-69.5,40,-61.4Z;M42,-65C53,-58.2,59.6,-44.2,63.8,-30.5C67.9,-16.7,69.6,-3.3,70.6,12.3C71.7,27.8,72.1,45.3,63.2,53.6C54.2,61.9,35.9,61,19.6,65C3.2,69,-11.2,78,-24.7,77.2C-38.2,76.3,-50.8,65.7,-62.8,53.5C-74.8,41.3,-86.1,27.7,-87.3,13.2C-88.4,-1.3,-79.3,-16.7,-69.7,-29.5C-60.2,-42.3,-50.3,-52.5,-38.6,-59C-26.9,-65.5,-13.4,-68.2,1,-69.7C15.5,-71.3,30.9,-71.8,42,-65Z;M44.9,-66.4C58.3,-61.4,69.1,-48.9,75,-34.6C81,-20.3,82.1,-4.2,77.2,9.2C72.3,22.6,61.4,33.2,51.8,45.5C42.1,57.9,33.7,72.1,20.9,79.6C8.2,87.1,-9,88,-23.5,82.6C-38.1,77.2,-50.1,65.5,-57.3,52.4C-64.4,39.2,-66.7,24.6,-70.5,9.2C-74.2,-6.2,-79.3,-22.4,-73.5,-32.9C-67.7,-43.3,-50.8,-48.1,-36.7,-52.8C-22.6,-57.5,-11.3,-62.1,2.2,-65.6C15.8,-69.1,31.6,-71.5,44.9,-66.4Z;M35.1,-57.1C45.1,-48.3,52.5,-37.8,61.3,-25.8C70.1,-13.9,80.3,-0.4,82.1,14.3C83.8,28.9,76.9,44.8,66.4,58.1C55.8,71.3,41.5,81.9,25.4,86.7C9.4,91.4,-8.4,90.4,-24.7,85.1C-41,79.9,-55.7,70.5,-65.9,57.7C-76,44.9,-81.5,28.7,-81.6,13.1C-81.7,-2.5,-76.4,-17.5,-70.1,-32.3C-63.7,-47.1,-56.4,-61.8,-44.6,-69.8C-32.7,-77.8,-16.4,-79.1,-1.9,-76.2C12.6,-73.2,25.2,-66,35.1,-57.1Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M37.3,-55.6C51.1,-49.3,66.8,-43.5,73.5,-32.5C80.1,-21.5,77.7,-5.4,72.9,8.7C68,22.7,60.9,34.6,52.1,45.8C43.4,56.9,33.1,67.3,20.1,73.2C7.1,79.2,-8.5,80.7,-22.5,76.6C-36.5,72.5,-48.8,62.7,-56.9,50.8C-65,38.8,-68.9,24.6,-69.9,10.7C-70.9,-3.2,-69,-16.9,-64.3,-30.3C-59.7,-43.7,-52.3,-56.8,-41.1,-64.3C-29.9,-71.8,-15,-73.6,-1.6,-71.2C11.8,-68.7,23.6,-61.9,37.3,-55.6Z;M39.6,-61.1C51.6,-53.9,61.8,-43.4,67,-30.9C72.2,-18.4,72.4,-4,68.7,8.6C64.9,21.3,57.3,32.1,49.3,44.6C41.4,57,33.2,71.1,21.3,76.3C9.4,81.5,-6.2,78,-18.4,70.8C-30.6,63.5,-39.4,52.7,-48.5,42.1C-57.6,31.5,-66.9,21.2,-72.4,8.1C-77.9,-5,-79.5,-21,-72.8,-32.2C-66.1,-43.4,-51.1,-49.7,-37.5,-56.2C-24,-62.7,-12,-69.4,0.9,-70.8C13.8,-72.2,27.6,-68.3,39.6,-61.1Z;M36.3,-55.8C47.6,-49.2,57.6,-40.1,67,-28.1C76.3,-16.1,85,-1.3,82,11C79,23.3,64.3,33.1,52.7,44.8C41.2,56.5,32.9,70,21,75.1C9.1,80.3,-6.3,77,-18.6,70.3C-31,63.5,-40.2,53.2,-49.1,42.7C-58,32.2,-66.5,21.5,-72.6,7.8C-78.8,-5.9,-82.5,-22.7,-78.8,-38.2C-75.1,-53.7,-64,-67.9,-49.6,-73.1C-35.2,-78.3,-17.6,-74.3,-2.5,-70.3C12.5,-66.4,25,-62.4,36.3,-55.8Z;M34.7,-56.2C46.4,-46.6,58.2,-39.3,65.2,-28.5C72.2,-17.7,74.3,-3.3,73.3,11.2C72.3,25.8,68.1,40.6,59.8,54.1C51.6,67.7,39.4,80,24.9,83.6C10.5,87.3,-6.1,82.3,-21.3,76.2C-36.5,70,-50.4,62.9,-59.6,51.8C-68.7,40.8,-73.2,26,-74.7,11.2C-76.1,-3.6,-74.5,-18.4,-68.8,-31.7C-63.2,-45,-53.7,-56.8,-41.5,-66.3C-29.4,-75.7,-14.7,-82.8,-1.6,-80.4C11.5,-77.9,23.1,-65.9,34.7,-56.2Z;M40,-61.4C54.2,-53.2,69.5,-46,74.9,-34.2C80.2,-22.4,75.6,-6.1,70.7,8.4C65.8,22.8,60.7,35.5,52.5,46.4C44.4,57.4,33.4,66.7,20,73C6.5,79.3,-9.3,82.4,-24.2,79.4C-39,76.3,-52.9,67.1,-63,54.9C-73.2,42.7,-79.6,27.5,-78.5,13.3C-77.3,-0.9,-68.6,-14.1,-61.8,-28C-55.1,-41.9,-50.3,-56.4,-40.4,-66.4C-30.4,-76.5,-15.2,-82.1,-1.1,-80.3C13,-78.6,25.9,-69.5,40,-61.4Z;M42,-65C53,-58.2,59.6,-44.2,63.8,-30.5C67.9,-16.7,69.6,-3.3,70.6,12.3C71.7,27.8,72.1,45.3,63.2,53.6C54.2,61.9,35.9,61,19.6,65C3.2,69,-11.2,78,-24.7,77.2C-38.2,76.3,-50.8,65.7,-62.8,53.5C-74.8,41.3,-86.1,27.7,-87.3,13.2C-88.4,-1.3,-79.3,-16.7,-69.7,-29.5C-60.2,-42.3,-50.3,-52.5,-38.6,-59C-26.9,-65.5,-13.4,-68.2,1,-69.7C15.5,-71.3,30.9,-71.8,42,-65Z;M44.9,-66.4C58.3,-61.4,69.1,-48.9,75,-34.6C81,-20.3,82.1,-4.2,77.2,9.2C72.3,22.6,61.4,33.2,51.8,45.5C42.1,57.9,33.7,72.1,20.9,79.6C8.2,87.1,-9,88,-23.5,82.6C-38.1,77.2,-50.1,65.5,-57.3,52.4C-64.4,39.2,-66.7,24.6,-70.5,9.2C-74.2,-6.2,-79.3,-22.4,-73.5,-32.9C-67.7,-43.3,-50.8,-48.1,-36.7,-52.8C-22.6,-57.5,-11.3,-62.1,2.2,-65.6C15.8,-69.1,31.6,-71.5,44.9,-66.4Z;M35.1,-57.1C45.1,-48.3,52.5,-37.8,61.3,-25.8C70.1,-13.9,80.3,-0.4,82.1,14.3C83.8,28.9,76.9,44.8,66.4,58.1C55.8,71.3,41.5,81.9,25.4,86.7C9.4,91.4,-8.4,90.4,-24.7,85.1C-41,79.9,-55.7,70.5,-65.9,57.7C-76,44.9,-81.5,28.7,-81.6,13.1C-81.7,-2.5,-76.4,-17.5,-70.1,-32.3C-63.7,-47.1,-56.4,-61.8,-44.6,-69.8C-32.7,-77.8,-16.4,-79.1,-1.9,-76.2C12.6,-73.2,25.2,-66,35.1,-57.1Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M37.3,-55.6C51.1,-49.3,66.8,-43.5,73.5,-32.5C80.1,-21.5,77.7,-5.4,72.9,8.7C68,22.7,60.9,34.6,52.1,45.8C43.4,56.9,33.1,67.3,20.1,73.2C7.1,79.2,-8.5,80.7,-22.5,76.6C-36.5,72.5,-48.8,62.7,-56.9,50.8C-65,38.8,-68.9,24.6,-69.9,10.7C-70.9,-3.2,-69,-16.9,-64.3,-30.3C-59.7,-43.7,-52.3,-56.8,-41.1,-64.3C-29.9,-71.8,-15,-73.6,-1.6,-71.2C11.8,-68.7,23.6,-61.9,37.3,-55.6Z;M39.6,-61.1C51.6,-53.9,61.8,-43.4,67,-30.9C72.2,-18.4,72.4,-4,68.7,8.6C64.9,21.3,57.3,32.1,49.3,44.6C41.4,57,33.2,71.1,21.3,76.3C9.4,81.5,-6.2,78,-18.4,70.8C-30.6,63.5,-39.4,52.7,-48.5,42.1C-57.6,31.5,-66.9,21.2,-72.4,8.1C-77.9,-5,-79.5,-21,-72.8,-32.2C-66.1,-43.4,-51.1,-49.7,-37.5,-56.2C-24,-62.7,-12,-69.4,0.9,-70.8C13.8,-72.2,27.6,-68.3,39.6,-61.1Z;M36.3,-55.8C47.6,-49.2,57.6,-40.1,67,-28.1C76.3,-16.1,85,-1.3,82,11C79,23.3,64.3,33.1,52.7,44.8C41.2,56.5,32.9,70,21,75.1C9.1,80.3,-6.3,77,-18.6,70.3C-31,63.5,-40.2,53.2,-49.1,42.7C-58,32.2,-66.5,21.5,-72.6,7.8C-78.8,-5.9,-82.5,-22.7,-78.8,-38.2C-75.1,-53.7,-64,-67.9,-49.6,-73.1C-35.2,-78.3,-17.6,-74.3,-2.5,-70.3C12.5,-66.4,25,-62.4,36.3,-55.8Z;M34.7,-56.2C46.4,-46.6,58.2,-39.3,65.2,-28.5C72.2,-17.7,74.3,-3.3,73.3,11.2C72.3,25.8,68.1,40.6,59.8,54.1C51.6,67.7,39.4,80,24.9,83.6C10.5,87.3,-6.1,82.3,-21.3,76.2C-36.5,70,-50.4,62.9,-59.6,51.8C-68.7,40.8,-73.2,26,-74.7,11.2C-76.1,-3.6,-74.5,-18.4,-68.8,-31.7C-63.2,-45,-53.7,-56.8,-41.5,-66.3C-29.4,-75.7,-14.7,-82.8,-1.6,-80.4C11.5,-77.9,23.1,-65.9,34.7,-56.2Z;M40,-61.4C54.2,-53.2,69.5,-46,74.9,-34.2C80.2,-22.4,75.6,-6.1,70.7,8.4C65.8,22.8,60.7,35.5,52.5,46.4C44.4,57.4,33.4,66.7,20,73C6.5,79.3,-9.3,82.4,-24.2,79.4C-39,76.3,-52.9,67.1,-63,54.9C-73.2,42.7,-79.6,27.5,-78.5,13.3C-77.3,-0.9,-68.6,-14.1,-61.8,-28C-55.1,-41.9,-50.3,-56.4,-40.4,-66.4C-30.4,-76.5,-15.2,-82.1,-1.1,-80.3C13,-78.6,25.9,-69.5,40,-61.4Z;M42,-65C53,-58.2,59.6,-44.2,63.8,-30.5C67.9,-16.7,69.6,-3.3,70.6,12.3C71.7,27.8,72.1,45.3,63.2,53.6C54.2,61.9,35.9,61,19.6,65C3.2,69,-11.2,78,-24.7,77.2C-38.2,76.3,-50.8,65.7,-62.8,53.5C-74.8,41.3,-86.1,27.7,-87.3,13.2C-88.4,-1.3,-79.3,-16.7,-69.7,-29.5C-60.2,-42.3,-50.3,-52.5,-38.6,-59C-26.9,-65.5,-13.4,-68.2,1,-69.7C15.5,-71.3,30.9,-71.8,42,-65Z;M44.9,-66.4C58.3,-61.4,69.1,-48.9,75,-34.6C81,-20.3,82.1,-4.2,77.2,9.2C72.3,22.6,61.4,33.2,51.8,45.5C42.1,57.9,33.7,72.1,20.9,79.6C8.2,87.1,-9,88,-23.5,82.6C-38.1,77.2,-50.1,65.5,-57.3,52.4C-64.4,39.2,-66.7,24.6,-70.5,9.2C-74.2,-6.2,-79.3,-22.4,-73.5,-32.9C-67.7,-43.3,-50.8,-48.1,-36.7,-52.8C-22.6,-57.5,-11.3,-62.1,2.2,-65.6C15.8,-69.1,31.6,-71.5,44.9,-66.4Z;M35.1,-57.1C45.1,-48.3,52.5,-37.8,61.3,-25.8C70.1,-13.9,80.3,-0.4,82.1,14.3C83.8,28.9,76.9,44.8,66.4,58.1C55.8,71.3,41.5,81.9,25.4,86.7C9.4,91.4,-8.4,90.4,-24.7,85.1C-41,79.9,-55.7,70.5,-65.9,57.7C-76,44.9,-81.5,28.7,-81.6,13.1C-81.7,-2.5,-76.4,-17.5,-70.1,-32.3C-63.7,-47.1,-56.4,-61.8,-44.6,-69.8C-32.7,-77.8,-16.4,-79.1,-1.9,-76.2C12.6,-73.2,25.2,-66,35.1,-57.1Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M37.3,-55.6C51.1,-49.3,66.8,-43.5,73.5,-32.5C80.1,-21.5,77.7,-5.4,72.9,8.7C68,22.7,60.9,34.6,52.1,45.8C43.4,56.9,33.1,67.3,20.1,73.2C7.1,79.2,-8.5,80.7,-22.5,76.6C-36.5,72.5,-48.8,62.7,-56.9,50.8C-65,38.8,-68.9,24.6,-69.9,10.7C-70.9,-3.2,-69,-16.9,-64.3,-30.3C-59.7,-43.7,-52.3,-56.8,-41.1,-64.3C-29.9,-71.8,-15,-73.6,-1.6,-71.2C11.8,-68.7,23.6,-61.9,37.3,-55.6Z;M39.6,-61.1C51.6,-53.9,61.8,-43.4,67,-30.9C72.2,-18.4,72.4,-4,68.7,8.6C64.9,21.3,57.3,32.1,49.3,44.6C41.4,57,33.2,71.1,21.3,76.3C9.4,81.5,-6.2,78,-18.4,70.8C-30.6,63.5,-39.4,52.7,-48.5,42.1C-57.6,31.5,-66.9,21.2,-72.4,8.1C-77.9,-5,-79.5,-21,-72.8,-32.2C-66.1,-43.4,-51.1,-49.7,-37.5,-56.2C-24,-62.7,-12,-69.4,0.9,-70.8C13.8,-72.2,27.6,-68.3,39.6,-61.1Z;M36.3,-55.8C47.6,-49.2,57.6,-40.1,67,-28.1C76.3,-16.1,85,-1.3,82,11C79,23.3,64.3,33.1,52.7,44.8C41.2,56.5,32.9,70,21,75.1C9.1,80.3,-6.3,77,-18.6,70.3C-31,63.5,-40.2,53.2,-49.1,42.7C-58,32.2,-66.5,21.5,-72.6,7.8C-78.8,-5.9,-82.5,-22.7,-78.8,-38.2C-75.1,-53.7,-64,-67.9,-49.6,-73.1C-35.2,-78.3,-17.6,-74.3,-2.5,-70.3C12.5,-66.4,25,-62.4,36.3,-55.8Z;M34.7,-56.2C46.4,-46.6,58.2,-39.3,65.2,-28.5C72.2,-17.7,74.3,-3.3,73.3,11.2C72.3,25.8,68.1,40.6,59.8,54.1C51.6,67.7,39.4,80,24.9,83.6C10.5,87.3,-6.1,82.3,-21.3,76.2C-36.5,70,-50.4,62.9,-59.6,51.8C-68.7,40.8,-73.2,26,-74.7,11.2C-76.1,-3.6,-74.5,-18.4,-68.8,-31.7C-63.2,-45,-53.7,-56.8,-41.5,-66.3C-29.4,-75.7,-14.7,-82.8,-1.6,-80.4C11.5,-77.9,23.1,-65.9,34.7,-56.2Z;M40,-61.4C54.2,-53.2,69.5,-46,74.9,-34.2C80.2,-22.4,75.6,-6.1,70.7,8.4C65.8,22.8,60.7,35.5,52.5,46.4C44.4,57.4,33.4,66.7,20,73C6.5,79.3,-9.3,82.4,-24.2,79.4C-39,76.3,-52.9,67.1,-63,54.9C-73.2,42.7,-79.6,27.5,-78.5,13.3C-77.3,-0.9,-68.6,-14.1,-61.8,-28C-55.1,-41.9,-50.3,-56.4,-40.4,-66.4C-30.4,-76.5,-15.2,-82.1,-1.1,-80.3C13,-78.6,25.9,-69.5,40,-61.4Z;M42,-65C53,-58.2,59.6,-44.2,63.8,-30.5C67.9,-16.7,69.6,-3.3,70.6,12.3C71.7,27.8,72.1,45.3,63.2,53.6C54.2,61.9,35.9,61,19.6,65C3.2,69,-11.2,78,-24.7,77.2C-38.2,76.3,-50.8,65.7,-62.8,53.5C-74.8,41.3,-86.1,27.7,-87.3,13.2C-88.4,-1.3,-79.3,-16.7,-69.7,-29.5C-60.2,-42.3,-50.3,-52.5,-38.6,-59C-26.9,-65.5,-13.4,-68.2,1,-69.7C15.5,-71.3,30.9,-71.8,42,-65Z;M44.9,-66.4C58.3,-61.4,69.1,-48.9,75,-34.6C81,-20.3,82.1,-4.2,77.2,9.2C72.3,22.6,61.4,33.2,51.8,45.5C42.1,57.9,33.7,72.1,20.9,79.6C8.2,87.1,-9,88,-23.5,82.6C-38.1,77.2,-50.1,65.5,-57.3,52.4C-64.4,39.2,-66.7,24.6,-70.5,9.2C-74.2,-6.2,-79.3,-22.4,-73.5,-32.9C-67.7,-43.3,-50.8,-48.1,-36.7,-52.8C-22.6,-57.5,-11.3,-62.1,2.2,-65.6C15.8,-69.1,31.6,-71.5,44.9,-66.4Z;M35.1,-57.1C45.1,-48.3,52.5,-37.8,61.3,-25.8C70.1,-13.9,80.3,-0.4,82.1,14.3C83.8,28.9,76.9,44.8,66.4,58.1C55.8,71.3,41.5,81.9,25.4,86.7C9.4,91.4,-8.4,90.4,-24.7,85.1C-41,79.9,-55.7,70.5,-65.9,57.7C-76,44.9,-81.5,28.7,-81.6,13.1C-81.7,-2.5,-76.4,-17.5,-70.1,-32.3C-63.7,-47.1,-56.4,-61.8,-44.6,-69.8C-32.7,-77.8,-16.4,-79.1,-1.9,-76.2C12.6,-73.2,25.2,-66,35.1,-57.1Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z;M42.6,-66.7C55.5,-57.9,66.7,-46.7,75.4,-32.9C84.1,-19,90.5,-2.6,88.7,13C86.8,28.5,76.8,43.2,64.2,52.9C51.6,62.7,36.4,67.6,21.8,69.9C7.2,72.2,-6.9,71.8,-21.5,69.3C-36,66.7,-51.1,62,-58.7,51.7C-66.2,41.4,-66.3,25.5,-68.3,10C-70.2,-5.4,-73.9,-20.4,-68.5,-30.9C-63.1,-41.3,-48.6,-47.1,-35.6,-55.9C-22.7,-64.7,-11.3,-76.4,1.7,-79.1C14.8,-81.8,29.6,-75.5,42.6,-66.7Z;M38.2,-59.8C48.1,-53.1,53.8,-40.1,60.7,-27.1C67.7,-14.1,76,-1,77.7,13.7C79.5,28.3,74.7,44.5,64.7,56.2C54.8,68,39.5,75.4,23.6,79.7C7.7,84,-8.8,85.2,-21,78.5C-33.1,71.7,-40.9,56.9,-52.3,44.7C-63.7,32.6,-78.8,23,-84.2,9.8C-89.6,-3.3,-85.3,-20.2,-77.6,-34.7C-69.8,-49.1,-58.4,-61.2,-44.9,-66.3C-31.4,-71.3,-15.7,-69.4,-0.8,-68.2C14.2,-67,28.3,-66.5,38.2,-59.8Z'
		  			>
		  			</animate>
		  			<animate 
		  				attributeName='fill'
		  				dur='300000ms'
		  				repeatCount='indefinite'
		  				values='#FA4D56;#FF0066;#8A3FFC;#F1C21B;#08BDBA;#0F62FE;#A7F0BA;#24A148;#9EF0F0;#BAE6FF;#D0E2FF;#E8DAFF;#FFD6E8;#FA4D56'
		  			>
		  			</animate>
	  			</path>
			</svg>
		</div>
	)

}