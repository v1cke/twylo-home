import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Container from 'common/components/UI/Container'
import FooterWrapper, { List, ListItem } from './footer.style'
import data from 'common/data/Agency'

const LogoImage = '/logo.png'

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  return (
    <FooterWrapper id="footerSection" style={{ background: 'white' }}>
      <Container>
        <Box className="row" {...row}>
          <Box {...colOne}>
            <div
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                fontWeight: '600',
                fontSize: 24,
                color: '#0092CA',
                marginBottom: '15px',
              }}
            >
              <img src={LogoImage} style={logoStyle} />
              <span
                className="logoFont"
                style={{
                  color: '#0092CA',
                  eight: '500',
                  fontSize: 30,
                }}
              >
                twylo
              </span>
            </div>
            <Text content="mail@twylo.net" {...textStyle} />
            <Text content="+49171 9796 775" {...textStyle} />
          </Box>
          <Box {...colTwo}>
            {data.menuWidget.map((widget) => (
              <Box className="col" {...col} key={widget.id}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item) => (
                    <ListItem key={`list__item-${item.id}`}>
                      <Link legacyBehavior href={item.url}>
                        <a
                          className="ListItem"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          {item.text}
                        </a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  )
}

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
}

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
  },
  // Default logo size
  logoStyle: {
    width: 'auto',
    height: '48px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
}

export default Footer
