export function fetchDataSuperheroes(payload) {
    return { type: 'FETCHDATA/SUPERHEROES', payload}
}

export function fetchDetailSuperhero(payload) {
  return { type: 'FETCHDETAIL/SUPERHERO', payload}
}