import styles from "../styles/ImageContainer.module.css";

const ImageContainer = ({ children }) => {
  return (
    <div className={styles.container}>
    {children}
    </div>
  )
}
export default ImageContainer