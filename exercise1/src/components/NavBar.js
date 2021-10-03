import React from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={ styles.NavDiv }>
            <p className = { styles.SelectedItem }>Etusivu</p>
            <p className = { styles.NavItem }>HS Visio</p>
            <p className = { styles.NavItem }>Luetuimmat</p>
            <p className = { styles.NavItem }>Uusimmat</p>
            <p className = { styles.NavItem }>Politiikka</p>
            <p className = { styles.NavItem }>Kaupunki</p>
            <p className = { styles.NavItem }>Kulttuuri</p>
            <p className = { styles.NavItem }>Tiede</p>
            <p className = { styles.NavItem }>Hyvinvointi</p>
            <p className = { styles.NavItem }>Ruoka</p>
            <p className = { styles.NavItem }>Nyt</p>
        </div>
    )
}
