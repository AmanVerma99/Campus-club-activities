import React from 'react';
import profiles from '../ClubsData';
import './ClubsAll.css' 

const Intraction = () => {
  return (
    <section className="section" id="profiles">
        <div className='head'><h1>All Clubs</h1></div>
      {profiles.map((profile) => {
        const { id, name, description, imageUrl, clubName } = profile; // Now including clubName
        return (
          <article key={id} className="profile-item">
            <div className='writtenPart'>
              <div className='container'>
                <div className='profilePic'>
                  <img src={imageUrl} alt={`${name}`} />
                </div>
                <div className='nameAndDescription'>
                  <div className='profileName'>
                    <h3 className='name'>{name}</h3>
                    <h4 className='clubName'>Club: {clubName}</h4> {/* Corrected syntax and now correctly showing clubName */}
                  </div>
                  <div className='description'>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Intraction;
