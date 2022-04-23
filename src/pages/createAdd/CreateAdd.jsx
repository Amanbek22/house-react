import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAdd() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/house', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        image: "https://cdn.pixabay.com/photo/2020/03/14/13/25/house-4930614_1280.jpg"
      })
    })
      .then((res) => {
        if (res.status === 201) {
          alert("Success")
          navigate("/")
        }
      })
  }

  return (
    <form onSubmit={submit} className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" className="form-control" placeholder="Title" />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text" className="form-control" placeholder="Price" />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
         className="form-control" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-success w-100"> + Создать</button>
    </form>
  )
}
