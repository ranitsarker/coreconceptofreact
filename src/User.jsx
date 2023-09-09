export default function User({user}){
    const {name, email} = user;
    return(
        // <div style={{background:'#ededed', border: '2px solid yellow', padding: '20px', margin: '10px'}}>
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email} </p>
        </div>
    )
}