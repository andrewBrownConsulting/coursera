import { useFormik } from 'formik';
import * as Yup from 'yup';
export function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, updateTimes, submitForm }) {
    const {
        values,
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: {
            time: "00:00",
            date: "",
            guests: null,
            occasion: "Dinner",
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Required"),
            time: Yup.string().required("Required"),
            guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be 10 or less").required("Required"),
            occasion: Yup.string().required("Required"),
        }),
    });
    return (
        <div className='container gy-3'>
            <div className='row text-center'><h1 className='col '>Book a Table</h1></div>
            <form onSubmit={handleSubmit} className='m-auto'>
                <div className='row row-cols-2 g-2 mb-3'>
                    <label htmlFor='res-date' className={touched.date && errors.date && "error"}>Choose Date</label>
                    <input id='res-date' type='date' {...getFieldProps('date')} className={touched.date && errors.date && "error"} required />
                </div>
                <div className='row g-2 mb-3 text-center'>
                    {touched.date && errors.date ? <div className="error">{errors.date}</div> : null}
                </div>
                <div className='row row-cols-2 g-2 mb-3'>
                    <label htmlFor='res-time' className={touched.time && errors.time && "error"}>Choose Time</label>
                    <select id='res-time' value={values.time} onChange={handleChange} {...getFieldProps('time')} className={touched.time && errors.time && "error"}>
                        {availableTimes?.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className='row g-2 mb-3 text-center'>
                    {touched.time && errors.time ? <div className="error">{errors.time}</div> : null}
                </div>
                <div className='row row-cols-2 g-2 mb-3'>
                    <label htmlFor='guests' className={touched.guests && errors.guests && "error"}>Number of Guests</label>
                    <input type='number' placeholder='1' min='1' max='10' id='guests' value={values.guests} onChange={handleChange} {...getFieldProps('guests')} className={touched.guests && errors.guests && "error"} />
                </div>
                <div className='row g-2 mb-3 text-center'>
                    {touched.guests && errors.guests ? <div className="error">{errors.guests}</div> : null}
                </div>
                <div className='row row-cols-2 g-2 mb-3'>
                    <label htmlFor='occasion' className={touched.occasion && errors.occasion && "error"}>Occasion</label>
                    <select id='occasion' value={values.occasion} onChange={handleChange} {...getFieldProps('occasion')} className={touched.occasion && errors.occasion && "error"}>
                        <option>Dinner</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {touched.occasion && errors.occasion ? <div className="error">{errors.occasion}</div> : null}
                </div>
                <div className='row row-cols-1 mb-3'>
                    <button type='submit' className='yellow-btn' disabled={!(Object.keys(errors).length === 0 && Object.keys(touched).length > 0)} aria-label='Make Reservation'>Make Reservation</button>
                </div>
            </form>
        </div>
    )
}