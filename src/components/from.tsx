'use client'
import { useState } from 'react';
import './from.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaCalendarAlt, FaCalendarMinus, FaHourglassStart } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { GiAbstract030, GiPodiumSecond } from 'react-icons/gi';
import { WiDayWindy } from 'react-icons/wi';
import { GoFileSubmodule } from 'react-icons/go';
// import SubmitButtons from './SubmitButtons';
const InputFrom = () => {
    // Define the state type for year, month, and day
    type DateResult = {
        day: number;
        month: number;
        year: number;
    }

    // Set state to store the calculated result
    const [userResult, setUserResult] = useState<DateResult | null>(null);
    const [totalMonts, setTotalMonths] = useState<number | null>(null)
    const [totalDay, setTotalMDay] = useState<number | null>(null)
    const [totalhoure, setTotalHoure] = useState<number | null>(null)
    const [totalMinit, setTotalMinit] = useState<number | null>(null)
    const [totalSecend, setTotalSecend] = useState<number | null>(null)
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



        const totalMonth = (yearDifference * 12) + monthDifference + 1
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
        <section className='mx-4 pt-10'>
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
                                <input className="input focus:outline-none text-white bg-transparent py-1 px-2 " name="day" required placeholder="Day........" type="number" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className='font-semibold'>Month:</legend>
                                <select required onChange={(e) => setTextMonth(Number(e.target.value))} className='w-40 bg-transparent text-white focus:outline-none px-2'>
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
                                <input className="input py-1 px-2 focus:outline-none bg-transparent text-white" required name="year" placeholder="Year........." type="number" />
                            </fieldset>
                        </div>
                        <div className='flex justify-center pt-10'>
                     
                            <button className="download-button">
                                <div className="icon">
                                <GoFileSubmodule />
                                </div>
                                <div className="label ml-5">Submit</div>
                                <div className="loading">
                                    <span></span>
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
