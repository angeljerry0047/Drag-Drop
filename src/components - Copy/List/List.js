import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import '../../App.css';
import CardGrid from "./CardGrid";
import logo from '../../images/logo.png';
import leftArrow from '../../images/leftArrow.png';
import plusTab from '../../images/plusTab.png';
import _ from "lodash";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const delay = 350;

class List extends Component {
  state = {
    topbarVisible: true,
    sidebarVisible: true,
    isMouseInTop: false,
    tabsKey: Math.random(),
    tabs: [
      {id: Math.random(), name: 'Tab1'},
      {id: Math.random(), name: 'Tab2'},
    ],
    currentTabIndex: 0,
    items: [
      // {id: 'Component1', type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false},
      // {id: 'Component2', type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false},
      // {id: 'Component3', type: 'component', value: 'Component3', x: 2, y: Infinity, w: 1, h: 2, add: false},
      [
        {id: Math.random(), type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false},
        {id: Math.random(), type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false},
        {id: Math.random(), type: 'component', value: 'Component9', x: 2, y: Infinity, w: 1, h: 2, add: false},
        ],
      [
        {id: Math.random(), type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false},
        {id: Math.random(), type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false},
        {id: Math.random(), type: 'component', value: 'Component9', x: 2, y: Infinity, w: 1, h: 2, add: false},
        ],
    ],
    newCounter: 0,
    isEditingCard: false,
  };

  sideLinks = [
    {name: 'Info', type: 'component', value: 'Component1'},
    {name: 'Time', type: 'component', value: 'Component2'},
    {name: 'Notice', type: 'component', value: 'Component9'},
    {name: 'Login', type: 'component', value: 'Login'},
    {name: 'Form', type: 'component', value: 'Component5'},
    {name: 'Historik', type: 'component', value: 'Component6'},
    {name: 'Trains', type: 'component', value: 'Component7'},
    {name: 'Cities', type: 'component', value: 'Component8'},
    {name: 'Post', type: 'component', value: 'Component3'},
  ];


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
    let {tabs, items} = this.state;
    // console.log(index, tabs.length, tabs.length - index);
    if (tabs.length === index) {
      console.log(index, tabs.length);
      this.onAddTab();
    }
    this.setState({
      currentTabIndex: index,
    });
  };

  onAddTab = () => {
    let {tabs, items} = this.state;
    tabs.push({
      id: Math.random(),
      name: 'Tab' + (tabs.length + 1),
    });
    items.push([
      {id: Math.random(), type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false},
      {id: Math.random(), type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false},
      {id: Math.random(), type: 'component', value: 'Component9', x: 2, y: Infinity, w: 1, h: 2, add: false},
    ]);
    this.setState({
      tabs: tabs,
      items: items,
      currentTabIndex: tabs.length - 1,
    });
  };

  onAddItem = (type, value) => {
    const {currentTabIndex, items} = this.state;
    console.log(value, items);
    // for (let item of items) {
    //   console.log(value, item);
    //   if (type === 'component' && item.id == value)
    //     return;
    // }
    items[currentTabIndex].push({
      // id: value,
      id: Math.random(),
      type: type,
      value: value,
      x: (this.state.items[currentTabIndex].length) % 3,
      y: Infinity, // puts it at the bottom
      w: 1,
      h: 2,
    });
    this.setState({
      // Add a new item. It must have a unique key!
      tabsKey: Math.random(),
      items: items
    });
  };

  onRemoveItem = (id) => {
    let {items, currentTabIndex} = this.state;
    items[currentTabIndex] = _.reject(items[currentTabIndex], {id: id})
    this.setState({items});
  };

  onEditClicked = () => {
    this.setState({
      isEditingCard: !this.state.isEditingCard,
    });
  };

  render() {
    const {sideLinks} = this;
    const {topbarVisible, sidebarVisible, isMouseInTop, tabsKey, tabs, currentTabIndex, items, isEditingCard} = this.state;

    return (
      <Grid container onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
        <Grid item lg={12} id={"toggle"} className={topbarVisible ? '' : (isMouseInTop ? '' : 'toggle-full-mode')}
              onClick={this.toggleAll}></Grid>
        <Grid container id={"topBar"} className={topbarVisible ? "" : "topBar-hide"}>
          <Grid item lg={1} md={1} className={"logo-main"}>
            <a href="#"><img src={logo} className="App-logo" alt="logo"/></a>
          </Grid>
          <Grid item lg={11} md={11} className={"nav-bar"}>
            <select className="role">
              <option>Admin</option>
              <option>User 1</option>
              <option>User 2</option>
              <option>User 3</option>
              <option>Default User</option>
            </select>
            <ul className="nav-bar">
            <li><a href="#">Välj Tåg</a></li>
                  <li><a href="#">Sök Tåg</a></li>
                  <li><a href="#">Plats och Tid</a></li>
                  <li><a href="#">Händelselista</a></li>
                  <li><a href="#">Varningar</a></li>
                <li className="edit"><a
                onClick={this.onEditClicked}>{isEditingCard ? 'End Edit' : 'Start Edit'}</a></li>
                <li className="edit"><a href="#">Save</a></li>
            </ul>
          </Grid>
        </Grid>
        {/*<div >*/}
        {/*  */}
        {/*</div>*/}
        <div id={"sideBar"} className={sidebarVisible ? '' : 'sideBar-hide'}>
        <div class="leftArrow"><a href="#" id={"toggle2"} className={topbarVisible ? '' : (isMouseInTop ? '' : 'toggle-full-mode')}  onClick={this.toggleSidebar}></a></div>
          <ul>
            {_.map(sideLinks, (ln, index) => {
              return (
                <li key={index}><a onClick={() => this.onAddItem(ln.type, ln.value)}>{ln.name}</a></li>
              );
            })}
          </ul>
        </div>
        <div className={sidebarVisible ? "content-normal" : "content-full"}>
        <div id={"mainContent"} className={topbarVisible ? "main-content-normal" : "main-content-full"}>
          {/*<List isFull={!topbarVisible}/>*/}
          {/*<ul class="tab">*/}
          {/*  <li className="current">Tab 1: First Tab</li>*/}
          {/*  <li>Tab 2:</li>*/}
          {/*  <li>Tab 3:</li>*/}
          {/*  <li className="plus"><a href="#"><img src={plusTab} alt=""/></a></li>*/}
          {/*</ul>*/}
          <Tabs
            key={tabsKey}
            selectedIndex={currentTabIndex}
            onSelect={this.onCurrentTabChanged}>
            <TabList>
              {_.map(tabs, (tab, index) => {
                return (
                  <Tab key={tab.id}>{tab.name}: <input type="text" /></Tab>
                );
              })}
              <Tab>+</Tab>
            </TabList>

            {_.map(items, (item, index) => {
              return (
                <TabPanel key={tabs[index]['id']}>
                  <CardGrid items={item} isEditingCard={isEditingCard} onRemoveItem={this.onRemoveItem}/>
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

export default List;
