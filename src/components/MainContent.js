import React from "react";
import { ReactComponent as Envelope } from "../icons/envelope.svg";

export default function MainContent() {
  return (
    <div
      className="col-sm-8 dynamic-content"
      style={{
        backgroundColor: "#E3ECF0 ",
        height: "100%",
        paddingTop: 103,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 style={{ fontSize: 18 }}>Create Campaign</h2>
            <hr></hr>
          </div>
        </div>
        <div className="row pag1-input-group">
          <div className="col-sm-8">
            <label>Campain name</label>
            <input type="text" value="Pohela boishakhi campaign" />
          </div>
          <div className="col-sm-4">
            <label>Campain name</label>
            <input type="text" value="Pohela boishakhi campaign" />
          </div>
        </div>
        <div className="col-sm-12 main-display-card">
          <div className="options">
            <div className="options-item">
              <h4 style={{ fontSize: 14 }}>Step1</h4>
              <h4 style={{ fontSize: 14 }}>Select Channel</h4>
              <div className="option-outer-circle">
                <div className="option-inner-circle"></div>
              </div>
            </div>
            <div className="options-item">
              <h4 style={{ fontSize: 14 }}>Step2</h4>
              <h4 style={{ fontSize: 14 }}>Select Channel</h4>
              <div className="option-outer-circle">
                <div className="option-inner-circle"></div>
              </div>
            </div>
            <div className="options-item">
              <h4 style={{ fontSize: 14 }}>Step3</h4>
              <h4 style={{ fontSize: 14 }}>Select Channel</h4>
              <div className="option-outer-circle">
                <div className="option-inner-circle"></div>
              </div>
            </div>
            <div className="options-item">
              <h4 style={{ fontSize: 14 }}>Step4</h4>
              <h4 style={{ fontSize: 14 }}>Select Channel</h4>
              <div className="option-outer-circle">
                <div className="option-inner-circle"></div>
              </div>
            </div>
            <div className="options-item">
              <h4 style={{ fontSize: 14 }}>Step5</h4>
              <h4 style={{ fontSize: 14 }}>Select Channel</h4>
              <div className="option-outer-circle">
                <div className="option-inner-circle"></div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 28,
            }}
          >
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
          </div>
          <div
            className="col-sm-12"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 38,
            }}
          >
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
            <div className="col-sm-2 item-card">
              <Envelope style={{ width: 40 }} />
              <h4 style={{ fontSize: 16 }}>SMS</h4>
            </div>
          </div>
          <hr style={{ marginTop: 48 }}></hr>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ marginRight: 12 }}
            >
              Previous
            </button>
            <button type="button" className="btn btn-primary btn-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
