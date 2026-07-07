import React from "react";
import { SlPeople } from "react-icons/sl";

export const Rtopics = ({ title, desc, members }) => {
  return (
    <div
      className="
        border-l-4 border-sky-600 dark:border-sky-200
        bg-white dark:bg-gray-800
        p-4 rounded-xl shadow-sm
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
        h-full
      "
    >
      <h2 className="
        text-base font-bold
        text-gray-800 dark:text-gray-100
        mb-2
      ">
        {title}
      </h2>

      <p className="
        text-sm
        text-gray-600 dark:text-gray-300
        leading-6
      ">
        {desc.length > 60
          ? desc.substring(0, 60) + "..."
          : desc}
      </p>

      <div className="
        flex items-center mt-4
        text-sky-600 dark:text-sky-300
      ">
        <SlPeople
          size="0.9rem"
          className="mr-2"
        />

        <span className="text-xs">
          {members}
        </span>
      </div>
    </div>
  );
};