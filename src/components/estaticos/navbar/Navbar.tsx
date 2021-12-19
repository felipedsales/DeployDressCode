import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    function goLogout() {
        dispatch(addToken(''));
        toast.info("Usúario Deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/home');

    }
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false);

    var navbarLogout;

    if (token != "") {
        navbarLogout = <Link to="/login" className="logout" >
            <Box onClick={() => goLogout()}>
                <Typography variant="h6" className='logout link'>
                    Logout
                </Typography>
            </Box>
        </Link>


    } else {
        navbarLogout =
            <ul className="lista">
                <li className="login">
                    <Link to="/login" className="link">
                        <Typography variant="h6">
                            Logar
                        </Typography>
                    </Link>
                    <Link to="/cadastrousuario" className="link">
                        <Typography>
                            cadastrar
                        </Typography>
                    </Link>

                </li>

            </ul>


    }

    return (
        <>
            <AppBar position="static" className="navbar">
                <Toolbar variant="dense">
                    <ul className="lista">
                        <li>
                            <img src="https://imgur.com/YRuuBDW.png" className='logo' />
                        </li>
                        <li>
                            <Typography variant="h5" className='dresscode' >
                                .dresscode
                            </Typography>
                        </li>
                        <li>
                            <Box className="accicon">
                                <AccountCircleIcon  onClick={() => goLogout()} />

                            </Box>
                        </li>
                        <li>
                            {navbarLogout}
                        </li>
                    </ul>


                </Toolbar>
            </AppBar>


        </>
    )
}



export default Navbar;