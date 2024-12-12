import {Outlet} from "react-router-dom";
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    FormControlLabel,
    IconButton,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
    Switch,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import {DarkMode, LightMode, Logout, Menu} from "@mui/icons-material";
import {useState} from "react";
import {useThemeSwitch} from "../hooks/useThemeSwitch.ts";
import {useLabel} from "../hooks/useLabel.ts";
import {useAuth} from "../hooks/useAuth.ts";

export function RootPage() {

    const [mobileOpen, setMobileOpen] = useState(false)

    const {toggleColorMode} = useThemeSwitch()
    const theme = useTheme()
    const {logout, isAuthorized} = useAuth()

    const {label} = useLabel()

    const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

    return (
        <Box sx={{display: "flex"}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: "none"}}}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography sx={{mr: 2, display: {sm: "none"}}} variant="h6">{label}</Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
                    >
                        PDaI 12
                    </Typography>
                    <Box sx={{display: {xs: "none", sm: "block"}}}>
                        <IconButton
                            size="large"
                            name="Theme"
                            onClick={toggleColorMode}
                            color="inherit"
                        >
                            {theme.palette.mode === "light" ? <LightMode/> : <DarkMode/>}
                        </IconButton>
                        {isAuthorized && <IconButton
                            size="large"
                            name="Logout"
                            onClick={logout}
                            color="inherit"
                        >
                            <Logout/>
                        </IconButton>}
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
                        display: {xs: "block", sm: "none"},
                        "& .MuiDrawer-paper": {boxSizing: "border-box", width: 240},
                    }}
                >
                    <Box sx={{textAlign: "center"}}>
                        <Typography variant="h6" sx={{my: 2}}>PDaI 12</Typography>
                        <Divider/>
                        <List>
                            <ListItem key="Theme Switch" disablePadding>
                                <FormControlLabel sx={{
                                    marginY: 0,
                                    marginLeft: 2,
                                    marginRight: 1,
                                    width: "100%",
                                    justifyContent: "space-between"
                                }} control={<Switch checked={theme.palette.mode !== "light"}
                                                    onChange={toggleColorMode}/>
                                } label="Night Mode" labelPlacement="start"/>
                            </ListItem>
                        </List>
                    </Box>
                    <Box marginTop="auto">
                        <ListItemButton onClick={() => {
                            logout()
                            handleDrawerToggle()
                        }}>
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </Box>
                </Drawer>
            </nav>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Typography sx={{display: {xs: "none", sm: "block"}}} variant="h4" align="center"
                            paddingBottom={2}>{label}</Typography>
                <Container maxWidth="xs">
                    <Outlet/>
                </Container>
            </Box>
        </Box>
    )
}