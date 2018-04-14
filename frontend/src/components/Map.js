import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import PointOnMap from './PointOnMap'


class Map extends React.Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 0
    };

    render() {
        const {users, removeUser} = this.props;
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                {users && users.map((user, index) => (
                    <PointOnMap key={index}
                        lat={user.latitude}
                        lng={user.longitude}
                        text={user.name}
                                removeUser={removeUser}
                                userActive={user.isActive}
                                userId={user._id}
                    />
                ))}
            </GoogleMapReact>
        );
    }
}

Map.propTypes = {
    users: PropTypes.array.isRequired,
    removeUser: PropTypes.func.isRequired
};

export default Map;