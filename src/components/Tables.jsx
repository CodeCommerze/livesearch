import React,{useEffect , useContext} from 'react'
import {MianContext} from '../context/context'
const Tables = () => {

    //useContext
    const {recipi, setrecipi ,search} = useContext(MianContext)
    const api = 'http://127.0.0.1:8000/recipe/'
    useEffect(() => {
        fetch(api)
        .then(res=>res.json())
        .then(data=>{
            setrecipi(data)
        })
    },[])
  return (
    <div className='container pt-4  text-cetnter'>
        <table className='table  '>
            <thead>
            <th scope='col'>id</th>
            <th>image</th>
            <th scope='col text text-capitalize'>title</th>
            <th scope='col text text-capitalize'>created</th>
            <th scope='col text text-capitalize'>action bttton</th>
            </thead>
            {recipi.filter((item)=>{return search.toLowerCase()===''? item: item.name.toLowerCase().includes(search)}).map((item)=>{
                return(
                    <tbody key={item.id}>
                    <tr>
                    <th scope='row'>{item.id}</th>
                    <td><img src={item.image} width="60px" height="60px"/></td>
                    <td>{item.name}</td>
                    <td>{item.created}</td>
                    <td>
                        <button className='btn btn-outline-danger' >delete</button>
                    </td>
                    </tr>
                    </tbody>
                )
            })}
        

           
            
        </table>
    </div>
  )
}

export default Tables