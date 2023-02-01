import React from "react";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "./Invoice.css";
import axios from "axios";
import { useParams } from "react-router-dom";


function Invoice() {
  const [fare, setFare] = useState([]);
  const { Bkg_Id } = useParams();

  useEffect(() => {
     axios.get("https://localhost:44303/getfare/"+ Bkg_Id ).then((response) => {
      console.log(response.data);
      setFare(response.data);
     
    });
  }, []);

  const downloadPdf = () => {
    const doc = new jsPDF("p", "pt", "a2");
    doc.html(document.getElementById("pdf"), {
      callback: function (pdf) {
        pdf.save("Invoice"+fare[0].Fare_Id+"+.pdf");
      },
    });
  };

   return ( <div>
    <div id="pdf">
      <body>
        <div className="invoice-box">
          <table>
            <tr className="top">
              <td colSpan="2">
                <table>
                  <tr>
                    <td className="title">
                      <img
                        src="./images/logo.png"
                        alt="Company logo"
                        style={{ width: "100%", maxWidth: "300px" }}
                      />
                    </td>

                    <td>
                      Invoice #: {fare[0]?.Fare_Id}
                      <br />
                      Created on:{" "}
                      {new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace("T", " ")}
                      <br />
                      Due: none
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr className="information">
              <td colSpan="2">
                <table>
                  <tr>
                    <td>
                      TourIndia Travels Pvt.Ltd.
                      <br />
                      H.O: 111, L J Road, Dadar
                      <br />
                      Dadar Mumbai 400028
                      <br />
                      Contact No.: +91 2212345678.
                    </td>
                    <td>
                      Group 8
                      <br />
                      SM VITA
                      <br />
                      Email: tourindia@gmail.com
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr className="heading">
              <td>Payment Method</td>

              <td>Online #</td>
            </tr>

            <tr className="details">
              <td>Bank </td>
              <td>{fare[0]?.Account.City}---City Bank</td>
            </tr>

            <tr className="heading">
              <td>Item</td>

              <td>Price</td>
            </tr>

            <tr className="item">
              <td>Basic Fare</td>

              <td>{fare[0]?.Basic_Fare}</td>
            </tr>

            <tr className="item">
              <td>Infants</td>

              <td>{fare[0]?.Infants}</td>
            </tr>

            <tr className="item last">
              <td>Child Without Bed</td>

              <td>{fare[0]?.Child_Without_Bed}</td>
            </tr>
            <tr class="item">
              <td>Child With Bed</td>

              <td>{fare[0]?.Child_With_Bed}</td>
            </tr>
            <tr className="total">
              <td></td>

              <td>Total: {fare[0]?.Total_fare}</td>
            </tr>
          </table>
        </div>
      </body>
      <h5 style={{color:"grren"}}>Get PDF</h5>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            color="red"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-printer"
            viewBox="0 0 16 16"
            onClick={downloadPdf}
          >
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
          </svg>
    </div>
  </div>);
}

export default Invoice;
