import React from 'react'

const ResultTable = (props) => {
  return (
    <div className="table-responsive">
      <table className={`table table-hover ${props.mode === 'light' ? '' : 'table-dark'}`}>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Hours</th>
            <th scope="col">Required</th>
            <th scope="col">Ahead/Behind</th>
          </tr>
        </thead>
        <tbody>
          {props?.result.considerWorkingHours.map((workingHours, i) => (
            <tr key={`working-hours-${i}`} className={workingHours?.compareTimes()?.status}>
              <th scope="row">{i + 1}</th>
              <td>{workingHours}</td>
              <td>8 hrs, 0 min</td>
              <td> {workingHours?.compareTimes()?.msg} </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable