import React from 'react';
import axios from "axios";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {toast} from 'react-toastify';

const Login = (props) => {

    const baseURL = 'https://localhost:44381/';

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: yup.object({
            username: yup.string()
                .strict()
                .trim()
                .required('this field req'),
            password: yup.string()
                .strict()
                .trim()
                .required('this field req')
        }),

        onSubmit: (data) => {
            axios.post(baseURL + `identity/login`, data)
                .then(res => {
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    props.history.push('/home');
                    console.log(res.data);
                })
                .catch(err => {
                    toast.error(err.response.data)
                })
        }
    });
    return (
        <>
            <h4>Login</h4>
            <div className="row justify-content-center ">
                <div className="col-md-4">
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label>Name</label>
                            <input name="username" className="form-control" type="text" onChange={formik.handleChange}
                                   value={formik.values.username}/>
                            {formik.errors.username ?
                                <div className="text-danger">{formik.errors.username}</div> : null}
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input name="password" className="form-control" type="text" onChange={formik.handleChange}
                                   value={formik.values.password}/>
                            {formik.errors.password ?
                                <div className="text-danger">{formik.errors.password}</div> : null}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary " type="submit">Submit</button>
                        </div>
                        <details open>
                            <summary>login details</summary>
                            myTest test123
                        </details>
                    </form>
                </div>

            </div>
        </>
    )
}
export default Login;