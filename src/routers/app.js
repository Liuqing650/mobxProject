import React from 'react';
import Test from '../components/Test';
import Tabs from '../components/Tabs';

export default class App extends React.Component {

    render() {
        return (
        	<div>
        		<Test />
                <Tabs />
            </div>
        )
    }
}
