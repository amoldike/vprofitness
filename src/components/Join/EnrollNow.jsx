import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EnrollNow.css";

const EMAILJS_SERVICE_ID = "service_sed4bnk";
const EMAILJS_TEMPLATE_ID = "template_27jlmu9";
const EMAILJS_USER_ID = "j3Seofj5xLxkh5zQY";

const validate = (fields) => {
    const errors = {};
    if (!fields.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!fields.email.trim()) errors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) errors.email = "Invalid email format.";
    if (!fields.contact.trim()) errors.contact = "Contact Number is required.";
    else if (!/^\d{10,15}$/.test(fields.contact.replace(/\D/g, ""))) errors.contact = "Enter a valid phone number.";
    if (!fields.age.trim()) errors.age = "Age is required.";
    else if (isNaN(fields.age) || fields.age < 1 || fields.age > 120) errors.age = "Enter a valid age.";
    if (!fields.address.trim()) errors.address = "Address is required.";
    return errors;
};

const EnrollNow = () => {
    const formRef = useRef();
    const [fields, setFields] = useState({
        fullName: "",
        email: "",
        contact: "",
        age: "",
        address: "",
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [msgType, setMsgType] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = validate(fields);
        setErrors(validation);
        if (Object.keys(validation).length > 0) return;
        setSubmitting(true);
        setMessage("");
        setMsgType("");
        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    user_email: fields.email,
                    user_name: fields.fullName,
                    user_contact: fields.contact,
                    user_age: fields.age,
                    user_address: fields.address,
                },
                EMAILJS_USER_ID
            )
            .then(
                () => {
                    setMessage("Enrollment successful! We'll contact you soon.");
                    setMsgType("success");
                    setFields({ fullName: "", email: "", contact: "", age: "", address: "" });
                },
                () => {
                    setMessage("There was an error. Please try again later.");
                    setMsgType("error");
                }
            )
            .finally(() => setSubmitting(false));
    };

    return (
        <section className="enroll-section" aria-labelledby="enroll-title">
            <h1 id="enroll-title" className="stroke-text">Enroll Now</h1>
            <form
                className="enroll-form"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-describedby="enroll-message"
            >

                <label htmlFor="enroll-fullName"></label>
                <input
                    id="enroll-fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="name"
                    value={fields.fullName}
                    onChange={handleChange}
                    required
                    className={errors.fullName ? "enroll-error" : ""}
                />


                <label htmlFor="enroll-email"></label>
                <input
                    id="enroll-email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    className={errors.email ? "enroll-error" : ""}
                />


                <label htmlFor="enroll-contact"></label>
                <input
                    id="enroll-contact"
                    name="contact"
                    type="tel"
                    placeholder="Enter Your Contact Number"
                    autoComplete="tel"
                    value={fields.contact}
                    onChange={handleChange}
                    required
                    className={errors.contact ? "enroll-error" : ""}
                />


                <label htmlFor="enroll-age"></label>
                <input
                    id="enroll-age"
                    name="age"
                    placeholder="Enter Your Age"
                    type="number"
                    min="1"
                    max="120"
                    value={fields.age}
                    onChange={handleChange}
                    required
                    className={errors.age ? "enroll-error" : ""}
                />


                <label htmlFor="enroll-address"></label>
                <textarea
                    id="enroll-address"
                    name="address"
                    placeholder="Enter Your Address"
                    value={fields.address}
                    onChange={handleChange}
                    required
                    className={errors.address ? "enroll-error" : ""}
                />

                <button
                    className="enroll-btn"
                    type="submit"
                    disabled={submitting}
                    aria-busy={submitting}
                >
                    {submitting ? "Submitting..." : "Enroll Now"}
                </button>
                <div
                    id="enroll-message"
                    className={`enroll-message ${msgType} ${message ? "visible" : ""}`}
                    role={msgType === "error" ? "alert" : "status"}
                    aria-live="polite"
                >
                    {message}
                </div>
            </form>
        </section>
    );
};

export default EnrollNow;
