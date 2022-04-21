import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DetailCard() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  console.log(house);
  useEffect(() => {
    fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/house/' + id)
      .then( (res) => res.json())
      .then((data) => {
        setHouse(data)
      })
  }, []);

  if(house === null) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="container mt-5">
      <img src={house.image} alt="" />
      <h1>{house.title}</h1>
    </div>
  )
}
