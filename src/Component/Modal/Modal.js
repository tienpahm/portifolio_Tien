import React, {Fragment} from "react";

export default function Modal() {
  return (
    <Fragment>
      {/* modal picture */}
      <div className="modal fade" id="honda">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <img
              src={require("../../assets/img/honda.png").default}
              alt="hondamodal"
            />
          </div>
        </div>
      </div>
      <div className="modal fade" id="honda1">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <img
              src={require("../../assets/img/Honda1.png").default}
              alt="hondamodal"
            />
          </div>
        </div>
      </div>
      <div className="modal fade" id="bugtify">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <img
              src={require("../../assets/img/bugtify.png").default}
              alt="bugtifymodal"
            />
          </div>
        </div>
      </div>
      <div className="modal fade" id="bugtify1">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <img
              src={require("../../assets/img/bugtify1.png").default}
              alt="bugtifymodal"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
