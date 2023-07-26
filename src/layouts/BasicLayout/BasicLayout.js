import { Container } from "semantic-ui-react";
import styles from "./BasicLayout.module.scss";
import { Layout } from "@/components/Layout";
import { useAuth } from "@/hooks";
import { Search } from "@/components/Shared";

export function BasicLayout( props) {

    const { children } = props;
    const { isAdmin, logout } = useAuth();

    return (
        <>
            <button onClick={logout}>LOGOUT</button>
            <div className={styles.border}>
                <Container className={styles.header}>
                    <div className={styles.left}>
                        <Layout.Logo />
                        <Search className={styles.search} />
                    </div>


                    <div>
                        {isAdmin && <Layout.AdminButton />}
                        <Layout.Account />
                        <Layout.Basket />
                    </div>

                </Container>
            </div>

            <div className={styles.border}>
                <Container>
                    <Layout.CategoriesMenu />
                </Container>

            </div>

            {children}
        </>
    );

}
