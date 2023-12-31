import { useState, useEffect } from "react";
import {Form, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { authCtrl } from '@/api'
import { Separator } from "@/components/Shared";
import { initialValues, validationSchema } from "./ConfirmationForm.form"
import { Auth } from "aws-amplify";


export function ConfirmationForm() {

    const router = useRouter();
    const { query } = router;
    const [ loading, setLoading] = useState(false)


    useEffect(() => {

    formik.setFieldValue("email", query.email);

    }, [query])


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
            
                await authCtrl.confirmation(formValue.email, formValue.code)
                router.push("/join/login");

            } catch (error) {
                console.log(error);
            }
        },

    });


    //Funcion para reenvio de correo
    const onResendcode = async () => {

        formik.setFieldError("email",false);

        if(!formik.values.email) {
            formik.setFieldError("email",true);
            return;
        }

        setLoading(true)
        await authCtrl.resendCode(formik.values.email);
        setLoading(false)


        console.log("SEND CODE");
    }
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
                name="code" 
                placeholder="Codigo de confirmación" 
                value={formik.values.code}
                onChange={formik.handleChange}
                error ={formik.errors.code}
            />
            
            <Form.Button type="submit" fluid loading={formik.isSubmitting}>
                Activar usuario
            </Form.Button>
            </Form>


            <Separator height={50} />

            <Button fluid basic onClick={onResendcode} loading={loading}>
                Reenviar codigo de verificación
            </Button>

    </>
  )
}
