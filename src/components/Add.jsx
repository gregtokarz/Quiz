import React from "react";
import Film from "./Film";

const Add = () => {
    return (
        <div>
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
        </form>
        </div>
);
};

export default Add;
