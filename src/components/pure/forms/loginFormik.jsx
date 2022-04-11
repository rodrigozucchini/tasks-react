import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Formato invalido de email")
            .required("El email es obligatorio"),
        password: Yup.string()
            .required("La contraseña es requerida")
    }
)



const Loginformik = () => {
    
    const initialCredentials = {
        email: "",
        password: ""
    }

    const history = useNavigate();

    return (
        <div>
            <h4>Login Form</h4>
            <Formik 
                // Iniciar valor que tomará
                initialValues={ initialCredentials }
                //Validacion de YUP
                validationSchema={ loginSchema }
                //Evento onSUBMIT
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //Guardar mis datos en el navegador
                    await localStorage.setItem("Credencial", values)
                    history('/profiles')
                }}
            >

                {/*Nosotros obtenemos props de Formik*/}

                    {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur}) => (

                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" id="email" placeholder="ejemplo@email.com"/>
                                {/*ERRORES DEL EMAIL*/}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage component="div" name="email" />
                                )
                            }
                            
                                {/*ERRORES DEL PASSWORD*/}
                                {
                                errors.password && touched.password && 
                                (
                                <div>
                                    <ErrorMessage component="div" name="password" />
                                </div>
                                )
                            }

                            <label htmlFor="password">Contraseña</label>
                            <Field name="password" type="password" id="email" placeholder="contraseña"/>
                            
                            <button type="submit">Ingresar</button>
                            { isSubmitting ? <p>Inicie sesión con su credencial</p> : null }
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default Loginformik;
