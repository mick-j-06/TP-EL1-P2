import React from "react";
import './styles.css'

class MyTable extends React.Component {
  render(){
    const {data} = this.props ;
    return (
          <MyTableRender data={data}/>
    )
  }
}

function MyTableRender ({data}) {
  const rows = [];

  data.forEach(value => {
    rows.push(<MyTableRow tab={value}/>)
  })
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
         {rows}
      </tbody>
    </table>
  )
}

function MyTableRow({tab}){
  return (
    <tr>
      <td>{tab.name}</td>
      <td>{tab.position}</td>
      <td>{tab.office}</td>
      <td>{tab.age}</td>
      <td>{tab.start_date}</td>
      <td>{tab.salary}</td>
    </tr>
  )
}
export default MyTable;
