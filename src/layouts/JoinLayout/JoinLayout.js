import { useEffect } from "react";
import { Container, Icon } from "semantic-ui-react";
import { map } from "lodash"
import {useAuth} from "@/hooks";
import { useRouter} from "next/router";
import styles from "./JoinLayout.module.scss";
import { Layout } from "@/components/Layout"
import { data} from "./JoinLayout.data"

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
                <div className={styles.left}>
                    {map(data, (item, index) => (
                        <div key={index}>
                            <Icon name={item.icon} />
                            <div>
                                <h3>{item.title}</h3>
                                <span>{item.descripcion}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.right}>{children}</div>
            </div>
        </Container>
    );
}

export default JoinLayout