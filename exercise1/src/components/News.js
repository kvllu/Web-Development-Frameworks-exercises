import React from 'react'
import styles from './News.module.css'

export default function News() {
    return (
        <div>
        <div className= { styles.News }>
            <img src = "https://cdn.pixabay.com/photo/2021/08/26/17/12/silhouettes-6576684_960_720.jpg"></img>
            <p>
                <span className={styles.Title}>Consectetur|</span>
                <span className={styles.Text}>Nullam ut massa sit amet dui gravida pellentesque molestie eget nulla. Suspendisse auctor turpis a elit tincidunt dignissim. Nulla iaculis at sapien nec congue.</span>
            </p>
        </div>
        <div className= { styles.News }>
            <img src = "https://cdn.pixabay.com/photo/2021/03/16/10/04/street-6099209_960_720.jpg"></img>
            <p>
                <span className={styles.Title}>Pellentesque|</span>
                <span className={styles.Text}>Vivamus eu diam at ante luctus efficitur. Nullam tristique lacus nulla, a condimentum eros iaculis eget. Suspendisse a bibendum ipsum.</span>
            </p>
        </div>
        <div className= { styles.News }>
            <img src = "https://cdn.pixabay.com/photo/2014/09/07/21/52/city-438393_960_720.jpg"></img>
            <p>
                <span className={styles.Title}>Aliquam|</span>
                <span className={styles.Text}>In feugiat tempor quam, a gravida quam viverra ut. Donec eget quam ut diam laoreet maximus eget eleifend ex. Suspendisse ultricies aliquam lorem ut dapibus.</span>
            </p>
        </div>
        </div>
    )
}
