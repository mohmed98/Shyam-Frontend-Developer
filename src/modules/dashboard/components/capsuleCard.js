import React from "react";

const CapsuleCard = ({
  header = "",
  description = "",
  active = "",
  landing = "",
}) => {
  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {header}
          </h3>
          <span
            className={`inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 ${
              active === "destroyed"
                ? "bg-red-100 text-red-800"
                : active === "retired"
                ? "bg-yellow-100 text-yellow-800"
                : active === "unknown" && "bg-gray-100 text-gray-800"
            }`}
          >
            {active}
          </span>
        </div>
        <p className="mt-1 text-start truncate text-sm text-gray-500">
          {description}
        </p>
        <p className="mt-1 text-start truncate text-sm text-gray-500">
          {landing}
        </p>
      </div>
    </div>
  );
};

export default CapsuleCard;
