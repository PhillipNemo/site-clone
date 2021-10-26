import { FaAngleDown, FaBell, FaSearch,FaHeart, FaThumbsUp, FaLocationArrow  } from 'react-icons/fa';
import SubHeading from "./Sub-Heading";
import { useState } from 'react';


const Main = ({ people }) => {

    const [photo, setPhoto] =  useState(' ');
    const [result, setResult] =  useState([]);
   
  
      function handleChange (event){
          setPhoto(event.target.value)
          
      }
      function handleSubmit (e){
          console.log(photo)
          e.preventDefault()
          const url = `https://api.unsplash.com/search/photos?query=${photo}&client_id=hybeu5UwomoO2sBpT6mzxqL552kGATUCaNqFFIIL4nk`;
  
          fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data)
            setResult(data.results)
          })
          .catch(function(err) {
            alert("Invalid word");
          });
           setPhoto("")
      }

    return ( 
         <div className="main">
               
             <div className="header">


                <form action="">
                    <span className="search">< FaSearch /></span>
                <input type="text" onChange={handleChange}  placeholder="Find something..." />   
                    <button className='search-btn'  onClick={handleSubmit} type="submit"> Search </button>          
                </form>

                <div className="profile">
                    <span className="notification">< FaBell /></span>
                    <div className="profile-pix">
                    <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg" alt="" />
                    </div>
                    <span className="name">Abigail < FaAngleDown /></span>
                   

                </div>

            </div>

            <SubHeading />

            <div className="content">
                {result.map(photo => (
                    <div key={photo.id} className="layer">
                       <img src={photo.urls.small} alt={photo} />
                    </div>
                ))}

                {people.map((person) => (

                   <div key={person.id} className='layer'>
                     <img src={person.image} alt={person.name} />
                     <div className='over-layer'>
                        <h3>{person.name} , <span>{person.age}</span></h3>
                        <p> < FaLocationArrow />{person.location}</p>
                        <button className='layer-btn1'> <FaHeart /></button>
                        <button className='layer-btn2'><FaThumbsUp /></button>
                     </div>
                     </div>
                ))} 
            
        </div>
    </div>
     );
}
 
export default Main;
