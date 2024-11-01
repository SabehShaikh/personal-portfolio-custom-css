import { FaCode, FaCrop, FaLaptop } from 'react-icons/fa';
import styles from './services.module.css';

export default function Services() {
    return (
        <div className={styles.services}>
            <div className={styles.container}>
                <h1 className={styles.subTitle}>My Services</h1>
                <div className={styles.servicesList}>

                    <div className={styles.serviceCard}>
                        <FaCode className={styles.serviceIcon} />
                        <h2 className={styles.serviceTitle}>Web Design</h2>
                        <p className={styles.serviceText}>
                            Creating visually stunning and functional websites is my passion...
                        </p>
                    </div>

                    <div className={styles.serviceCard}>
                        <FaCrop className={styles.serviceIcon} />
                        <h2 className={styles.serviceTitle}>UI/UX Design</h2>
                        <p className={styles.serviceText}>
                            User-centered design is at the heart of my work...
                        </p>
                    </div>

                    <div className={styles.serviceCard}>
                        <FaLaptop className={styles.serviceIcon} />
                        <h2 className={styles.serviceTitle}>Responsive Web Design</h2>
                        <p className={styles.serviceText}>
                            I specialize in creating websites that adapt seamlessly...
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
