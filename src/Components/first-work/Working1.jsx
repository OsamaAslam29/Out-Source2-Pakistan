import React from 'react'
import './style.css'
import pic from '../../Assets/Page-1/like.png'
import glo from '../../Assets/Page-1/glob.png'
import ma from '../../Assets/Page-1/Mask-1.png'
import mas from '../../Assets/Page-1/Mask-2.png'
import massk from '../../Assets/Page-1/Mask-3.png'

const Working1 = () => {
  return (
    <>
    <div className="page">
        <div className="bg"></div>
        <div className="page-content">
          <div className="header">
            <h1>Measurements</h1>
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem enim, deleniti harum ad natus nisi? Placeat architecto dolorem quas minima maiores odit consequuntur sed eius excepturi reprehenderit eveniet ut nihil velit nemo non, vel similique quo minus, dicta, tempore voluptatum mollitia. Beatae expedita accusamus incidunt a aliquid illo iusto labore dolorum, reiciendis officiis fugiat debitis cum nobis, voluptatibus voluptates quae veritatis in eligendi voluptas odit nulla ad maiores dolor? Iste ipsam ea ipsum voluptates vitae alias inventore ducimus excepturi at a, deleniti aspernatur eum ab vel. Nam tempora quasi voluptatem laborum ratione expedita. Nobis molestias esse sequi nihil asperiores.</p>
            <div className="img-icon">
              <img src={pic} alt="" />
              <img src={ma} alt="" />
              <img src={mas} alt="" />
              <img src={massk} alt="" />
              <h1>hello</h1>
    <div className="flex">
      <div className="icon">
              <img src={glo} alt="" />
              <h1>osama</h1>

      </div>
    </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Working1
