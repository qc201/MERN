import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  // current UTC time stamp
  const dateSubmission = new Date().valueOf();
  // when display on the webpage
  const displayDate = new Date().toLocaleDateString();

  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    submitDateUnix: dateSubmission,
    submitDate: displayDate,
    slug: "",
    reporter: "",
    timeRelease: "",
    title: "",
    leadIn: "",
    voiceOver: "",
    releaseDate: "",
    note: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "", level: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div class="container-sm">
      <div>
        <h3>Create New Topic</h3>
        <form onSubmit={onSubmit}>
          {/* ################################################################################## */}
          {/* ####################### for date of submission ################################### */}
          {/* ################################################################################## */}
          <div>
            <h6>Today is: {displayDate}</h6>
          </div>

          {/* ################################################################################## */}
          {/* ####################### for name of the reporter ################################# */}
          {/* ################################################################################## */}
          <div className="form-group">
            <label htmlFor="reporterName">Reporter</label>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="reporterOptions"
                id="reporterSean"
                value="Sean"
                checked={form.reporter === "Sean"}
                onChange={(e) => updateForm({ reporter: e.target.value })}
              />
              <label htmlFor="reporterSean" className="form-check-label">
                Sean
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="reporterOptions"
                id="reporterKong"
                value="Kong"
                checked={form.reporter === "Kong"}
                onChange={(e) => updateForm({ reporter: e.target.value })}
              />
              <label htmlFor="reporterKong" className="form-check-label">
                Kong
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="reporterOptions"
                id="rporterQiuyu"
                value="Qiuyu"
                checked={form.reporter === "Qiuyu"}
                onChange={(e) => updateForm({ reporter: e.target.value })}
              />
              <label htmlFor="rporterQiuyu" className="form-check-label">
                Qiuyu
              </label>
            </div>
          </div>

          {/* ################################################################################## */}
          {/* ####################### for SULG input ########################################### */}
          {/* ################################################################################## */}
          <div className="form-group">
            <label htmlFor="slug">SLUG</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={form.slug}
              onChange={(e) => updateForm({ slug: e.target.value })}
            />
          </div>

          {/* ################################################################################## */}
          {/* ####################### for time sensitivity selection ########################### */}
          {/* ################################################################################## */}
          <div className="form-group">
            <label htmlFor="tiemRelease">Expected Release Date</label>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="releaseOptions"
                id="releaseToday"
                value="Today"
                checked={form.timeRelease === "Today"}
                onChange={(e) => updateForm({ timeRelease: e.target.value })}
              />
              <label htmlFor="releaseToday" className="form-check-label">
                Today
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="releaseOptions"
                id="releaseUrgent"
                value="Urgent"
                checked={form.timeRelease === "Urgent"}
                onChange={(e) => updateForm({ timeRelease: e.target.value })}
              />
              <label htmlFor="releaseUrgent" className="form-check-label">
                Urgent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="releaseOptions"
                id="releaseNonurgent"
                value="Nonurgent"
                checked={form.timeRelease === "Nonurgent"}
                onChange={(e) => updateForm({ timeRelease: e.target.value })}
              />
              <label htmlFor="releaseNonurgent" className="form-check-label">
                Nonurgent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="releaseOptions"
                id="releaseInfomercial"
                value="Infomercial"
                checked={form.timeRelease === "Infomercial"}
                onChange={(e) => updateForm({ timeRelease: e.target.value })}
              />
              <label htmlFor="releaseInfomercial" className="form-check-label">
                Infomercial
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="releaseOptions"
                id="releaseCommunity"
                value="Community"
                checked={form.timeRelease === "Community"}
                onChange={(e) => updateForm({ timeRelease: e.target.value })}
              />
              <label htmlFor="releaseCommunity" className="form-check-label">
                Community
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="releaseOptions"
                id="notInNews"
                value="outOfNewsSession"
                checked={form.timeRelease === "outOfNewsSession"}
                onChange={(e) => updateForm({ timeRelease: e.target.value })}
              />
              <label htmlFor="notInNews" className="form-check-label">
                out of News session
              </label>
            </div>
          </div>

          {/* ################################################################################## */}
          {/* ####################### for NOTE input ########################################### */}
          {/* ################################################################################## */}
          <div className="form-group">
            <label htmlFor="note">NOTE</label>
            <input
              type="text"
              className="form-control"
              id="note"
              value={form.note}
              onChange={(e) => updateForm({ note: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create New Topic"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
