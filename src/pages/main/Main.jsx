import { useEffect, useState } from "react";
import Card from "../../componets/card/Card.jsx"

export const Main = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/house")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHouses(data);
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <main className='container mt-5'>
      <h2 className='text-center'>Последние объявления</h2>

      <div className='mt-5 row'>
        {
          houses.map((item) => <Card id={item.id} title={item.title} />)
        }
      </div>

    </main>
  )
}