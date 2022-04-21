
export default function CreateAdd() {

  const submit = (e) => {
    e.preventDefault();
    fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/house', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: "Title",
        description: "Description",
        price: "500",
        image: "https://cdn.pixabay.com/photo/2020/03/14/13/25/house-4930614_1280.jpg"
      })
    })
  }

  return (
    <form onSubmit={submit} className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" placeholder="Title" />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="text" className="form-control" placeholder="Price" />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-success w-100"> + Создать</button>
    </form>
  )
}
