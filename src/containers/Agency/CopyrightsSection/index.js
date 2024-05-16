import React from 'react'
import Link from 'next/link'
import Text from 'common/components/Text'
import CopyrightWrapper from './copyrightSection.style'
import data from 'common/data/Agency/'
import Button55 from 'common/components/Button55'
import { useRouter } from 'next/router'

const CopyrightSection = () => {
  const router = useRouter()
  return (
    <CopyrightWrapper
      className="copyright_section"
      style={{ marginLeft: '20px' }}
    >
      <Button55
        offset={200}
        onClick={() => {
          router.push('imprint')
        }}
      >
        Impressum
      </Button55>
      <Text content="Copyrights 2014 Twylo" />
    </CopyrightWrapper>
  )
}

export default CopyrightSection
