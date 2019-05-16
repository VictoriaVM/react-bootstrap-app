import React, { Component } from 'react';
import styles from './../../css/componentStyles/tabs.css';
import TabFirst from './TabFirst.jsx';
import TabSecond from './TabSecond.jsx';
import classNames from 'classnames';

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
                <div className={classNames({ [styles.active]: activeTabName === 'tab1' })} onClick={this.handleTabClick('tab1')}>
                    <div><img src="http://cdn.onlinewebfonts.com/svg/img_33853.png" style={{ width: 10, height: 10 }}/></div>
                    <span>публикации</span>
                </div>
                <div className={classNames(styles.marg, { [styles.active]: activeTabName === 'tab2' })} onClick={this.handleTabClick('tab2')}>
                    <div><img src="http://cdn.onlinewebfonts.com/svg/img_266351.png" style={{ width: 12, height: 12 }}/></div>
                    <span>отметки</span>
                </div>
            </div>
            { activeTabName === 'tab1' ? <TabFirst/> : <TabSecond/> }
        </div>;
    }
}

export default Tabs;
