import React from 'react'
import ReactMarkdown from 'react-markdown'

const Response = ({ recipe,ingredients }) => (
  <div className={ingredients?.length>0?'response-output':null}>
    {recipe?<h2>Recipe: </h2>:null}
    <ReactMarkdown>
    {recipe}
    </ReactMarkdown>
    {recipe?<p className='footer'>&copy; devloped by NHGamer all rights reserved.</p>:null}
    </div>
)

export default Response
