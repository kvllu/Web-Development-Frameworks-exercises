import React from 'react'
import styles from './MostRead.module.css'

export default function MostRead() {
    return (
        <div>
            <h2>Luetuimmat</h2>
            <hr size="2" width="97%" color="black"></hr>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>1.</p>
                <p className={styles.Text}>
                <strong>Aliquam|</strong>
                In feugiat tempor quam, a gravida quam viverra ut. Donec eget quam ut diam laoreet maximus eget eleifend ex. Suspendisse ultricies aliquam lorem ut dapibus.
                </p>
            </div>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>2.</p>
                <p className={styles.Text}>
                <strong>Tincidunt|</strong>
                Maecenas euismod tellus erat, sit amet tempus eros vestibulum vel. Cras condimentum consectetur nulla. urabitur eget fermentum.
                </p>
            </div>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>3.</p>
                <p className={styles.Text}>
                <strong>Rutrum|</strong>
                Suspendisse commodo venenatis leo ut viverra. Proin efficitur sollicitudin lorem. Donec efficitur est at eros condimentum sagittis.
                </p>
            </div>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>4.</p>
                <p className={styles.Text}>
                <strong>Fusce|</strong>
                Sed hendrerit tincidunt eros, eget sodales erat dictum id. Donec magna justo, aliquam a velit tempor, vehicula varius erat. Curabitur dapibus.
                </p>
            </div>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>5.</p>
                <p className={styles.Text}>
                <strong>Donec|</strong>
                Donec in auctor erat, vel elementum sapien. Nam pharetra sed tellus non blandit. Praesent eu congue erat Vestibulum. Phasellus bibendum maximus
                </p>
            </div>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>6.</p>
                <p className={styles.Text}>
                <strong>Maecenas|</strong>
                Morbi volutpat efficitur nulla quis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
            </div>
            <div className= {styles.NewsDiv}>
                <p className = {styles.Number}>7.</p>
                <p className={styles.Text}>
                <strong>Pellentesque|</strong>
                Curabitur odio lorem, fermentum quis ante sed, iaculis convallis ipsum. Praesent in accumsan ipsum. Duis imperdiet egestas quam, ac imperdiet dolor auctor eu.
                </p>
            </div>
        </div>
    )
}
