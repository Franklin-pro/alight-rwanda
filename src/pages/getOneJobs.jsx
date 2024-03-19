import React from "react";
import GetOneJob from "../components/getOneJob";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function GetOneJobs() {
  return (
    <>
      <NavBar />
      <div className="jobs-all">
        <div className="jobs-head">
          <h1>JOB APPLICATION</h1>
          <div className="apply">
            <h2>HOW TO UPPLY</h2>
            <h3>
              If you are the right candidate, please send your application
              letter with the following:
            </h3>
            <ul>
              <li>
                An up-to-date CV, highlighting relevant skills and experience
                (presented in relation to each of the Responsibilities and each
                of the experience areas listed above).
              </li>
              <li>
                The names and contacts of three referees and a daytime contact
                telephone number of each of them.
              </li>
              <li>
                The names and contacts of your immediate supervisor(s) in the
                current job and two of your immediate previous jobs.
              </li>
              <li>Your daytime contact telephone number</li>
              <li>A statement and proof of current remuneration package</li>
            </ul>

            <h3>Please submit your application documents electronically to recruitment@kilimotrust.org:</h3>
            <ul>
                <li>Address all applications to The Human Resource & Administration Manager, Kilimo Trust. Deadline for application:<span>14th December 2023
Only shortlisted candidates will be contacted</span></li>
            </ul>
          </div>
          
        </div>

        <div className="blogs">
          <div className="tend">
            <GetOneJob />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
