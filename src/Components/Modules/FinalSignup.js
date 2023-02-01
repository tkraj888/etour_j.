import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import './Login.css';

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div> <div className="main">
            <div className="sub-main">
                <div class="p-3">
                    <div >
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Registration</h1>
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>First Name</label> */}
                                <inpute
                                    placeholder='First Name'
                                    type="text"
                                    {...register("First_Name", { required: true, maxLength: 10 })}
                                />
                               
                            </Form.Field>
                            </div>
                            {errors.First_Name && <p>Please Enter Firstname</p>}
                            <div className='second-input'>
                            <Form.Field>
                                
                                {/* <label>Middle_Name</label> */}
                                <input
                                    placeholder='Middle Name'
                                    type="text"
                                // {...register("firstName", { required: true, maxLength: 10 })}
                                />
                            </Form.Field>
                            </div>
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Last Name</label> */}
                                <input
                                    placeholder='Last Name'
                                    type="text"
                                    {...register("Last_Name", { required: true, maxLength: 10 })}
                                />
                            </Form.Field>
                            </div>
                            {errors.Last_Name && <p>Please Enter Lastname</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Email</label> */}
                                <input
                                    placeholder='Email'
                                    type="email"
                                    {...register("UserName",
                                        {
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                />
                            </Form.Field>
                            </div>
                            {errors.email && <p>Please check the Email</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Phone_Number</label> */}
                                <input type='text' placeholder='Enter Mobile Number'
                                    {...register("Phone_Number", {
                                        required: true,
                                        pattern: /^([0-9]{10})$/
                                    })} />
                            </Form.Field>
                            </div>
                            {errors.Phone_Number && <p>Please check the phone number</p>}
                        
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Address_Line</label> */}
                                <input
                                    placeholder='Address Line'
                                    type="text"
                                    {...register("Last_Name", { required: true })}
                                />
                            </Form.Field>
                            </div>
                            {errors.Address_Line && <p>Please Enter Address</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Pincode</label> */}
                                <input type='text' placeholder='Pincode'
                                    {...register("Pincode", {
                                        required: true,
                                        pattern: /^([0-9]{6})$/
                                    })} />
                            </Form.Field>
                            </div>
                            {errors.Pincode && <p>Please check the Pincode</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>City</label> */}
                                <input
                                    placeholder='City'
                                    type="text"
                                    {...register("City", { required: true })}
                                />
                            </Form.Field>
                            </div>
                            {errors.City && <p>Please Enter City</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Country</label> */}
                                <input
                                    placeholder='Country'
                                    type="text"
                                    {...register("Country", { required: true })}
                                />
                            </Form.Field>
                            </div>
                            {errors.City && <p>Please Enter Country</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Password</label> */}
                                <input
                                    placeholder='Password'
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                    })}
                                />
                            </Form.Field>
                            </div>
                            {errors.password && <p>Please check the Password</p>}
                            <div className='second-input'>
                            <Form.Field>
                                {/* <label>Password</label> */}
                                <input
                                    placeholder='confirm_password'
                                    type="password"
                                    {...register("ConfirmPassword", {
                                        required: true,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                    })}
                                />
                            </Form.Field>
                            </div>
                            {errors.confirm_password && <p>Please check the confirm_password</p>}
                            <div className="Signup-button">
                                <Button type='submit'>Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
