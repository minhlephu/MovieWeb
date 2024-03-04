import React from 'react'

const InfoMovie = () => {
  return (
    <div className='mt-10 mb-10'>
      <div className="info flex gap-x-8 font-bold text-[30px] leading-[30px]">
        <div className="info-thumb w-3/12 h-[350px] rounded-lg overflow-hidden">
          <img 
            className='w-full h-full object-cover'
            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/2/16/phim-mai-cua-tran-thanh-170805257051474670729.jpg" 
            alt="" 
          />
        </div>
        <div className="info-main w-9/12">
          <h2 className='movie-title uppercase'>mai</h2>
          <p className='movie-description text-[14px] mt-5 text-justify font-normal'>
            MAI xoay quanh câu chuyện về cuộc đời của một người phụ nữ cùng tên với bộ phim. 
            Trên First-look Poster, Phương Anh Đào tạo ấn tượng mạnh với cái nhìn tĩnh lặng, 
            xuyên thấu, đặc biệt, trên bờ môi nữ diễn viên là hình ảnh cô đang nằm nghiêng 
            trên mặt nước. Được phủ một màn sương mờ ảo, poster đậm chất nghệ thuật của Mai 
            gây tò mò với lời tựa: “Quá khứ chưa ngủ yên, ngày mai liệu sẽ đến?”.
          </p>
          <div className='flex mt-3'>
            <p className='w-4/12 uppercase text-[16px]'>Đạo diễn:</p>
            <p className='w-8/12 text-[16px] font-normal'>Trấn thành</p>
          </div>
          <div className='flex'>
            <p className='w-4/12 uppercase text-[16px]'>Diễn viên</p>
            <p className='w-8/12 text-[16px] font-normal'>Phương Anh Đào, Tuấn Trần, Trấn Thành, Hồng Đào, Uyển n, Ngọc Giàu, Việt Anh, Quỳnh Anh, Anh Thư,..</p>
          </div>
          <div className='flex'>
            <p className='w-4/12 uppercase text-[16px]'>Thể loại:</p>
            <p className='w-8/12 text-[16px] font-normal'>Tâm lý, Tình cảm</p>
          </div>
          <div className='flex'>
            <p className='w-4/12 uppercase text-[16px]'>Đạo diễn:</p>
            <p className='w-8/12 text-[16px] font-normal'>Trấn thành</p>
          </div>
          <div className='flex'>
            <p className='w-4/12 uppercase text-[16px]'>Thời lượng:</p>
            <p className='w-8/12 text-[16px] font-normal'>131 phút</p>
          </div>
          <div className='flex'>
            <p className='w-4/12 uppercase text-[16px]'>Ngôn ngữ: </p>
            <p className='w-8/12 text-[16px] font-normal'>Tiếng việt</p>
          </div>
          <div className='flex'>
            <p className='w-4/12 uppercase text-[16px]'>Ngày khởi chiếu: </p>
            <p className='w-8/12 text-[16px] font-normal'>10/02/2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoMovie