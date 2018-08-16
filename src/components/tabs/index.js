import React from 'react';
import PropTypes from 'prop-types'

class Tabs extends React.Component{
    static propTypes = {
        children:PropTypes.instanceOf(Array).isRequired,
    }
    
    state = {
        activeTab: this.props.children[0].props.label,
    }

    onclic
}