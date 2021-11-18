import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='ana sayfa'
                />
                <Menu.Item
                    name='bloglar'
                />
                <Menu.Item
                    name='hakkında'
                />
            </Menu>
        </div>
    )
}
