import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// const arr = [1, 2];
// const [ one, two ] = arr
export default function Login() {
  const [state, setState] = useState("");
  const [password, setPassword ] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    alert(state + " " + password)

    if(state === "admin" && password === "admin") {
      navigate("/create-new-add")
    } else {
      setError(true)
    }

  }

  const handleEmail = (e) => {
    setState(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={submit} className='container mt-5'>
      <div className="mb-3">
        <label className="form-label">
          Email address
          <input
            value={state}
            onChange={handleEmail}
            type="text" 
            className="form-control" 
            placeholder="name@example.com" 
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Email address
          <input
            value={password}
            onChange={handlePassword}
            type="password" className="form-control" placeholder="Password" />
        </label>
      </div>
      {
        error ? <div style={{color: "red"}}>incorrect credentials</div> : null
      }
      <div class="col-auto mt-3">
        <button type="submit" class="btn btn-primary mb-3">Войти</button>
      </div>
    </form>
  )
}
