import React from 'react';

export default class MortarCalculatorInputs extends React.Component {
  render() {
    return (
      <div id="mortar-inputs">
        <h2>Fire Support</h2>
        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-eastings">Support coordinates: eastings</label>
          <input id="mortar-input-eastings" type="number" inputMode="numeric" className="form-control" placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-northings">Support coordinates: northings</label>
          <input id="mortar-input-northings" type="number" inputMode="numeric" className="form-control" placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-elevation">Support elevation</label>
          <div className="input-group">
            <input id="mortar-input-elevation" type="number" inputMode="numeric" className="form-control" placeholder="0"/>
            <span className="input-group-addon">meters</span>
          </div>
        </div>
      </div>
    );
  }
}