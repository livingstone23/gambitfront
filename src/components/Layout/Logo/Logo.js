import Link from "next/link";
import { Image } from "semantic-ui-react";

export function Logo() {
  return (
    <div>
        <Link href="/">
          <Image src="/images/logo-texto.png" alt="AWS" />
        </Link>
    </div>
  );
}
