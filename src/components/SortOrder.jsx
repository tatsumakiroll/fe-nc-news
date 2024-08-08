import React from 'react'

const SortOrder = ({setSort, setOrder}) => {

const handleSort =(e)=>{
    setSort(e.target.value)
}

const handleOrder =(e)=>{
    setOrder(e.target.value)
}

  return (
    <form className="sort" style={{paddingTop:'1rem'}}>
    <label>sort: </label>
    <select onChange={handleSort}>
        <option></option>
        <option value="comment_count">comment count</option>
        <option value="created_at">created at</option>
        <option value="votes">vote count</option>
    </select>
    <label> order: </label>
    <select onChange={handleOrder}>
        <option></option>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
    </select>
    
  </form>
  )
}

export default SortOrder