import React from 'react'
import Ticket from '@/components/Ticket'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const tickets = () => {
  return (
    <div className="px-[9.5vw]">
       <Navbar/>
        <div className='mt-[80px]'>  
          <h2 className='text-[35px] text-white font-montserrat mb-[20px]'>My Tickets</h2>
          <h4 className='text-[20px] text-white font-montserrat mb-[80px]'>63 Tickets</h4>
        </div>
        <div className='mt-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]'>
            <Ticket
              movieName="Fantastic Beasts and Where to Find Them"
              movieImage="https://upload.wikimedia.org/wikipedia/en/0/0b/FBAWTFT-poster.jpg"
              date="17.04.2024"
              time="16:30"
              seat="A3"
              hall="Hall1"
              barcode="54237858918528312332"
            />
            <Ticket
              movieName="John Wick Chapter 4"
              movieImage="https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg"
              date="25.04.2024"
              time="11:30"
              seat="A3"
              hall="Hall1"
              barcode="2312312312312312313"
            />
            <Ticket
              movieName="Dune: Part Two"
              movieImage="https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
              date="25.04.2024"
              time="11:30"
              seat="A3"
              hall="Hall1"
              barcode="2312312312312312313"
            />
        </div>
        <Footer/>
    </div>
  )
}

export default tickets