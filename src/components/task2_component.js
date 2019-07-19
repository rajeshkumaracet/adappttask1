import React from "react";

export default function Task2() {
  return (
    <>
      <div className="row ">
        <div className="col-sm-4">
          <div className="card text-center">
            <i class="fas fa-calendar-alt fa-5x" />
            <p>Date to date</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
            <i class="fas fa-calculator fa-5x" />
            <p>Gross net & Vas</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
            <i class="fas fa-coins fa-5x" />
            <p>Currency Converter</p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-4">
          <div className="card text-center">
            <i class="fas fa-money-check-alt fa-5x" />
            <p>Statutory varibales & intrests</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
            <i class="far fa-calendar-check fa-5x" />
            <p>Clear Days</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
            <i class="fas fa-chart-line fa-5x" />
            <p>RPI & CPI</p>
          </div>
        </div>
      </div>
    </>
  );
}
