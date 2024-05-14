import styles from './button55.module.css'

const Button55 = ({ children, onClick, style, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button55} ${className}`}
      onClick={onClick}
      style={style}
      role="button"
    >
      {children}
    </button>
  )
}
export default Button55
