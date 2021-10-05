import React from 'react';
import OisIndexer from "./OisIndexer";
import CuratedCollections from "./CuratedCollections";

class Java extends React.Component {
    render() {
        return (
            <div>
                <OisIndexer/>
                <CuratedCollections/>
            </div>
        );
    }
}

export default Java