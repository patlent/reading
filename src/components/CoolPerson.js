import React from 'react';
import fire from "../Fire"

function CoolPerson(){

    const [names, setNames]=React.useState([]);
    const [name , setName]=React.useState({
        name: "",
        age:"",

    });
    const [submit, setSubmit]=React.useState(false);
    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems = [];

        db.collection("cool person").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const object = doc.data();

                let item ={
                    name: object.name,
                    age:object.age,
                    id:doc.id
                };

                newItems.push(item);

            });

            setNames(newItems);
        });


    },[db, submit]);

    const handleChange = prop => event =>{
        setName({
            ...name, [prop]: event.target.value
        });
    };

    const handleSubmit = ()=>{
        if(name.name.length > 2) {


            db.collection("cool person").add(name).then(() => {
                setName({
                    name: "",
                    age: "",
                });
                setSubmit(!submit);
            })
        }else{
            alert("Character is too short");
        }
    };

    const handleDelete = (id)=>{
        db.collection("cool person").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };

    const CoolPeopleEles = names.map((person, idx)=>
        <div key={idx}>
            <h1 style={{fontSize: person.age + 'px'}}>{person.name}</h1>
            <h1 style={{fontSize: person.age + 'px'}}>{person.age}</h1>
            <button onClick={()=>handleDelete(person.id)}>Delete Person</button>
        </div>
    );

    return(
        <div>
            <div>{CoolPeopleEles}</div>
            {/*{setName.length < 2 &&*/}
            {/*<h2>*/}
            {/*    Your string input is less than 2*/}
            {/*</h2>*/}
            {/*}*/}
            <input type = "text" placeholder={"Name..."} onChange={handleChange("name")}/>
            <input placeholder={"Age..."} onChange={handleChange("age")}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default CoolPerson;
