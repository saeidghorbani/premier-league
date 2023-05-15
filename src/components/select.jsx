import React, { Component } from "react";
import BackwardButton from "./common/backwardButton";
import ForwardButton from "./common/forwardButton";
import SelectButton from "./common/selectButton";

class Select extends Component {
  render() {
    const { items, onItemSelect, selectedItem, onClickPrevNext } = this.props;

    return (
      <div className="row select-fixture py-3 px-2 d-flex justify-content-start align-items-center">
        <div className="col-3 d-flex justify-content-start align-items-center">
          <BackwardButton onClickPrevNext={() => onClickPrevNext("previous")} />
        </div>
        <div className="col-6 text-center">
          <SelectButton
            items={items}
            onItemSelect={(value) => onItemSelect(value)}
            selectedItem={selectedItem}
          />
        </div>
        <div className="col-3 d-flex justify-content-end">
          <ForwardButton onClickPrevNext={() => onClickPrevNext("next")} />
        </div>
      </div>
    );
  }
}

export default Select;
