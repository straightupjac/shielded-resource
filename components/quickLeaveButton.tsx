import React from 'react'
import styles from '@styles/quickLeaveButton.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

function QuickLeaveButton() {
    const router = useRouter();

    const handleLeave = () => {
        router.push('/');
        sessionStorage.removeItem('auth');
    }
    return (
        <span className={styles.quick_leave_button_container} >
            <span className={styles.quick_leave_button} onClick={handleLeave}>
                <span className={styles.leave_text}>LEAVE</span>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <span className={styles.description_box}>
                        <span className={styles.description_text}>
                            Click here to return to the recipe cover.
                        </span>
                    </span>
                </Box>
            </span>
        </span>
    )
}

export default QuickLeaveButton;
