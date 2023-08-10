import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
    const [formData, setFormData] = useState({
        date: "",
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form Data:", formData);
    };


    return(
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date"><h3>Choose date</h3></label>
                <input  id="date" type="date" name="date" required value={formData.date} onChange={(event) =>{
                    handleInputChange(event);
                }}
                />
            </div>
            <div>
                <label htmlFor="time"><h3>Choose time</h3></label>
                <select  id="time" name="time" value={formData.time} onChange={handleInputChange}>
                    {availableTimes.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests"><h3>Number of guests</h3></label>
                <input
                    id="guests"
                    type="number"
                    name="guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="occasion"><h3>Occasion</h3></label>
                <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleInputChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input  type="submit"
                    value="Reserve"
                    aria-label="On Click"
            />
        </form>
    )
}
export default BookingForm;