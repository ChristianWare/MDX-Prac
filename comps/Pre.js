import { useState, useEffect, useRef } from "react";
import styles from "../styles/Pre.module.css";
import { BiCopy } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { copyToClipboard } from "./copyToClipboard";

const Pre = ({ children, ...props }) => {
  const [copied, setCopied] = useState(false);


  function copy() {
    const content = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const preRef = useRef(null);

  return (
    <div className={styles.preContainer}>
      <pre {...props} ref={preRef}>
        <div className={styles.absolute}>
          <button className={styles.btn} onClick={copy}>
            {copied ? <FcCheckmark /> : <BiCopy />}
          </button>
        </div>

        {children}
      </pre>
    </div>
  );
};
export default Pre;

