import React from 'react'
import styles from '@styles/quickLeaveButton.module.css'
import Link from 'next/link';

function QuickLeaveButton() {
    return (
        <Link passHref href="/">
            <span className={styles.quick_leave_button}>
                <span className={styles.leave_text}>LEAVE</span>
                <span className={styles.description_box}>
                    <span className={styles.description_text}> Return to the recipe page by clicking this button </span>
                </span>
            </span>
        </Link>
    )
}

export default QuickLeaveButton;
