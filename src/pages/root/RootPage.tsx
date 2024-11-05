import {Outlet} from "react-router-dom";
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Toolbar,
    Typography
} from "@mui/material";
import {DarkMode, LightMode, Menu} from "@mui/icons-material";
import {useState} from "react";

const drawerWidth = 240;

export default function RootPage() {

    const [mobileOpen, setMobileOpen] = useState(false)
    const [dummyTheme, setDummyTheme] = useState(false)

    const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
    const switchTheme = () => setDummyTheme((prevState) => !prevState)

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        PDaI 12
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <IconButton
                            size="large"
                            name="Theme"
                            onClick={switchTheme}
                            color="inherit"
                        >
                            {dummyTheme ? <LightMode/> : <DarkMode/>}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={window !== undefined ? () => window.document.body : undefined}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
                        <Typography variant="h6" sx={{my: 2}}>
                            PDaI 12
                        </Typography>
                        <Divider/>
                        <List>
                            <ListItem key="Theme" disablePadding>
                                <ListItemButton sx={{textAlign: 'center'}} onClick={switchTheme}>
                                    <ListItemIcon>
                                        Theme: {dummyTheme ? "Light" : "Dark"}
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </nav>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}