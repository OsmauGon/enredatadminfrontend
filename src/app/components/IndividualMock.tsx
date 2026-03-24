import React from 'react'
import '../styles/mockLayout.css'
import type { mockobjectinfo, mockobjectuser } from '../types/mocktypes';
import type { mockobjectcase } from '../types/mocktypes';
import type { mockobjectevent } from '../(admin)/events/page';


interface IndividualMockProps {
    data: mockobjectuser | mockobjectcase | mockobjectevent | mockobjectinfo
}

export const IndividualMock: React.FC<IndividualMockProps> = ({data}) => {
    console.log(typeof data)
  return (
    <>
    {
        Object.entries(data).map(([key,value])=>(<p className='data-item' key={key}><b>{key}:</b>{JSON.stringify(value)}</p>))
    
    }
    {/* {data.image && <img src={data.image} alt="" />} */}
    {"image" in data && (
        <img src={data.image} alt="preview" />
      )}
    {"profileImage" in data && (
        <img src={data.profileImage} alt="preview" />
      )}

    {/*
    <div className={props.visible ? "mock-visible" : "mock-novisible"}>
        <div className="mock-title"><button className="back-button">⬅️</button><h3>Nombre</h3></div>
        <div className="mock-content">
            <div className="mock-content-info">{JSON.stringify(props)}</div>
            <div className="mock-content-photo">
                <img src={`${props.image}`} alt="" />
            </div>
        </div>
    </div>
     */}
    </>
  )
}