import React from "react";
import Ourteam from "../components/ourteam";
import tmwk from "../assets/tmwk.jpeg";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function Tearm() {
  return (
    <>
      <NavBar />
      <div className="all">
        <h2 className="all-h2">ALIGHT LEADERSHIP</h2>
        <p className="all-p">
          Our Global Leadership Team provides leadership and support to more
          than 3,000 staff around the world.
        </p>
        <div className="terms">
          <div className="sinior">
            <h2>SENIOR MANAGEMENT</h2>
            <div className="test">
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
            </div>
          </div>
          <div className="assist">
            <h2>BOARD OF DIRECTORS</h2>
            <div className="test">
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
            </div>
          </div>
          <div className="assist">
            <h2>ENTERPRISE EXECUTIVE DIRECTORS</h2>
            <div className="test">
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
              <Ourteam image={tmwk} position={"ceo"} name={"japhet"} />
            </div>
          </div>
        </div>
        <div className="report-container">
          <div className="reports">
          <div className="annual">
          <h2>ANNUAL REPORT</h2>
            <p>
              Alight’s annual report outlines the organization’s activities
              throughout the preceding year. It is intended to give refugees,
              donors, partners, stakeholders, and other interested people
              information about our worldwide activities and financial
              performance.
            </p>
            <a href="@">Download our fiscal year 2023 report</a>
          </div>
            
            <div className="prev">
              <h3>ANNUAL REPORT</h3>
              <p>View or download our Annual Reports from recent years.</p>
              <select>
                <option>year</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
              </select>
            </div>
            <div className="stra">
              <h3>STARTEGY</h3>
              <p>
                Explore our 5-year strategy, conceived in collaboration with
                global experts and local communities.
              </p>
              <a href="@">Download the 5-year strategic plan</a>
            </div>

            <div className="resource">
              <h3>FINANCIAL RESOURCES</h3>

              <a href="@">Our consolidated financial statements for 2023.</a>
              <a href="@">
                Our IRS form 990 for tax year ending March 31, 2023.
              </a>
            </div>

            <div className="privancy">
              <h3>PRIVACY POLICY</h3>

              <p>
                We take trust very seriously. When you share your personal
                information with Alight, we hold it dear and don’t share or sell
                it. It’s just that simple. Read our full <a href="@">privacy policy.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Tearm;
