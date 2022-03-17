import { Accordion } from "react-bootstrap";
import Literature from "./Education/Literature";
import Linguistics from "./Education/Linguistics";
import Educ from "./Education/Educ";
function Education() {
  return (
    <div className="container " pt-5>
      <div style={{ margin: 10 }} className=" text-dark">
        <Accordion>
          <Literature />
          <Linguistics />
          <Educ />
        </Accordion>
      </div>
    </div>
  );
}

export default Education;
