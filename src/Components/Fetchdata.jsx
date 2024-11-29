import { useEffect, useState } from "react"
const Fetchdata = () => {

  const [data, setData] = useState([])

  const getData = async () => {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      //console.log(response)

      const result = await response.json()
      setData(result)
    }
    catch (error) {
      console.log(error)
    }

  }

  getData()




  return (
    <div>
      <h2>Learn how to fetch data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.username}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.website}</td>
                </tr>
              )
            })

          }
        </tbody>
      </table>
    </div>
  )
}
export default Fetchdata;