import { useState } from "react";
import SearchBar from "../../components/Search/SearchBar";
import PeriodFacet from "../../components/PeriodTree/PeriodFacet";
import TimesliderFacet from "../../components/Timeslider/TimesliderFacet";
import "./Sidebar.css";

function Sidebar(props) {

  return (
    <aside className="sidebar">
      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
      <PeriodFacet
        setSelectedPeriod={props.setSelectedPeriod}
        SelectedPeriod={props.SelectedPeriod}
        rootName={"Periods"}
      />
      <TimesliderFacet
        setSelectedMinTime={props.setSelectedMinTime}
        setSelectedMaxTime={props.setSelectedMaxTime}
        SelectedMinTime={props.SelectedMinTime}
        SelectedMaxTime={props.SelectedMaxTime}
      />
    </aside>
  );
}

export default Sidebar;
