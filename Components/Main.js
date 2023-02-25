
import styles from "@/styles/Main.module.css";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <Image 
        src="/image/icon-logo.png" 
        width="40" 
        height="40" 
        alt="logo" 
        className={styles.imgLogo}
        />
       
        <h1 className={styles.h1}>
          Find<span>.</span>y
        </h1>
        <Image
        src="/image/Ilustracao.png"
        width="400"
        height="400"
        alt="Ilustração"
        className={styles.imgIustration}
        />
        <Image
        src="/image/circle.png"
        width="180"
        height="180"
        alt="circle"
        />
      </div>
    </>
  );
}
