import styles from './Button.module.css';


type ButtonProps = {
    text ?: string
}

export function Button({text}: ButtonProps) {
    return <button className={styles.base}>{text}</button>
}