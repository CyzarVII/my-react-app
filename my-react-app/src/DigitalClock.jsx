import React, { useState, useEffect } from 'react'; 
// Importing React and its hooks `useState` and `useEffect` for managing state and side effects

function DigitalClock() {

    // Initializing state variable 'time' with the current date/time.
    // 'setTime' is used to update this state.
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Setting up an interval that updates the 'time' state every second.
        const intervalId = setInterval(() => {
            setTime(new Date()); // Updates time to the current date and time every second.
        }, 1000);

        // Cleanup function: clears the interval when the component unmounts to prevent memory leaks.
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this effect runs only on component mount/unmount.

    // Function to format the time into a 12-hour format with AM/PM and zero-padded minutes and seconds.
    function formatTime() {
        let hours = time.getHours(); // Get the current hour (0-23).
        let minutes = time.getMinutes(); // Get the current minutes (0-59).
        let seconds = time.getSeconds(); // Get the current seconds (0-59).
        const meridiem = hours >= 12 ? "PM" : "AM"; // Determine AM or PM based on the hour.

        // Convert 24-hour time to 12-hour format and handle the case where 12 is displayed as "12".
        hours = hours % 12 || 12;
        // Zero-pad minutes and seconds so they always appear as two digits.
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        // Return the formatted time string in the format "hh:mm:ss AM/PM".
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    // Helper function to pad a number with leading zero if it's less than 10.
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    // JSX for rendering the digital clock.
    // The time is displayed inside a div, dynamically updated every second.
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span> {/* Display the formatted time */}
            </div>
        </div>
    );
}

export default DigitalClock;
