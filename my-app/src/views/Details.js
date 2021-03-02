import React from 'react'
import fetchData from '../hooks/fetchData'

function Detail(props) {
    const id = props.id
    console.log(id,'<<<<<<<<<<<<<<<<<<<ini di halaman detail');
    const [loading, data, error] = fetchData(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    console.log(data)
    // return (
    //     // <div>
    //     //     <div class="card mb-3" style="max-width: 540px;">
    //     //         <div class="row g-0">
    //     //             <div class="col-md-4">
    //     //                 <img src="..." alt="..." />
    //     //             </div>
    //     //             <div class="col-md-8">
    //     //                 <div class="card-body">
    //     //                     <h5 class="card-title">Card title</h5>
    //     //                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //     //                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //     //                 </div>
    //     //             </div>
    //     //         </div>
    //     //     </div>
    //     // </div>
    // )
}
export default Detail
