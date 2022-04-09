import styles from './Preloader.module.sass'

export default function Preloader() {
	// return <div className="progress">
	// 	<div className="indeterminate"/>
	// </div>
	return (
		<div className={styles['preloader-1']}>
			<svg>
				<g>
					<path d="M 50,100 A 1,1 0 0 1 50,0"/>
				</g>
				<g>
					<path d="M 50,75 A 1,1 0 0 0 50,-25"/>
				</g>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{stopColor: '#ffe0b2', stopOpacity: 1}}/>
						{/*#BFE2FF*/}
						<stop offset="100%" style={{stopColor: '#e65100', stopOpacity: 1}}/>
						{/*#337AB7*/}
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}