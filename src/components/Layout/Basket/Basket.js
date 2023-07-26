import { Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import styles from "./Basket.module.scss";


const total = 6;

export function Basket() {
  return (
   <Link href="/basket" className={styles.Basket}>
    <Icon name="cart" />
    {total > 0 && (
        <Label circular color="teal">
            {total}
        </Label>
    )}
    Mi cesta
   </Link>
  );
}
