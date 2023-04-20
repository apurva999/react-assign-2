import React from 'react';

function Invitation(props){
    const{subject,to,name1,party,friend1,friend2,friend3,location}=props;
    return(
        <div>
              <p>Subject: {subject}</p>
              <p>To: {to}</p>
              <p>Hi, {name1}</p>
              <p>I am having {party} next Friday at my home. Would you like to come? It will be fun.
              Lots of people from my school are coming. You know some of them - {friend1}, {friend2}, {friend3} </p>
              <p>My house is behind our school, near {location}.</p>
              <p>I hope you will come. See you soon</p>
              <p>from,<br></br> {name1}</p>
        </div>
    )
}
export default Invitation;