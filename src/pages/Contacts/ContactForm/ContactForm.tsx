import { useFormik } from 'formik';

export const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            emailAddress: '',
            mobileNum: '',
            emailSubj: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className="w-full flex flex-col justify-center items-center text-white" onSubmit={formik.handleSubmit}>
            <div className="flex justify-between mb-[6px] mt-[6px] w-1/2 2sm:w-full">
                <input
                    className="w-[49%] h-[55px] bg-gray-700 p-3 rounded-lg outline-none"
                    placeholder='Full Name'
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                />
                <input
                    className="w-[49%] h-[55px] bg-gray-700 p-3 rounded-lg outline-none"
                    placeholder='Email Address'
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.emailAddress}
                />
            </div>
            <div className="flex justify-between mb-[6px] mt-[6px] w-1/2 2sm:w-full">
                <input
                    className="w-[49%] h-[55px] bg-gray-700 p-3 rounded-lg outline-none"
                    placeholder="Mobile Number"
                    id="mobileNum"
                    name="mobileNum"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.mobileNum}
                />
                <input
                    className="w-[49%] h-[55px] bg-gray-700 p-3 rounded-lg outline-none"
                    placeholder="Email Subjecct"
                    id="emailSubj"
                    name="emailSubj"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.emailSubj}
                />
            </div>
            <textarea
                className="h-72 w-1/2 mb-[6px] mt-[6px] bg-gray-700 p-3 rounded-lg outline-none 2sm:w-full resize-none"
                placeholder="Your Message"
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <div className="relative mt-[12px]">
                <button className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white relative z-10">Send Message</button>
                <button className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white absolute bottom-0 left-0 blur z-0">Send Message</button>
            </div>
        </form>
    );
};