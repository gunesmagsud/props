import React from 'react'

function Maas({mebleg,vergiFaizi}) {
    const vergiMeblegi = (mebleg * vergiFaizi) / 100
    const xalisMaas = mebleg - vergiMeblegi
  return (
    <div>
        <h2>Maas Hesabati</h2>
        <p>Eger {mebleg} manat maas alirigsa,{vergiFaizi}% tutulursa,
            Bizim elimize <strong>{xalisMaas}AZN</strong> Maas alacayig
        </p>
    </div>
  )
}

export default Maas