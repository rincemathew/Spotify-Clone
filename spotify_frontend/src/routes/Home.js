import React from "react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react/dist/iconify.js";

function Home() {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
      <div>
        <div className="p-6">
          <img src={spotify_logo} alt="spotify logo" width={125} />
        </div>
        <div className="py-5">
          <IconText
            iconName={"material-symbols:home"}
            displayText={"Home"}
            active
          ></IconText>
          <IconText
            iconName={"material-symbols:search-rounded"}
            displayText={"Search"}
          ></IconText>
          <IconText
            iconName={"icomoon-free:books"}
            displayText={"Library"}
          ></IconText>
        </div>
        <div className="pt-7">
        <IconText
            iconName={"material-symbols:add-box"}
            displayText={"Create Playlist"}
          ></IconText>
          <IconText
            iconName={"mdi:cards-heart"}
            displayText={"Liked Songs"}
          ></IconText>
        </div>
        </div>
        <div className="px-5 ">
        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
        <Icon icon="carbon:earth-europe-africa"></Icon>
            <div className="ml-2 text-sm font-semibold">English</div>
        </div>
        </div>
      </div>
      <div className="h-full w-4/5"></div>
    </div>
  );
}

export default Home;
