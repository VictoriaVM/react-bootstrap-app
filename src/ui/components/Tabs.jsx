import React, { Component } from 'react';
import styles from './../../css/train.css';
import TabFirst from './TabFirst.jsx';
import TabSecond from './TabSecond.jsx';

class Tabs extends Component {
    state = {
        activeTabName: 'tab1'
    };

    handleTabClick = (tabName) => () => {
        this.setState({
            activeTabName: tabName
        });
    };

    render () {
        const { activeTabName } = this.state;
        console.log(activeTabName);
        return <div>
            <div className={styles.tabs}>
                <div className={activeTabName === 'tab1' && styles.active} onClick={this.handleTabClick('tab1')}>
                    <div><img src="http://cdn.onlinewebfonts.com/svg/img_33853.png" style={{ width: 10, height: 10 }}/></div>
                    <span>публикации</span>
                </div>
                <div className={activeTabName === 'tab2' && styles.active} id={styles.marg} onClick={this.handleTabClick('tab2')}>
                    <div><img src="http://cdn.onlinewebfonts.com/svg/img_266351.png" style={{ width: 12, height: 12 }}/></div>
                    <span>отметки</span>
                </div>
            </div>
            { activeTabName === 'tab1' ? <TabFirst/> : <TabSecond/> }
        </div>;
    }
}

export default Tabs;
