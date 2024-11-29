import { useEffect, useState } from "react";
const Lifecycle = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('comp Mounting')

    return (() => {
      console.log('comp Unmounted')
    })
  }, [])

  useEffect(() => {
    console.log('comp Updating')
  }, [count])


  return (

    <div>

      <h1>{count}</h1>
      <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>+</button>
      <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn btn-warning" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
export default Lifecycle;