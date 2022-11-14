import React from 'react'

/**
 *@name PageNotFound
 *@description Component error when page not found
 * @return {JSX.Element}} 
 */
const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  )
}

export default PageNotFound