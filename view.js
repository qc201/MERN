import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";

export default function View() {
  const params = useParams();
  const id = params.id.toString();
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

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
  return (
    <div>
      <div class="container-sm">
        <div class="row">
          <div class="col">
            <h6>SLUG: {records.slug}</h6>
          </div>
          <div class="col">
            <h6>Reporter: {records.reporter}</h6>
          </div>
          <div class="col">
            <h6>Submission Date: {records.submitDate}</h6>
          </div>
        </div>
        <div class="row border-top border-dark">
          <h6 htmlFor="title">Titile: </h6>
        </div>

        <div class="row">{records.title}</div>
        <div class="row">
          <h6 htmlFor="leadIn">Lead In: </h6>
        </div>
        <div class="row">{records.leadIn}</div>
        <div class="row">
          <h6 htmlFor="voiceOver">Voice Over: </h6>
        </div>
        <div class="row">{records.voiceOver}</div>
      </div>
    </div>
  );
}
