"use client";

import React, { useEffect, useState } from "react";
import TimeBox from "./TimeBox.jsx";
import SecondsRing from "./SecondsRing.jsx";

const LifeCounter = () => {
    function getISTDate() {
      const now = new Date();
      return new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours() + 5,
        now.getUTCMinutes() + 30,
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
      ));
    }

    const birthDateIST = new Date(Date.UTC(2002, 9, 25, 0, 0, 0)); 
  
    const [time, setTime] = useState(null);

    useEffect(() => {
      setTime(calculateAge());
    }, []);

    useEffect(() => {
      if (time) {
        console.log('birthDateIST:', birthDateIST);
        console.log('nowIST:', getISTDate());
        console.log('totalSeconds:', time.totalSeconds);
      }
    }, [time]);

    

    function calculateAge() {
      const nowIST = getISTDate();
      const diff = nowIST - birthDateIST;

      //current age (accurate)
      let seconds = nowIST.getSeconds() - birthDateIST.getSeconds();
      let minutes = nowIST.getMinutes() - birthDateIST.getMinutes();
      let hours = nowIST.getHours() - birthDateIST.getHours();
      let days = nowIST.getDate() - birthDateIST.getDate();
      let months = nowIST.getMonth() - birthDateIST.getMonth();
      let years = nowIST.getFullYear() - birthDateIST.getFullYear();

      //total stat
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(diff / (1000 * 60));
      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const totalWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const previousMonth = new Date(nowIST.getFullYear(), nowIST.getMonth(), 0).getDate();
        days += previousMonth;
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

    return {
      years,
      months,
      weeks: totalWeeks,
      days,
      hours,
      minutes,
      seconds,


      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateAge());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center py-10 px-3 md:px-6  bg-gradient-to-br from-slate-900 to-slate-950 ">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-4 md:p-8 w-full max-w-6xl ">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-10">My Life Counter(IST)</h2>

        {time && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10">
              <TimeBox label="Years" value={time.years} />
              <TimeBox label="Months" value={time.months} />
              <TimeBox label="Days" value={time.days} />
              <TimeBox label="Hours" value={time.hours} />
              <TimeBox label="Minutes" value={time.minutes} />
              <TimeBox label="Seconds" value={time.seconds} />
              <SecondsRing seconds={time.seconds}/>
            </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-4 md:mb-6">
          Total Life Stats
        </h3>

            <div className="flex md:grid md:grid-cols-4 gap-3 md:gap-6 overflow-x-auto md:overflow-visible pb-2">
              <div className="min-w-[120px] md:min-w-0">
              <TimeBox label="Total Weeks" value={time.weeks} />
              </div>
              <div className="min-w-[140px] md:min-w-0">
              <TimeBox label="Total Days" value={time.totalDays} />
              </div>
              <div className="min-w-[140px] md:min-w-0"><TimeBox label="Total Hours" value={time.totalHours} /></div>
              <div className="min-w-[180px] md:min-w-0"><TimeBox label="Total Minutes" value={time.totalMinutes} /></div>
              <div className="min-w-[200px] md:min-w-0"><TimeBox label="Total Seconds" value={time.totalSeconds} /></div>              
            </div>
          </>
        )}
         <div className="text-center">
        <span>Made with &hearts;</span>
      </div>
      </div>
     
    </div>
  );
};

export default LifeCounter;
