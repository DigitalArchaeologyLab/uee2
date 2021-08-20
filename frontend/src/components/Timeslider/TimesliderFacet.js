import React from "react";
// import axios from "axios";
// import { parseTree } from "../../utils/parseTree";
import Timeslider from "./Timeslider";

function TimesliderFacet(props) {
  // const [isLoading, setLoading] = useState(true);
  // const [expanded, setExpanded] = useState(["0"]);
  // const [selected, setSelected] = useState([]);
  // const [tree, setTree] = useState([
  //   {
  //     id: 0,
  //     name_eng: "Periods",
  //     path: "0000",
  //     depth: 0,
  //     numchild: 0,
  //     start: 0,
  //     end: 0,
  //   },
  // ]);


  // useEffect(() => {
  //   async function getNodes() {
  //     try {
  //       const response = await axios.get("/api/periods/");
  //       const parsedNodes = await parseTree(response.data, "Periods");
  //       await setTree(parsedNodes);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getNodes();
  // }, []);

  // const handleSelect = (event, nodeId) => {
  //   setSelected(nodeId);
  //   props.setSelectedPeriod(event.target.innerHTML);
  // };

  return (
    <div className="slider__facet">
      <div className="slider__title">
        <h2>Time range</h2>
      </div>
      <div className="slider__slider">
        <Timeslider
          setSelectedMinTime={props.setSelectedMinTime}
          setSelectedMaxTime={props.setSelectedMaxTime}
          SelectedMinTime={props.SelectedMinTime}
          SelectedMaxTime={props.SelectedMaxTime}
        />
      </div>
    </div>
  );
}

export default TimesliderFacet;
