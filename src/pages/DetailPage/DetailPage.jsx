import React from 'react'
import "./detailPage.scss"
import { CustomSlier, InfoMovie, TabsBooking } from '../../components'

const DetailPage = () => {
  return (
    <div className='container-detail w-full max-w-[980px] m-auto'>
      <CustomSlier />
      <InfoMovie />
      <TabsBooking />
      <div className='rate-review'>
        <h2 className='text-2xl font-semibold'>Xếp hạng và đánh giá phim</h2>
      </div>
    </div>
  )
}

export default DetailPage