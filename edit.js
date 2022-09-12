import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const dateSubmission = new Date().valueOf();
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    submitDate: "",
    slug: "",
    reporter: "",
    timeRelease: "",
    title: "",
    leadIn: "",
    voiceOver: "",
    releaseDate: "",
    note: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );
      console.log("useeffect triggered.");

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // update new varlue to the database
  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,

      submitDate: form.submitDate,
      slug: form.slug,
      reporter: form.reporter,
      timeRelease: form.timeRelease,
      title: form.title,
      leadIn: form.leadIn,
      voiceOver: form.voiceOver,
      releaseDate: form.releaseDate,
      note: form.note,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div class="container-sm">
      <h3>Update Content</h3>
      <form onSubmit={onSubmit}>
        <h4>SLUG: {form.slug}</h4>
        <div className="form-group">
          <label htmlFor="reporter">Reporter</label>
          <input
            type="text"
            className="form-control"
            id="reproter"
            value={form.reporter}
            placeholder={form.reporter}
            onChange={(e) => updateForm({ reporter: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            placeholder={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leadIn">Lead In: </label>
          <input
            type="text"
            className="form-control"
            id="leadIn"
            value={form.leadIn}
            placeholder={form.leadIn}
            onChange={(e) => updateForm({ leadIn: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="voiceOver">Voice Over: </label>
          <textarea
            id="voiceOver"
            name="voiceOver"
            className="form-control"
            value={form.voiceOver}
            placeholder={form.voiceOver}
            onChange={(e) => updateForm({ voiceOver: e.target.value })}
            rows="5"
            cols="33"
          >
            voice over ...
          </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Today: </label>
          <input
            class="form-check-input"
            type="checkbox"
            className="form-control"
            id="releaseDate"
            value={form.releaseDate}
            onChange={(e) =>
              updateForm({ releaseDate: new Date().toLocaleDateString() })
            }
          />
        </div>

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
