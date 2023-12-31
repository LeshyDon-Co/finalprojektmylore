"use client";
import MyLore from '../assets/my-lore-schriftzug.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css"

// import { signOut, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';


export default function Home() {

  return (
    
    <div className={styles.body}>
      <main className={styles.maincontainer}>
        <Image
          className={styles.myloretitle}
          src={MyLore}
          width={800}
          height={800}
          alt="Name of the game as Logo in 3D"
        />
      <Link href="/impressum" className={styles.impressum}></Link>
      </main>
    </div>
  );
};

