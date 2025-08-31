import { useReducer, useState } from "react"
import { BookingForm } from "./BookingForm.js";
import { fetchAPI, submitAPI } from '../apiCalls.js'
import { useNavigate } from "react-router";
export function timesReducer(state, date) {
    console.log(date)
    const convertedDate = new Date(date)
    const times = fetchAPI(convertedDate);
    return times;
}
export function initialiseTimes() {
    const date = new Date;
    const times = fetchAPI(date);
    return times;
}
export default function Booking() {
    const navigate = useNavigate();
    function submitForm(formData) {
        const apiVal = submitAPI(formData);
        if (apiVal === true) {
            navigate('/confirmed');
        }
    }
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const [availableTimes, updateTimes] = useReducer(timesReducer, initialiseTimes());
    return (
        <section>
            <BookingForm
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                submitForm={submitForm}
            />
        </section>
    )
}