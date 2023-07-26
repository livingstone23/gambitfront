import { Loader } from "semantic-ui-react";
import  styles from "./Loading.module.scss";
import { Separator } from "../Separator";

export function Loading(props) {

    const {text = "Cargando", top=0} = props



  return (
    <>
        <Separator height={top} />
        <Loader active inline="centered" className={styles.Loading}>
            {text}
        </Loader>


    </>
  )
}
