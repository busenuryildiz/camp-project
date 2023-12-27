import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://scontent.fist7-2.fna.fbcdn.net/v/t39.30808-6/296859461_5314300352023855_5286302628700810501_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ru61MuwZckcAX-GPNRq&_nc_ht=scontent.fist7-2.fna&oh=00_AfAN8GJV_QY-Sk91SlPq4kcI1P8qU6crI_G-ogcrnCjXtw&oe=659035E1" />
                <Dropdown pointing="top left" text="Buse">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
