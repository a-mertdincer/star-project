import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react';

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src = "https://yt3.ggpht.com/yti/APfAmoHY1nYZlByL7CLhSxghKzoSFynacKYETwQXaVblSw=s88-c-k-c0x00ffffff-no-rj-mo">
                </Image>
                <Dropdown pointing = "top left" text = "Mert">
                    <Dropdown.Menu>
                        <Dropdown.Item text = "Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text = "Çıkış Yap" icon="sign out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
