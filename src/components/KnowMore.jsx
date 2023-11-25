"use client"
import { svgData } from "@/assets/svg";
import React from "react";

const KnowMore = () => {

  return (
    <section className="bg-[white] p-[3rem]">
      
      <div className="text-[black] text-[1.5rem] font-Cabin">
        Know more about Singapore as a traveler ✈️
      </div>
      <div className="text-[#A9ACAC] pb-[2.5rem]">
        Understand more about the country
      </div>

      <div className="shadow-2xl flex justify-between rounded-t-[1.25rem] overflow-hidden">
        {svgData.map((svg, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-[2.5rem] gap-[0.5rem] text-gray-inactive hover:bg-[#F6EDFF] hover:text-blue-active"
          >
            <div dangerouslySetInnerHTML={{ __html: svg.image }} />
            <span className="font-[Cabin]">{svg.title}</span>
          </div>
        ))}
      </div>

      <div className="rounded-b-[1.25rem] bg-[white] shadow-2xl">
        <ul className="list-disc text-[#5C5F5F] leading-9 p-[2.5rem] pb-[6.5rem]">
          <li>You must be a citizen of India.</li>
          <li>
            You must have a valid passport that is valid for at least six months
            beyond the date of your travel.
          </li>
          <li>You must have a confirmed return ticket to India.</li>
          <li>
            You must have proof of the accommodation or hotel reservation.
          </li>
          <li>
            You must have sufficient funds to cover the expenses during your
            stay in Dubai.
          </li>
        </ul>
      </div>

    </section>
  );
};

export default KnowMore;
