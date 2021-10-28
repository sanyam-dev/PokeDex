import React from 'react'
import style from './modules/page.module.css'
import {Button} from 'react-bootstrap'
function Page({ prev, next, handleNext, handlePrev }) {

    return (
        <>
            <div className = {style.btn}>
                
                {
                    prev !== null ?

                        <Button className={style.bts} variant="primary" onClick={() => handlePrev()}> PREV </Button> :
                        <></>
                }
                {
                    next !== null ?
                        <Button className={style.bts} variant="primary" onClick={() => handleNext()}> NEXT </Button> :
                        <></>
                }
            </div>
        </>
    )
}

export default Page
