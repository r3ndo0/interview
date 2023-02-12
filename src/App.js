import React, { useState } from "react";
import Table from "./table";
import { data } from "./data";
import "./style.css";

export default function App() {
  // <------------------- HOOKS --------------------->
  const [currentData, setCurrentData] = useState(data);
  const [inputError, setInputError] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  // <---------------------- SEARCH FUNCTIONALITY ----------------------->

  const searchByName = currentData.filter((item) => {
    return item.name.toLowerCase().includes(searchWord.toLowerCase());
  });
  const searchByEmail = currentData.filter((item) => {
    return item.email.toLowerCase().includes(searchWord.toLowerCase());
  });
  const searchHandler = () => {
    if (searchWord) {
      setCurrentData(filteredData);
    } else {
      setInputError(true);
      setTimeout(() => setInputError(false), 3000);
    }
  };

  const filteredData = [...searchByEmail, ...searchByName];
  // <---------------------- REMOVING FILTERS ----------------------->

  const clearFilters = () => {
    setCurrentData(data);
    setSearchWord("");
  };
  // <---------------------- SORTING BY NAME ----------------------->

  const sortByName = () => {
    setCurrentData(ascendingOrder);
  };
  // <---------------------- SORTING BY DATE ----------------------->

  const sortByDate = () => {
    setCurrentData(dateOrder);
  };

  return (
    <div>
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByDate()}>Sort by birth date</button>
      <button className="clear-btn" onClick={() => clearFilters()}>
        Clear Filters
      </button>
      <input
        className={inputError && "input-error"}
        value={searchWord}
        type="text"
        placeholder="Search by name or email"
        onChange={(event) => {
          setSearchWord(event.target.value);
        }}
      />
      <button onClick={() => searchHandler()}>search</button>
      <Table data={currentData} />
    </div>
  );
}
// <---------------------- SORT BY NAME ----------------------->

const ascendingOrder = [...data].sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }

  return 0;
});

// <---------------------- SORT BY DATE ----------------------->
const dateOrder = [...data].sort(function (a, b) {
  const nameA = a.birthDate;
  const nameB = b.birthDate;
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }

  return 0;
});
