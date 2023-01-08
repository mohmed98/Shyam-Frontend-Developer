import React from "react";
import { getDate } from "../../../utils/helper";
import CapsuleCard from "../components/capsuleCard";

const CapsulesList = ({ list = [] }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-1">
      {list.map((item, i) => {
        return (
          <li
            key={`${item.email}-${i}`}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <CapsuleCard
              header={item?.type}
              description={`Mission Launch: ${getDate(item.original_launch)}`}
              landing={`Total Landing: ${item?.landings}`}
              active={item?.status}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CapsulesList;
