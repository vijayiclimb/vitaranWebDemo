import React, { useState } from 'react'
import { SidebarContainer, SidebarItems, SidebarMenu, SidebarItem, SidebarIcon, SidebarTitle, SideIndicator,SideIndicators, SideList, SideListItem, SideListLabel } from './style'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AirplayIcon from '@material-ui/icons/Airplay';
import Collapse from '@material-ui/core/Collapse';
import { useHistory } from "react-router-dom";

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { AppPanel, Analytics } from '../data/sidebarData';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [market, setMarket] = useState(false);
  const history = useHistory();

  const handleDrop = () => {
    setOpen(!open)
  }

  const handleAnalytics = () => {
    setAnalytics(!analytics)
  }

  const handleMarket = () => {
    setMarket(!market);
  }

  return (
    <>
      <SidebarContainer>
        <SidebarMenu>
          <SidebarItems>
            <SidebarItem>
              <SidebarIcon><DashboardIcon /></SidebarIcon>
              <SidebarTitle>Dashboard</SidebarTitle>
            </SidebarItem>
          </SidebarItems>

          <SidebarItems onClick={handleAnalytics}>
            <SidebarItem>
              <SidebarIcon><EqualizerIcon /></SidebarIcon>
              <SidebarTitle>Analytics</SidebarTitle>
            </SidebarItem>
            <SideIndicator>{analytics ? <ExpandLessIcon /> : <NavigateBeforeIcon />}</SideIndicator>
          </SidebarItems>
          {Analytics.map((items, index) => (
            <div key={index}>
              {items.drop.map((item, id) => (
                <Collapse in={analytics} timeout="auto" unmountOnExit>
                  <SideList className="dropList" key={id}>
                    {
                      item.drop.length !== 0 ?
                        (<SideListItem className="dropItem" key={id} onClick={handleMarket}>
                          <SideListLabel className="dropText">{item.text}</SideListLabel>
                          <SideIndicators>{market ? <ExpandLessIcon /> : <NavigateBeforeIcon />}</SideIndicators>
                        </SideListItem>)
                        :
                        (<SideListItem className="dropItem" key={id} onClick={() => history.push(`${item.to}`)}>
                          <SideListLabel className="dropText">{item.text}</SideListLabel>
                        </SideListItem>)
                    }


                    {
                      item.drop.length !== 0 && item.drop.map((item, id) => (
                        <Collapse in={market} timeout="auto" unmountOnExit>
                          <SideList className="dropList" key={id}>
                            <SideListItem className="dropItem" key={id} onClick={() => history.push(`${item.to}`)}>
                              <SideListLabel className="dropText">{item.text}</SideListLabel>
                            </SideListItem>
                          </SideList >

                        </Collapse>
                      ))
                    }


                  </SideList >

                </Collapse>
              ))}

            </div>))

          }

          <SidebarItems onClick={handleDrop}>
            <SidebarItem>
              <SidebarIcon><AirplayIcon /></SidebarIcon>
              <SidebarTitle>App Panel</SidebarTitle>
            </SidebarItem>
            <SideIndicator>{open ? <ExpandLessIcon /> : <NavigateBeforeIcon />}</SideIndicator>
          </SidebarItems>
          {AppPanel.map((items, index) => (
            <div key={index}>
              {items.drop.map((item, id) => (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <SideList className="dropList" key={id}>

                    <SideListItem className="dropItem" key={id} onClick={() => history.push(`${item.to}`)}>
                      <SideListLabel className="dropText">{item.text}</SideListLabel>
                    </SideListItem>


                  </SideList >

                </Collapse>
              ))}

            </div>))

          }
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
