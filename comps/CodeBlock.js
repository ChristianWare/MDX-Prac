import { useRef, useState } from "react";
import styles from "../styles/CodeBlock.module.css";
import { BiCopy } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";

const CodeBlock = ({ children }) => {
  const preRef = useRef(null);
  const [copied, setCopied] = useState(false);

  function copy() {
    const content = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }


  return (
    <div className={styles.codeBlock}>
      <pre ref={preRef}>
        {children}
        <button onClick={copy} className={styles.copy}>
          {copied ? <FcCheckmark /> : <BiCopy />}
        </button>
      </pre>
    </div>
  );
};
export default CodeBlock;
