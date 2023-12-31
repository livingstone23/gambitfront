import { Button, Form} from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router"
import { useFormik } from "formik";
import { authCtrl } from "@/api"
import styles from "./RegisterForm.module.scss";
import {initialValues, validationSchema } from "./RegisterForm.form"
import { Amplify } from "aws-amplify";


export function RegisterForm() {
  
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue.email)
        console.log(formValue.password)

        const response = await authCtrl.register(formValue.email, formValue.password)
        console.log(response);
        router.push(`/join/confirmation?email=${formValue.email}`)

      } catch (error) {
        console.log("catch error");
        console.error(error)
      }
    },
  });

  return (
    <>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Input 
            name="email" 
            placeholder="Correo electronico" 
            value={formik.values.email}
            onChange={formik.handleChange}
            error ={formik.errors.email}
            />
          <Form.Input 
            type="password" 
            name="password" 
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error ={formik.errors.password}
            />
          <Form.Input 
            type="password" 
            name="repeatPassword"
            placeholder="Repetir contraseña"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={formik.errors.repeatPassword}
          />
          <Form.Button type="submit" fluid loading={formik.isSubmitting}>
            Crear cuenta
          </Form.Button>
        </Form>

        <p className={styles.login}>Ya tengo una cuenta</p>
        <Button as={Link} href="/join/login" fluid basic>
          Iniciar sesión
        </Button>
        
    </>
  );
}
