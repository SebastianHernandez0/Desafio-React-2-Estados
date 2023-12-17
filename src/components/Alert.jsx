
export default function Alert({error,success}){
    return(
        <div className="alert_msg">
            {error.length>0 &&  <h3 style={{ color: "red" }}>{error}</h3>}
            {success.length>0 &&  <h3 style={{ color: "green"}}>{success}</h3>}
            
        </div>

    )
}