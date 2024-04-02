import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profiles from '../ClubsData';
import './ClubsAll.css';

const Interaction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clubselected, setclubselected] = useState('');
  const [clubdata, setclubdata] = useState(null);

  // Updated to return a function
  const handleSectionClick = (name) => () => {
    setIsClicked(true);
    setclubselected(name);
  };

  useEffect(() => {
    if (isClicked && clubselected) {
      const fetchClubData = async () => {
        try {
          // Ensure that the payload structure matches your backend expectations
          const response = await axios.post('http://localhost:3000/api/club', { club_Name: clubselected });
          console.log(response);
          setclubdata(response.data);
          console.log(response.image_data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setclubdata(null);
        }
      };

      fetchClubData();
    }
  }, [isClicked, clubselected]);

  if (isClicked && clubdata) {
    return (
      <div className='clubswholedata'>
          <div className='headingClubsAll'>
            <h2>{clubselected}</h2> {/* Consider making this dynamic based on `clubdaQta` */}
            <h3 className='titleClubsAll'>club members</h3> <br/>
          </div>
          <div className='clubsmembersClubsAll'>
            
              {clubdata.member?.map((singlePerson, index) => { // Assuming the correct property is `members`
                  const { name, email_id ,department ,position } = singlePerson;
                  return (
                    <div key={index} className='singlePerson'>
                      <div className='uppersinglePerson'>
                        <div className='namesinglePerson'><h3>{name}</h3></div>
                        <div className='emailsinglePerson'><h3>{email_id}</h3></div>
                      </div>
                      <div className='lowersinglePerson'>
                        <div className='depsinglePerson'><h3>{department}</h3></div>
                        <div className='positionsinglePerson'><h3>{position}</h3></div>
                      </div>
                    </div>
                  );
              })}
          </div>
          <div className='clubsPostClubsAll'><h3 className='postPostClubsAll'> post </h3>
              
          <div className='postClubsAll'>
              {
                clubdata.posts.map((singlePost) =>{
                  return(
                  <div className='upperclubsPostClubsAll'>
                    <h3>name:{singlePost.name}</h3>
                    <h3>club:{singlePost.club_name}</h3>
                    <div className='imagecontainerclubsPostClubsAll'>
                        <div className='imagesinconatinerClubsAll'>
                          <img src={`/api/club/${singlePost.image_data}`} alt={`Profile of ${singlePost.club_name}`} />
                
                        </div>
                    </div>
                  </div>
                  )
                }
              )}
          </div>
          </div>
      </div>
    );
  }

  return (
    <section className="sectionClubsAll" id="profilesClubsAll">
      <div className='headClubsAll'><h1>All Clubs</h1></div>
      {profiles.map((profile) => {
        const { id, name, description, imageUrl, clubName } = profile;
        return (
          <article key={id} className="profile-itemClubsAll" onClick={handleSectionClick(name)}>
            <div className='writtenPartClubsAll'>
              <div className='containerClubsAll'>
                <div className='profilePicClubsAll'>
                  <img src={imageUrl} alt={name} />
                </div>
                <div className='nameAndDescriptionClubsAll'>
                  <h3 className='nameClubsAll'>{name}</h3>
                  <h4 className='clubNameClubsAll'>Club: {clubName}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Interaction;
