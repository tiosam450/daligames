import { GameProps } from '@/utils/types/game';
import React from 'react'

async function getDetalhes(titulo: string){
  try{
    const res = await fetch(`https://sujeitoprogramador.com/next-api/?api=game&title=${titulo}`, { cache: 'no-store' })
    return res.json();
  }catch(err){
    console.log("Algo deu errado!" + err)
  }
}

const Search = async ({params}: {params: {title: string}}) => {
  const detalhes: GameProps[] = await getDetalhes(params.title);
  console.log(detalhes)
  return (
    <div>
      <h1>Página search</h1>
    </div>
  )
}

export default Search
