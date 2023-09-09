export default function Singer({singer}){
    console.log(singer);
    return(
        <div>
            <h3>
                Singer: {singer.name}
            </h3>
            <h4>
                age: {singer.age}
            </h4>
        </div>
    );

}