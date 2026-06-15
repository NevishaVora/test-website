"use client"
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().matches(/^[a-zA-Z\s]+$/, "Name must contain only letters").required("First Name is required"),
    lastName: Yup.string().matches(/^[a-zA-Z\s]+$/, "Name must contain only letters").required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    contactNumber: Yup.string().matches(/^[0-9]\d{9}$/, "Phone Number must be 10 digits").required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
});

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            message: ""
        },
        onSubmit: async () => {
        },
        validationSchema: validationSchema,
        validateOnChange: true,
    })

    return (
        <form onSubmit={formik.handleSubmit} className="!mt-10 w-[90%] mx-auto space-y-3 lg:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                <div className="space-y-1 w-full">
                    <label className="text-sm md:text-base font-medium">First Name</label>
                    <input type='text' name='firstName' placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-2 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                    {formik?.errors?.firstName && formik?.touched?.firstName ? <p className="text-red-500 text-sm">*{formik?.errors?.firstName}
                    </p> : null}
                </div>
                <div className="space-y-1 w-full">
                    <label className="text-sm md:text-base font-medium">Last Name</label>
                    <input type='text' name='lastName' placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-2 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                    {formik?.errors?.lastName && formik?.touched?.lastName ? <p className="text-red-500 text-sm">*{formik?.errors?.lastName}
                    </p> : null}
                </div>
            </div>
            <div className="space-y-1 w-full">
                <label className="text-sm md:text-base font-medium">Email</label>
                <input type='email' name='email' placeholder="Email" value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-2 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                {formik?.errors?.email && formik?.touched?.email ? <p className="text-red-500 text-sm">*{formik?.errors?.email}
                </p> : null}
            </div>
            <div className="space-y-1 w-full">
                <label className="text-sm md:text-base font-medium">Contact Number</label>
                <input type='number' name='contactNumber' placeholder="Contact Number" value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-2 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                {formik?.errors?.contactNumber && formik?.touched?.contactNumber ? <p className="text-red-500 text-sm">*{formik?.errors?.contactNumber}
                </p> : null}
            </div>
            <div className="space-y-1 w-full">
                <label className="text-sm md:text-base font-medium">Message</label>
                <textarea name="message" rows={4} cols={50}
                    placeholder="Message" value={formik.values.message} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-2 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`}
                ></textarea>
                {formik?.errors?.message && formik?.touched?.message ? <p className="text-red-500 text-sm">*{formik?.errors?.message}
                </p> : null}
            </div>
            <button type="submit" className="!mt-5 w-full text-center border-2 border-[--primary-theme-color] bg-[--primary-shadow-color] py-2 rounded-lg font-semibold text-lg hover:bg-[--primary-theme-color] hover:text-[--white] transition-all ease-in-out duration-500">Send Message</button>
        </form>
    )
}

export default ContactForm