import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";

const Record = (props) => (
  <tr>
    <td>{props.record.submitDate}</td>
    <td>{props.record.reporter}</td>
    <td>{props.record.slug}</td>
    <td>{props.record.timeRelease}</td>
    {/* new element added */}
    <td>{props.record.title ? "submitted" : " "}</td>
    <td>{props.record.leadIn ? "submitted" : " "}</td>
    <td>{props.record.voiceOver ? "submitted" : " "}</td>
    <td>{props.record.releaseDate}</td>
    <td>{props.record.note}</td>
    <td>
      <Link className="btn btn-link" to={`/view/${props.record._id}`}>
        View
      </Link>{" "}
      |
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);
  // *************************************************************************************************

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div class="container-sm">
      <div class="row">
        <h4>Daily Topic</h4>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Date of Submition</th>
              <th>Reporter</th>
              <th>SLUG</th>
              <th>Expected Release Date</th>

              <th>Title</th>
              <th>Lead In</th>
              <th>Voice Over</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    </div>
  );
}
