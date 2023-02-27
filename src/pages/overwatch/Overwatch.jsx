import React from 'react';
import ProfileCards from '../../components/profilecards/ProfileCards';

class Overwatch extends React.Component {
    render() {
        return (
          <div className='overwatch'>
              <h2 style={{color: 'red', textShadow: '1px 1px 2px black'}}>Squad Members</h2>
              <ProfileCards/>
          </div>
        );
    }
}

export default Overwatch;