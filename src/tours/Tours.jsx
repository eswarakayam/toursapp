import React,{useState} from 'react'

function Tours({tour, removeTour}) {

    const { id, imgLink, name, description, price } = tour;
    const [showContent, setShowContent] = useState(false);

    return (
      <div>
      <div className='app'>{
          
        <div className='main' key={id}>

        <img width={"250px"} height={"200px"} src={imgLink} alt={name} />
        <h1 style={{
            fontSize: "medium",
            marginLeft: "80px",           
        }}>{name}</h1>
        <p>{showContent ? description : description.slice(0, 100)}...
            <b style={{
                color: "green"
            }} onClick={() =>

              setShowContent(!showContent)
            }>{showContent ? "See less" : "Read More"}</b></p>

        <div style={{
             paddingLeft:"5px"
        }}><button className='btn' onClick={() => {
            removeTour(id)
        }}>Not Interested</button>
        <p style={{
            backgroundColor: "#FFFF00",
            color: "#000",
            width: "60px",
            borderRadius: "2px",
            position: "absolute",
            right: "0",
            top: "-10px",

        }}>
        ${price}</p></div> 
    </div>      
    }
    </div>
    </div>
  )
}

export default Tours
