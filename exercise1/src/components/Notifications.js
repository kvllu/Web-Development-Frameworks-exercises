import React from 'react'
import styles from './Notifications.module.css'

export default function Notifications() {
    return (
        <div>
            <div className= {styles.NotifiBox}>
                <h2 className={ styles.NotifiTitle }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis sem, maximus sit amet turpis sed, aliquet dignissim nunc. Donec in faucibus augue.</h2>
            </div>
            <div className= {styles.NotifiBox}>
                <h2 className={ styles.NotifiTitle }>Praesent ullamcorper nulla et nibh gravida malesuada. Phasellus vitae dictum nibh, quis fermentum augue. Maecenas hendrerit et risus non molestie.</h2>
            </div>
        </div>
    )
}
