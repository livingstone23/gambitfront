import { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import styles from "./LoginForm.module.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form"
import Link from "next/link";
import { useRouter } from "next/router"
import { authCtrl } from '@/api'
import { useAuth } from "@/hooks";


export function LoginForm() {

    const { login } = useAuth();


    const router = useRouter();
    //const { query } = router;
    //const [ loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
            
                const response = await authCtrl.login(formValue.email, formValue.password)
                await login();
                router.push("/");

            } catch (error) {
                console.error(error);
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

                <Form.Button type="submit" fluid loading={formik.isSubmitting}>
                    Iniciar Sesión
                </Form.Button>
            
        </Form>

        <p className={styles.register}>¿Eres un cliente nuevo?</p>
        <Button as={Link} href="/join/register" fluid basic>
            Crear cuenta
        </Button>

    </>
  );
}
