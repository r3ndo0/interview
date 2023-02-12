import React from "react";

export default function Table({ data }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Birth Date</th>
      </tr>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.birthDate}</td>
          </tr>
        );
      })}
    </table>
  );
}
