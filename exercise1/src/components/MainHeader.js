import React from 'react'
import styles from './MainHeader.module.css'
import Notifications from './Notifications';
import NavBar from './NavBar';

export default function mainHeader() {
    return (
        <div>
            <header className={ styles.Header }>
                <div>
                    <h1 className="logo">Helsingin Sanomat</h1>
                    <div className={ styles.HeaderItems }>
                        <p className={ styles.HeaderItem }>Uutiset</p>
                        <p className={ styles.HeaderItem }>Lehdet</p>
                        <p className={ styles.HeaderItem }>Tilaa</p>
                        <p className={ styles.HeaderItem }>Kirjaudu</p>
                        <p className={ styles.HeaderItem }>Hae</p>
                        <p className={ styles.HeaderItem }>Valikko</p>
                    </div>
                </div>
            </header>
            <NavBar />
            <div className={ styles.NotifiDiv }>
                <Notifications/>
            </div>
        </div>
    )
}
