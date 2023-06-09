import React, { useState } from 'react'
import { CAR_LIST } from './car'
import { PRICE_LIST } from './car'
import Table from 'react-bootstrap/Table';
import Tmr from './Tmr';



function App() {
  // console.log(PRICE_LIST)
  //   console.log(CAR_LIST)

  const [searchresult, setSearchResult] = useState('')

  const result = CAR_LIST.filter((item) => `${item.make} ${item.model}`.toLocaleLowerCase().includes(searchresult.toLocaleLowerCase()))



  return (
    <>


      <div className="container-fluid bg-success">
        <div className="row">
          <div className="col justify-content-centre text-center "><h3>Task No 2</h3></div>
        </div>
      </div>


      <div className="container-fluid my-4">
        <div className="row justify-content-between">
          <div className="col-3"><div>
            <input type="text" name="" id="" placeholder='search here' onChange={(e) => setSearchResult(e.target.value)} />
          </div></div>
          <div className="col-3"><Tmr /></div>
        </div>
      </div>













      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>

        {
          result.map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.make}</td>
                    <td>{item.model}</td>
                    <td>{item.type}</td>
                    <td>
                      {
                        PRICE_LIST.find((price) => price.car_id === item.id)?.price
                      }
                    </td>
                  </tr>
                </tbody>
              </>
            )
          })
        }


      </Table>


    </>
  )
}

export default App