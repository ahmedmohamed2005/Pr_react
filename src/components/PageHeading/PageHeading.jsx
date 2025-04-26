import React from 'react' ;
import './PageHeading.css' ;

function PageHeading({NameCom,title,titlePro}) {
  return (
    <div className="page_heading mt-0 p-0">
        <div>products</div>
        <div>{NameCom} / <span>{title}</span><span>{titlePro}</span> </div>
       </div>
  )
}

export default PageHeading
