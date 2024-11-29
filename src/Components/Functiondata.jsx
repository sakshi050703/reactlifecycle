import { useEffect, useState } from "react"

const Functiondata = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page')
      console.log(response)

      const result = await response.json()
      console.log(result.data)
      setData(result.data)
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h2>API Fetch with Key by using Functional Components</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.email}</td>
                  <td>{emp.first_name} {emp.last_name}</td>
                  <td><img src={emp.avatar} alt={emp.first_name} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Functiondata