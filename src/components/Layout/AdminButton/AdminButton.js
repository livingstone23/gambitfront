import { Icon } from "semantic-ui-react";
import Link from "next/link";
import styles from "./AdminButton.module.scss";

export function AdminButton() {



  return (
    <Link href="/admin" className={styles.AdminButton}>
        <Icon name="configure" />
        Admin
    </Link>
  )
}
