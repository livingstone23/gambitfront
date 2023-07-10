import { useEffect } from "react";
import { Container, container } from "semantic-ui-react";
import {useAuth} from "@/hooks";
import { useRouter} from "next/router";
import styles from "./JoinLayout.module.scss";
import { Layout } from "@/components/Layout"

export function JoinLayout (props) {

    const {children } = props;
    const { user } = useAuth();
    const router = useRouter();

    useEffect (() => {
        if (user) router.push("/");
    },[])
   
    if (user) return null;

    return (
        <Container className={styles.container}>

           <Layout.Logo/>

            <div>
                <div className={styles.left}>INFORMACION</div>

                <div className={styles.right}>{children}</div>
            </div>
        </Container>
    );
}

export default JoinLayout