import React, {Component} from 'react';
import PropTypes from 'prop-types'

const PointOnMap = ({text, removeUser, userActive, userId}) => {


    return (
        <div className='point-on-map'>
            {userActive ?
                <div className='active'>
                    {text}
                    <button onClick={(e) => removeUser(userId)}>X</button>
                </div> :
                <div className='inActive'>
                    {text}
                    <button onClick={(e) => removeUser(userId)}>X</button>
                </div>}
        </div>

    )
};

PointOnMap.propTypes = {
    removeUser: PropTypes.func.isRequired,
    userActive: PropTypes.bool.isRequired
};

export default PointOnMap;