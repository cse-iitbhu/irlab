import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ResourceCard = (props) => {
  const [open, setOpen] = useState(false);

  const isInternalLink =
    props.url &&
    (props.url.startsWith("/") || !props.url.includes("http"));

return (
  <>
    {/* Compact Card */}
    <div
      onClick={() => setOpen(true)}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <img
        src={props.logo}
        alt={props.title}
        className="w-full h-64 object-contain rounded-lg mb-3 bg-white dark:bg-gray-700"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800 dark:text-white line-clamp-2">
          {props.title}
        </h2>

        <p className="text-sky-600 dark:text-sky-400 mt-2 text-sm">
          {props.type}
        </p>
      </div>
    </div>

    {/* Popup */}
    {open && (
      <div
        className="fixed inset-0 bg-black/60 flex justify-center items-start pt-24 z-50"
        onClick={() => setOpen(false)}
      >
        <div
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white w-[90%] md:w-[750px] max-h-[85vh] overflow-y-auto rounded-xl p-6 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={props.logo}
            alt={props.title}
            className="w-full h-64 object-contain rounded-lg mb-3 bg-white dark:bg-gray-700"
          />

          <h2 className="text-3xl font-bold mb-4 text-sky-600 dark:text-sky-400">
            {props.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {props.desc}
          </p>

          {props.author && (
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <b>Author:</b> {props.author}
            </p>
          )}

          {props.supervisor && (
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <b>Supervisor:</b> {props.supervisor}
            </p>
          )}

          {props.guidance && (
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <b>Guidance:</b> {props.guidance}
            </p>
          )}

          {props.members && (
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <b>Members:</b> {props.members}
            </p>
          )}

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            <b>Type:</b> {props.type}
          </p>

          <div className="flex gap-3 flex-wrap">

            {isInternalLink ? (
              <Link
                to={props.url}
                className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-all"
              >
                Open Resource
              </Link>
            ) : (
              <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
                className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-all"
              >
                Open Resource
              </a>
            )}

            {props.appleUrl && (
              <a
                href={props.appleUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all"
              >
                App Store
              </a>
            )}

            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Close
            </button>

          </div>
        </div>
      </div>
    )}
  </>
);
};