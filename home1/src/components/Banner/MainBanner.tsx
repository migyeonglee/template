import Image from 'next/image'
import React from 'react'
import { mainBanner } from '@components/common/data/banner'
import styled from 'styled-components'

export default function MainBanner() {
  return (
    <BannerBox>
    {/* <Image src={mainBanner} fill alt="Main Logo" /> */}

    </BannerBox>

  )
}
const BannerBox = styled.div`
background-image: url('/images/main_banner.jpg');
background-size: cover;
  background-size: center;
  width: 100%;
  min-height: 100vh;
  opacity: 0.5;
  color: black;
  display:flex;
  justify-content: center;
  align-items: center;
`