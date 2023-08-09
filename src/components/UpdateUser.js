import "../index.css"
const UpdateUser = ()=>{
    return(
        <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>UpdateUser</h1>
            <h1>Name</h1>
            <input className="inp-1"/>
            <h1>Email</h1>
            <input className="inp-1"/>
            <button style={{display:"block",marginTop:"25px"}}>Submit</button>
        </div>
    )
}
export default UpdateUser;