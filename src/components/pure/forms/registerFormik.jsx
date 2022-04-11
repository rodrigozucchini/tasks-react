import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const Registerformik = () => {

    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, "El nombre de Usuario es corto")
                .max(20, "El nombre de Usuario es largo")
                .required("Nombre de Usuario es requerido"),
            email: Yup.string()
                .email("Formato invalido de email")
                .required("El email es obligatorio"),
            role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], "Selecciona un Rol: Usuario o Adminitrador")
                    .required("El rol es requerido"),
                    password: Yup.string()
                .min(8, "La contraseña es corta")
                .required("La contraseña es requerida"),
            confirm: Yup.string()
                .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "La contraseña es incorrecta")
            }).required("Debes confirmar la contraseña")
        }
    )

    const submit = (values) => {
        alert("Registrar usuario")
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                // Iniciar valor que tomará
                initialValues={initialValues}
                //Validacion de YUP
                validationSchema={ registerSchema }
                //Evento onSUBMIT
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                    {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur}) => (
                        <Form>
                            <label htmlFor="username">Nombre de Usuario</label>
                            <Field name="username" type="text" placeholder="Tu Nombre de Usario"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" id="email" placeholder="ejemplo@email.com"/>

                                {/*ERRORES DEL EMAIL*/}
                                {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage component="div" name="email" />
                                )
                            }
                                {/*ERORRES DE USUARIOS*/}
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage component="div" name="username" />
                                )
                            }
                                {/*ERRORES DEL PASSWORD*/}
                                <label htmlFor="password">Contraseña</label>
                                <Field name="password" type="password" id="password" placeholder="contraseña"/>
                                
                                {
                                errors.password && touched.password && 
                                (
                                <div>
                                    <ErrorMessage component="div" name="password" />
                                </div>
                                )
                            }

                            {/*ERRORES DEL CONFIRM*/}
                            <label htmlFor="confirm">Contraseña</label>
                            <Field name="confirm" type="password" id="confirm" placeholder="Confirmar contraseña"/>                           
                            
                            {
                                errors.confirm && touched.confirm && 
                                (
                                <div>
                                    <ErrorMessage component="div" name="confirm" />
                                </div>
                                )
                            }

                            <button type="submit">Registrar Cuenta</button>
                            { isSubmitting ? <p>Enviar Registro</p> : null }
                        </Form>
                        )} 

            </Formik>
        </div>
    );
}

export default Registerformik;
