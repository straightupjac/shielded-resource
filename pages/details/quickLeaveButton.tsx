import React from 'react'
import styles from '../../styles/quickLeaveButton.module.css'

function QuickLeaveButton () {
    return (
        <a className={styles.quick_leave_button} href="http://localhost:3000/">
            <span className={styles.leave_text}> LEAVE </span> 
            <span className={styles.description_box}>
                <span className={styles.description_text}> Return to the recipe page by clicking this button </span>
            </span>
        </a>
    )
}

export default QuickLeaveButton;
