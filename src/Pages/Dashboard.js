import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import '../App.css';
import CardGrid from "../components/List/CardGrid";
import logo from '../images/logo.png';
import leftArrow from '../images/leftArrow.png';
import plusTab from '../images/plusTab.png';
import _ from "lodash";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { NavigationBar } from '../components/Nav/NavigationBar';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MainActions from "../actions/actioncreators/main";
const delay = 350;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const saveUser = props.saveUser;
        this.state = {
            userrole: saveUser.userrole,
            topbarVisible: true,
            sidebarVisible: true,
            isMouseInTop: false,
            tabsKey: Math.random(),
            
            currentTabIndex: 0,
            items: saveUser.items,
            tabs: saveUser.tabs,
            newCounter: 0,
            isEditingCard: false,
            showAllLink: false,
            linkSearch: '',
            hideNav: false,

        };
    }


    sideLinks = [
        { name: 'Analys', type: 'component', value: 'Component1' },
        { name: 'Rättidighet', type: 'component', value: 'Component2' },
        { name: 'Notice', type: 'component', value: 'Component9' },
        { name: 'Simulering', type: 'component', value: 'Component5' },
        { name: 'Form', type: 'component', value: 'Component5' },
        { name: 'Övergångar', type: 'component', value: 'Component6' },
        { name: 'Personal', type: 'component', value: 'Component7' },
        { name: 'Cities', type: 'component', value: 'Component8' },
        { name: 'News', type: 'component', value: 'Component3' },

        { name: 'Analys', type: 'component', value: 'Component1' },
        { name: 'Övergångar', type: 'component', value: 'Component6' },
        { name: 'Cities', type: 'component', value: 'Component8' },
        { name: 'Personal', type: 'component', value: 'Component7' },
        { name: 'Simulering', type: 'component', value: 'Component5' },
        { name: 'Rättidighet', type: 'component', value: 'Component2' },
        { name: 'Övergångar', type: 'component', value: 'Component6' },
        { name: 'Cities', type: 'component', value: 'Component8' },
        { name: 'Personal', type: 'component', value: 'Component5' },
        { name: 'Analys', type: 'component', value: 'Component1' },
        { name: 'Övergångar', type: 'component', value: 'Component3' },
        { name: 'Cities', type: 'component', value: 'Component8' },
        { name: 'Personal', type: 'component', value: 'Component7' },
        { name: 'Simulering', type: 'component', value: 'Component5' },

    ];

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        let currentHideNav = (window.innerWidth <= 992);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({
                hideNav: currentHideNav,
                sidebarVisible: !currentHideNav,
            });
        }
    };

    toggleTopbar = () => {
        this.setState({
            topbarVisible: !this.state.topbarVisible,
        });
        setTimeout(window.dispatchEvent, delay, new Event('resize'));
    };

    toggleSidebar = () => {
        this.setState({
            sidebarVisible: !this.state.sidebarVisible,
        });
        setTimeout(window.dispatchEvent, delay, new Event('resize'));
    };

    toggleAll = () => {
        this.setState({
            topbarVisible: !this.state.topbarVisible,
            sidebarVisible: !this.state.sidebarVisible,
        });
        setTimeout(window.dispatchEvent, delay, new Event('resize'));
    };

    onMouseMove = (e) => {
        if (e.clientY < 20) {
            this.setState({
                isMouseInTop: true,
            });
        } else if (e.clientY > 100) {
            this.setState({
                isMouseInTop: false,
            });
        }
    };

    onMouseLeave = (e) => {
        console.log('Mouse Leaving');
        this.setState({
            isMouseInTop: false,
        });
    };

    onCurrentTabChanged = (index) => {
        let { tabs, items } = this.state;
        if (tabs.length === index) {
            index--;
        }
        this.setState({
            currentTabIndex: index,
        });
    };

    onAddTab = () => {
        let { tabs, items } = this.state;
        tabs.push({
            id: Math.random(),
            name: 'Tab' + (tabs.length + 1),
        });
        items.push([
            { id: Math.random(), type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false },
            { id: Math.random(), type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false },
            { id: Math.random(), type: 'component', value: 'Component9', x: 2, y: Infinity, w: 1, h: 2, add: false },
        ]);
        this.setState({
            tabs: tabs,
            items: items,
            currentTabIndex: tabs.length - 1,
        });
        console.log('onAddTab', tabs.length);
    };

    onCloseTab = (index) => {
        let { tabs, items } = this.state;
        tabs.splice(index, 1);
        items.splice(index, 1);
        this.setState({
            tabs: tabs,
            items: items,
        });
        console.log(index, JSON.stringify(tabs), JSON.stringify(items));
    };

    onAddItem = (type, value) => {
        const { currentTabIndex, items } = this.state;
        console.log(value, items);
        items[currentTabIndex].push({
            id: Math.random(),
            type: type,
            value: value,
            x: (this.state.items[currentTabIndex].length) % 3,
            y: Infinity,
            w: 1,
            h: 2,
        });
        this.setState({
            tabsKey: Math.random(),
            items: items
        });
    };

    onRemoveItem = (id) => {
        let { items, currentTabIndex } = this.state;
        items[currentTabIndex] = _.reject(items[currentTabIndex], { id: id })
        this.setState({ items });
    };

    onEditClicked = () => {
        this.setState({
            isEditingCard: !this.state.isEditingCard,
        });
    };

    onShowMore = () => {
        this.setState({
            showAllLink: true,
        });
    };

    onLinkSearchChanged = (e) => {
        const text = e.target.value;
        this.setState({
            linkSearch: text,
        });
    };
    handleChange = (event) => {
        this.setState({ userrole: event.target.value });
        console.log(event.target.value)
    }
    saveUser = () => {
        let {
            items,
            tabs,
            userrole
        } = this.state;
        let saveUser = {
            items: items,
            tabs: tabs,
            userrole: userrole,
        }
        this.props.MainActions.login(saveUser);
        alert('Success!')
    }
    logout = () => {
        this.props.history.goBack('Home');
    }
    render() {
        const { sideLinks } = this;
        const { topbarVisible, sidebarVisible, isMouseInTop, tabsKey, tabs, currentTabIndex, items, isEditingCard, showAllLink, linkSearch, hideNav } = this.state;

        const searchedLink = _.filter(sideLinks, (item) => {
            const res = item.name.toLowerCase().search(linkSearch.toLowerCase()) >= 0;
            return res;
        });

        return (
            <Grid container onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
                <Grid item lg={12} id={"toggle"} className={topbarVisible ? '' : (isMouseInTop ? '' : 'toggle-full-mode')}
                    onClick={this.toggleAll}></Grid>
                <Grid container id={"topBar"} className={topbarVisible ? "" : "topBar-hide"}>
                    <Grid item lg={1} md={1} className={"logo-main"}>
                        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    </Grid>
                    <Grid item lg={11} md={11} className={"nav-bar"}>
                        <div className="profileName">
                            {this.state.userrole} <strong> {this.state.userrole === 'Admin' ? 'AD' : (this.state.userrole === 'Default User' ? 'DU' : 'RO')}</strong>
                        </div>
                        <ul class="edit">
                            <li><a onClick={this.onEditClicked}>{isEditingCard ? 'End Edit' : 'Start Edit'}</a></li>
                            <li><a onClick={this.saveUser}>Save</a></li>
                            <li><a onClick={this.logout}>Log Out</a></li>
                            <li>
                                <select value={this.state.userrole} onChange={this.handleChange} className="role">
                                    <option>Admin</option>
                                    <option>Role 1</option>
                                    <option>Role 2</option>
                                    <option>Role 3</option>
                                    <option>Default User</option>
                                </select>
                            </li>
                        </ul>
                        <NavigationBar />

                    </Grid>
                </Grid>
                <div id={"sideBar"} className={sidebarVisible ? '' : 'sideBar-hide'}>
                    <div class="leftArrow">
                        <a id={"toggle2"} className={topbarVisible ? '' : (isMouseInTop ? '' : 'toggle-full-mode')} onClick={this.toggleSidebar}></a>
                    </div>
                    <ul>
                        <li><input value={linkSearch} placeholder="Search.." onChange={this.onLinkSearchChanged} /></li>
                        {_.map(searchedLink, (ln, index) => {
                            if (showAllLink) {
                                return (
                                    <li key={index}><a className={"link"} onClick={() => this.onAddItem(ln.type, ln.value)}>{ln.name}</a></li>
                                );
                            } else {
                                if (index < 9) {
                                    return (
                                        <li key={index}><a className={"link"} onClick={() => this.onAddItem(ln.type, ln.value)}>{ln.name}</a></li>
                                    );
                                }
                            }
                        })}
                        {!showAllLink && searchedLink.length > 9 && <li key={'show-more'} className="btm"><a onClick={this.onShowMore}>Show More</a></li>}
                    </ul>
                </div>
                <div className={sidebarVisible ? "content-normal" : "content-full"}>
                    <div id={"mainContent"} className={topbarVisible ? "main-content-normal" : "main-content-full"}>
                        <Tabs
                            key={tabsKey}
                            selectedIndex={currentTabIndex}
                            onSelect={this.onCurrentTabChanged}>
                            <div style={{ flexDirection: 'row' }}>
                                <TabList>
                                    {_.map(tabs, (tab, index) => {
                                        return (
                                            <Tab key={tab.id}><div className={"tab-child-item"}>{tab.name}:</div> <input className={"tab-child-item"} type="text" /> <div className={"tab-child-item close-icon"} onClick={() => this.onCloseTab(index)}>×</div></Tab>
                                        );
                                    })}
                                    <Tab><img onClick={this.onAddTab} src={plusTab} className="plusTab" alt="Plus" /></Tab>
                                </TabList>
                            </div>
                            {_.map(items, (item, index) => {
                                return (
                                    <TabPanel key={tabs[index]['id']}>
                                        <CardGrid items={item} isEditingCard={isEditingCard} onRemoveItem={this.onRemoveItem} />
                                    </TabPanel>
                                );
                            })}
                        </Tabs>
                    </div>
                </div>
            </Grid>
        );
    }

}
const mapStateToProps = state => {
    return {
        saveUser: state.mainReducer
    };
};
export default connect(
    mapStateToProps,
    (dispatch) => ({
        MainActions: bindActionCreators(MainActions, dispatch)
    })
)(Dashboard);
