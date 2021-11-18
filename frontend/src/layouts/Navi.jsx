import React, {useState} from 'react'
import {Container, Menu} from 'semantic-ui-react'
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { NavLink, useHistory } from 'react-router-dom';

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return(  
        <div>
            <Menu inverted fixed = "top">
                <Container>
                    <Menu.Item as={NavLink} to = "/"
                        name='ana sayfa'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                  
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )

    }