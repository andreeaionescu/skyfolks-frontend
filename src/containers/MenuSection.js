import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Divider, Grid } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FlashOnTwoTone from '@material-ui/icons/FlashOnTwoTone'
import WhatshotTwoTone from "@material-ui/icons/WhatshotTwoTone";
import LocationOnTwoTone from "@material-ui/icons/LocationOnTwoTone";
import PieChartRounded from '@material-ui/icons/PieChartRounded';
import HazardAnalyticsSection from './HazardAnalyticsSection.js';


const drawerWidth = 240;
const drawerWidthAnalytics = 480;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundColor: "#333",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
    appBarShiftAnalytics :{
        width: `calc(100% - ${drawerWidthAnalytics}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidthAnalytics,
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerPaper: {
        width: drawerWidthAnalytics,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        minHeight: '64px',
        justifyContent: 'flex-start',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        minHeight: '64px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function MenuSection(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [openAnalytics, setOpenAnalytics] = React.useState(false);

    const handleAnalyticsOpen = () => {
        console.log("clicked")
        setOpenAnalytics(true);
    };

    const handleAnalyticsClose = () => {
        setOpenAnalytics(false);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    [classes.appBarShiftAnalytics]: openAnalytics,
                })}
            >
                <Toolbar>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Grid container justify="flex-start" alignItems="center">
                                <Grid item>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        edge="start"
                                        className={clsx(classes.menuButton, {
                                            [classes.hide]: open,
                                        })}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" noWrap>
                                        Automated Detection of Hazards
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton
                                color="inherit"
                                aria-label="open analytics"
                                onClick={handleAnalyticsOpen}
                                edge="end"
                                className={clsx(openAnalytics && classes.hide)}
                            >
                                <PieChartRounded />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  })}
                  classes={{
                    paper: clsx({
                      [classes.drawerOpen]: open,
                      [classes.drawerClose]: !open,
                    }),
                  }}
                >
                  <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                  </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><FlashOnTwoTone color="secondary" size="large"/></ListItemIcon>
                        <ListItemText primary={"Hurricanes"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><WhatshotTwoTone color="error" size="large"/></ListItemIcon>
                        <ListItemText primary={"Wildfires"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><LocationOnTwoTone color="primary" size="large"/></ListItemIcon>
                        <ListItemText primary={"Earthquakes"} />
                    </ListItem>
                </List>
            </Drawer>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={openAnalytics}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleAnalyticsClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <HazardAnalyticsSection/>
                <Divider />
            </Drawer>
        </div>
    );
}

export default MenuSection;