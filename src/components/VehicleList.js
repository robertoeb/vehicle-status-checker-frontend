import React, { Component } from "react";
import api from "../services/api";

export default class components extends Component {
  componentDidMount() {
    this.loadVehicles();
  }

  loadVehicles = async () => {
    const response = await api.get("/vehicles");

    console.log(response);
  };

  render() {
    return (
      <div className="container">
        <table className="highlight">
          <thead>
            <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
