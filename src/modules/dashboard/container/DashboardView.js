import React from "react";
import Banner from "../components/banner";
import CapsulesList from "../components/capsulesList";
import Search from "../components/search";
import Loader from "../../../common/loader";
import InfiniteScroll from "react-infinite-scroll-component";

const DashboardView = ({
  capsuleList,
  pageSize,
  inputValue,
  setInputValue,
  getCapsulesListFun,
}) => {
  return (
    <>
      <Banner
        header="SpaceX"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Search
          value={inputValue}
          onChange={setInputValue}
          labelName="Search by status and type"
        />
        <hr className="my-2 opacity-80" />
        <InfiniteScroll
          dataLength={capsuleList.length}
          next={() => getCapsulesListFun(pageSize)}
          loader={<Loader />}
          hasMore={true}
        >
          <div className="mb-24">
            <CapsulesList list={capsuleList} />
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default DashboardView;
