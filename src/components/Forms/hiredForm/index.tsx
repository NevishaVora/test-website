"use client"

import { capitalize, FormControl, MenuItem, Select } from "@mui/material";
import { HireDeveloperField } from "@src/constant";
import { IHireDeveloperField } from "@src/types";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().matches(/^[a-zA-Z\s]+$/, "Name must contain only letters").required("First Name is required"),
    lastName: Yup.string().matches(/^[a-zA-Z\s]+$/, "Name must contain only letters").required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    jobPost: Yup.string().required("Job Post is required"),
    contactNumber: Yup.string().matches(/^[0-9]\d{9}$/, "Phone Number must be 10 digits").required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
});

const HiredForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            jobPost: "",
            contactNumber: "",
            message: "",
        },
        onSubmit: async () => {
        },
        validationSchema: validationSchema,
        validateOnChange: true,
    })

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-3 lg:space-y-4 w-full bg-[--background-color] rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-3">
                <div className="space-y-1 w-full">
                    <label className="text-sm md:text-md font-medium">First Name</label>
                    <input type='text' name='firstName' placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-3 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                    {formik?.errors?.firstName && formik?.touched?.firstName ? <p className="text-red-500 text-sm">*{formik?.errors?.firstName}
                    </p> : null}
                </div>
                <div className="space-y-1 w-full">
                    <label className="text-sm md:text-md font-medium">Last Name</label>
                    <input type='text' name='lastName' placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-3 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                    {formik?.errors?.lastName && formik?.touched?.lastName ? <p className="text-red-500 text-sm">*{formik?.errors?.lastName}
                    </p> : null}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-3">
                <div className="space-y-1 w-full">
                    <label className="text-sm md:text-md font-medium">Email</label>
                    <input type='email' name='email' placeholder="Email" value={formik.values.email} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-3 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                    {formik?.errors?.email && formik?.touched?.email ? <p className="text-red-500 text-sm">*{formik?.errors?.email}
                    </p> : null}
                </div>
                <div className="space-y-1 w-full">
                    <label className="text-sm md:text-md font-medium">Contact Number</label>
                    <input type='number' name='contactNumber' placeholder="Contact Number" value={formik.values.contactNumber} onChange={formik.handleChange}
                        onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-3 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`} />
                    {formik?.errors?.contactNumber && formik?.touched?.contactNumber ? <p className="text-red-500 text-sm">*{formik?.errors?.contactNumber}
                    </p> : null}
                </div>
            </div>
            <div className="w-[100%] space-y-2">
                <label className="text-sm md:text-md font-medium">Select Job Post</label>
                <FormControl fullWidth>
                    <Select
                        name={"jobPost"}
                        value={formik.values.jobPost}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        renderValue={(selected) => {
                            if (Array.isArray(selected)) {
                                return selected.length > 0
                                    ? selected.map(val => HireDeveloperField.find((opt: IHireDeveloperField) => opt.value === val)?.label || val).join(", ")
                                    : <span className="text-[#a7a7a7]">Select Job Post</span>;
                            }
                            const selectedOption = HireDeveloperField?.find((opt: IHireDeveloperField) => opt.value === selected);
                            return selectedOption ? capitalize(selectedOption.label) : <span className="text-[#a7a7a7]">Select Job Post</span>;
                        }}
                        className="bg-[--white]"
                        displayEmpty
                        sx={{
                            padding: "0px",
                            borderRadius: "8px",
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--primary-theme-color)',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#e2e8f0',
                                borderWidth: "2px"
                            },
                        }}
                    >
                        {HireDeveloperField && HireDeveloperField?.map((opt, index) =>
                            <MenuItem value={opt.value} key={index} className="capitalize">{opt.label}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                {formik.errors.jobPost && formik.touched.jobPost ? <p className="text-red-500 text-sm">*{formik.errors.jobPost}</p> : null}
            </div >
            <div className="space-y-1 w-full">
                <label className="text-sm md:text-base font-medium">Message</label>
                <textarea name="message" rows={4} cols={50}
                    placeholder="Message" value={formik.values.message} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className={`border-2 border-slate-200 p-2 w-[100%] rounded-lg focus:border-[--primary-theme-color] outline-none`}
                ></textarea>
                {formik?.errors?.message && formik?.touched?.message ? <p className="text-red-500 text-sm">*{formik?.errors?.message}
                </p> : null}
            </div>
            <button type="submit" className="!mt-5 w-full text-center border-2 border-[--primary-theme-color] bg-[--primary-shadow-color] py-2 rounded-lg font-semibold text-lg hover:bg-[--primary-theme-color] hover:text-[--white] transition-all ease-in-out duration-500">Apply</button>
        </form>
    )
}

export default HiredForm