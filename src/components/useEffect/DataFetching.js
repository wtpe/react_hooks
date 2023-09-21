import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}>
            </input>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
