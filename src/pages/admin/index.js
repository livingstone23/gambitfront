import { useState } from "react";
import { Container, Tab } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { BasicLayout } from "@/layouts";
import { Search  } from "@/components/Shared";
import { Product, Category } from "@/components/Admin";
import styles  from "./admin.module.scss";

export default function AdminPage() {

    const [reload, setReload] = useState(false);
    const { isAdmin } = useAuth();
    const router = useRouter();

    const onReload = () => setReload((prevState) => !prevState)

    if(!isAdmin) {
        router.push("/")
        return null;
    }

    const panes = [
        {
            menuItem: "Productos",
            render: () => (
                <Tab.Pane>
                    <div className={styles.actions} > 
                        <Search queryName="searchAdmin"/>
                        <Product.AddProduct onReload={onReload} />
                    </div>
                    
                    <Product.ListProducts  reload={reload} onReload={onReload} />

                </Tab.Pane>
            )
        },
        {
            menuItem: "Categorías",
            render: () => (
                <Tab.Pane>
                    <div className={styles.actions} > 
                        <div />
                        <Category.AddCategory onReload={onReload} />
                    </div>
                    
                    <Category.ListCategories reload={reload} onReload={onReload} />

                </Tab.Pane>
            )
        },
        {
            menuItem: "Usuarios",
            render: () => (
                <Tab.Pane>
                   
                    <h2>Usuarios...</h2>
                </Tab.Pane>
            )
        },
    ];

    return (
        <BasicLayout>
            <Container>
                <Tab panes={panes} className={styles.tabs} />
            </Container>
        </BasicLayout>
    );
}
