import React from 'react'
import styles from '@styles/quickLeaveButton.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

function QuickLeaveButton() {
    const router = useRouter();

    const handleLeave = () => {
        router.push('/');
        localStorage.removeItem('auth');
    }
    return (
        <span className={styles.quick_leave_button_container} >
            <span className={styles.quick_leave_button} onClick={handleLeave}>
                <span className={styles.leave_text}>LEAVE</span>
                <span className={styles.description_box}>
                    <span className={styles.description_text}> Return to the recipe page by clicking this button </span>
                </span>
            </span>
        </span>
    )
}

export default QuickLeaveButton;
