import React from 'react'

function Suretzaman({suret,mesafe}) {
    const zaman = mesafe / suret
  return (

    <div>
        <h2>Suret ve Zaman Hesablama</h2>
        <p>Mesafe:{mesafe}km</p>
        <p>Suret:{suret}km/saat</p>
        <p>Hesablanan Zaman:{zaman} saat</p>

    </div>
  )
}

export default Suretzaman