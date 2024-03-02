import React, { useEffect, useState } from 'react';

const Pagination = ()=>{
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    const clickedCurrentPage = (currentPage)=>{
        if(currentPage>=1 && currentPage <=data.length/10 && page != currentPage)
        setPage(currentPage)
    }
    return(
        <>
        <h1>Pagination Example</h1>
        {data.slice(page*10-10,page*10).map((items)=>(
            <p key={items.id}>{items.title}</p>
        ))}
        <div>
            <span onClick={()=>clickedCurrentPage(page-1)} className={page>1?"":"btn"}>Prev.</span>
            {[...Array(data.length/10)].map((_,index)=>(
                <span className={page === index+1?"bc__change":""}
                style={{
                    padding: "10px",
                    margin: "5px",
                    color: "red",
                    cursor: "pointer",
                  }} onClick={()=>clickedCurrentPage(index+1)}>{index+1}</span>
            ))}
 <span
            style={{ cursor: "pointer" }}
            onClick={() => clickedCurrentPage(page + 1)}
            className={page < data.length / 10 ? "" : "btn"}
          >
            Next.
          </span>        </div>
        </>
    )

}

export default Pagination;