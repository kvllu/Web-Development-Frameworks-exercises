import React from 'react'
import styles from './MainNews.module.css';
import News from './News';
import MostRead from './MostRead';

export default function MainNews() {
    return (
        <div className= { styles.MainNewsDiv }>
            <div className= { styles.NewsDiv}>
                <News />
            </div>
            <div className = { styles.MostReadDiv}>
                <MostRead />
            </div>
            </div>
    )
}
