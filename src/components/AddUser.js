import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const userObject = {name,email};

  const dispatch = useDispatch();
  dispatch(AddUser(userObject))
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("user object",userObject);
    // JSON.stringify({...userObject})
    navigate("/home")
}
  return (
    <div>
      <h1>Add User</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="<NAME>" value={name} onChange={e=>setName(e.target.value)}/>
        <br />
        <br />
        <label>Email</label>
        <input type="text" placeholder="<NAME>"  value={email} onChange={e=>setEmail(e.target.value)} />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <br />
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
};
export default AddUser;
