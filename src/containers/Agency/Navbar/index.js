import React, { useContext } from 'react'
import { Modal } from '@nextui-org/react'
import PropTypes from 'prop-types'
import NavbarWrapper from 'common/components/Navbar'
import Drawer from 'common/components/Drawer'
import HamburgMenu from 'common/components/HamburgMenu'
import ScrollSpyMenu from 'common/components/ScrollSpyMenu'
import { Container } from './navbar.style'
import SearchPanel from '../SearchPanel'
import CopyrightSection from '../CopyrightsSection'
import { DrawerContext } from 'common/contexts/DrawerContext'
import data from 'common/data/Agency/'
import { useRouter } from 'next/router'

const LogoImage = '/logo.png'

const Navbar = ({ navbarStyle, logoStyle }) => {
  const [opened, setOpened] = React.useState(false)

  const router = useRouter()

  const closeHandler = () => {
    setOpened(false)
    setLoginModal(false)
  }

  const { state, dispatch } = useContext(DrawerContext)
  console.log('state', state)

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    })
  }

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontWeight: '600',
            fontSize: 24,
            color: '#0092CA',
            cursor: 'pointer',
          }}
          onClick={() => {
            router.push('/')
          }}
        >
          <img src={LogoImage} style={logoStyle} />
          <span
            className="logoFont"
            style={{
              color: '#0092CA',
              fontSize: 40,
              fontWeight: '500',
            }}
          >
            twylo
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Button
            variant="textButton"
            onClick={handler}
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search"
          /> */}
          {/* <Button
            variant="textButton"
            onClick={loginUser}
            icon={<i className="flaticon-user" />}
            aria-label="login"
          /> */}
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
            duration={500}
          >
            <ScrollSpyMenu
              menuItems={data.menuItems}
              drawerClose={true}
              offset={-100}
            />
            <CopyrightSection />
          </Drawer>
        </div>

        <Modal
          blur
          fullScreen
          closeButton
          aria-labelledby="Search Panel"
          open={opened}
          onClose={closeHandler}
          justify="center"
          css={{ paddingTop: '0 !important', borderRadius: '0 !important' }}
        >
          <SearchPanel />
        </Modal>
      </Container>
    </NavbarWrapper>
  )
}

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
}

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px',
  },
  // Default logo size
  logoStyle: {
    width: 'auto',
    height: '48px',
  },
}

export default Navbar
