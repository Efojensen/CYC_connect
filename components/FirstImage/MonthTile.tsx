import React from 'react'

const MonthTile = ({month} : {month: string}) => {
    return (
        <div className='flex rounded-[.1875rem] px-3 bg-[#F4796C] py-1 mt-78.75 w-min'>
            <p className='text-center text-[.8125rem] text-white font-semibold uppercase tracking-[.0488rem] manrope-font'>{month}</p>
        </div>
    )
}

export default MonthTile