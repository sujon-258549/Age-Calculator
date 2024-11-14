'use client'
import { useState } from 'react';
import './from.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaCalendarAlt, FaCalendarMinus, FaHourglassStart } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { GiAbstract030, GiPodiumSecond } from 'react-icons/gi';
import { WiDayWindy } from 'react-icons/wi';
const InputFrom = () => {
    // Define the state type for year, month, and day
    type DateResult = {
        day: number;
        month: number;
        year: number;
    }

    // Set state to store the calculated result
    const [userResult, setUserResult] = useState<DateResult | null>(null);
    const [totalMonts, setTotalMonths] = useState(null)
    const [totalDay, setTotalMDay] = useState(null)
    const [totalhoure, setTotalHoure] = useState(null)
    const [totalMinit, setTotalMinit] = useState(null)
    const [totalSecend, setTotalSecend] = useState(null)
    console.log(userResult); // Checking the result in the console
    const [textMonth, setTextMonth] = useState<number>(1);
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Access form data using form elements' names
        const form = e.target as HTMLFormElement;
        const day = Number(form.day.value);
        const month = textMonth;
        const year = Number(form.year.value);

        const date = new Date();
        const currentDay = date.getDate();
        const currentMonth = date.getMonth() + 1; // Months are 0-indexed
        const currentYear = date.getFullYear();

        // Calculate the difference
        let yearDifference = currentYear - year;
        let monthDifference = currentMonth - month;
        let dayDifference = currentDay - day;
        const inputDate = new Date(year, month - 1, day);

        if (day < 0 || !Number.isInteger(day)) {
            dayDifference += 30; // Assuming average month length for simplicity
            monthDifference -= 1;
            toast('Yout Day number is low')
            return
        }
        if (day > 31) {
            toast('Yout Day number is high')
            return
        }
        if (month < 0 || !Number.isInteger(month)) {
            toast('Yout Month number is low')
            return
        }
        if (month > 12) {
            toast('Yout month number is high')
            return
        }
        if (year < 0 || !Number.isInteger(year)) {
            toast('Yout year number is low')
            return
        }

        if (dayDifference < 0) {
            dayDifference += 31; // Assuming average month length for simplicity
            monthDifference -= 1;
        }
        if (monthDifference < 0) {
            monthDifference += 12;
            yearDifference -= 1;
        }


        let totalMonth = (yearDifference * 12) + monthDifference + 1
        setTotalMonths(totalMonth)

        const totalDaysCalc = Math.floor((date.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24));
        console.log("totalday0000000", totalDaysCalc)

        setTotalMDay(totalDaysCalc)
        // houre
        const calCulateTotalHouse = totalDaysCalc * 60
        setTotalHoure(calCulateTotalHouse)

        // total minit
        const calCulateTotalMinit = calCulateTotalHouse * 60
        setTotalMinit(calCulateTotalMinit)
        // total secend
        const calCulateTotalsecend = calCulateTotalMinit * 60
        setTotalSecend(calCulateTotalsecend)
        // Set the result
        setUserResult({ year: yearDifference, month: monthDifference, day: dayDifference });
    };

    return (
        <section className='mx-4'>
            <div className='max-w-4xl mx-auto px-5 py-10   bg-[#00000082] my-20' style={{ boxShadow: '5px 5px 5px green' }}>



                <div>

                    <ToastContainer />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold pb-10 ">
                            Year Calculate From
                        </h2>
                   
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-3 justify-center flex-wrap bg-transparent'>
                            <fieldset className="fieldset ">
                                <legend className='font-semibold'>Day:</legend>
                                <input className="input" name="day" placeholder="Day........" type="text" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className='font-semibold'>Month:</legend>
                                <select onChange={(e) => setTextMonth(Number(e.target.value))} className='w-40 bg-transparent text-white focus:outline-none px-2'>
                                    <option className='text-black' value="1">January</option>
                                    <option className='text-black' value="2">February</option>
                                    <option className='text-black' value="3">March</option>
                                    <option className='text-black' value="4">April</option>
                                    <option className='text-black' value="5">May</option>
                                    <option className='text-black' value="6">June</option>
                                    <option className='text-black' value="7">July</option>
                                    <option className='text-black' value="8">August</option>
                                    <option className='text-black' value="9">September</option>
                                    <option className='text-black' value="10">October</option>
                                    <option className='text-black' value="11">November</option>
                                    <option className='text-black' value="12">December</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className='font-semibold'>Year:</legend>
                                <input className="input" name="year" placeholder="Year........." type="text" />
                            </fieldset>
                        </div>
                        <div className='mt-5 flex justify-center w-[140px] mx-auto ' style={{ boxShadow: "5px 5px 5px green" }}>

                            <button className="button">
                                <div className="outline"></div>
                                <div className="state state--default">
                                    <div className="icon">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g style={{ filter: 'url(#shadow)' }}>
                                                <path
                                                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                                    fill="currentColor"
                                                ></path>
                                                <path
                                                    d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                            <defs>
                                                <filter id="shadow">
                                                    <feDropShadow
                                                        dx="0"
                                                        dy="1"
                                                        stdDeviation="0.6"
                                                        floodOpacity="0.5"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p>
                                        <span style={{ '--i': 0 }}>S</span>
                                        <span style={{ '--i': 1 }}>u</span>
                                        <span style={{ '--i': 2 }}>b</span>
                                        <span style={{ '--i': 3 }}>m</span>
                                        <span style={{ '--i': 4 }}>i</span>
                                        <span style={{ '--i': 5 }}>t</span>

                                    </p>
                                </div>
                                <div className="state state--sent">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            strokeWidth="0.5"
                                            stroke="black"
                                        >
                                            <g style={{ filter: 'url(#shadow)' }}>
                                                <path
                                                    fill="currentColor"
                                                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                                ></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <p>
                                        <span style={{ '--i': 0 }}>S</span>
                                        <span style={{ '--i': 1 }}>u</span>
                                        <span style={{ '--i': 2 }}>b</span>
                                        <span style={{ '--i': 3 }}>m</span>
                                        <span style={{ '--i': 4 }}>i</span>
                                        <span style={{ '--i': 5 }}>t</span>
                                    </p>
                                </div>
                            </button>

                        </div>
                    </form>
                </div>

                <div className='max-w-[400px] mx-auto pt-10'>
                    {
                        userResult ? (
                            <div className='flex  flex-wrap justify-center gap-2 flex-col'>
                                <h3 className="text-black items-center text-[16px]  flex gap-2 font-bold  ">
                                    <FaCalendarAlt /> Total age = {`${userResult.year} years, ${userResult.month} months, ${userResult.day} days`}
                                </h3>
                                <h3 className="items-center text-[16px]  flex gap-2   font-bold  text-black">
                                    <GiAbstract030 />  Total Months = {totalMonts} Month
                                </h3>
                                <h3 className="items-center text-[16px]  flex gap-2 font-bold  text-black">
                                    <WiDayWindy />  Total Days = {totalDay} Day
                                </h3>
                                <h3 className="items-center text-[16px]  flex gap-2   font-bold  text-black">
                                    <FaHourglassStart />  Total Hours = {totalhoure} Houre
                                </h3>
                                <h3 className="items-center text-[16px]  flex gap-2   font-bold  text-black">
                                    <FaCalendarMinus />  Total Minutes = {totalMinit} Month
                                </h3>
                                <h3 className="items-center text-[16px]  flex gap-2   font-bold  text-black">
                                    <GiPodiumSecond />  Total Seconds = {totalSecend} Secend
                                </h3>
                            </div>
                        ) : (
                            <h3 className="text-[16px] md:text-3xl  pb-5 font-bold text-black">
                                Please Input
                            </h3>
                        )
                    }
                </div>
            </div>

        </section>
    );
};

export default InputFrom;
