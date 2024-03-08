
import React, { FC } from 'react'
import Logo from "assets/logos/logo_sem_fundo_horizontal.png"
import styles from "./styles.module.scss"

export const Header: FC = () => {
	return (
		<header className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<img src={Logo} className={styles.logo} alt="Logo da AluQuadra" />
					<div className={styles.texts}>
						<a href="#wannaRent" className={styles.links}>Quero alugar</a>
						<a href="#wannaRent" className={styles.links}>Quero anunciar</a>
						<a href="http://#" target="_blank" rel="noopener noreferrer" className={styles.button}>baixe agora</a>
					</div>
				</div>
			</div>
		</header>
	)
}
