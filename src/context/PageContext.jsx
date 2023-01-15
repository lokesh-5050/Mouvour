import React, { createContext, useState } from 'react'


export const PageProvider = createContext(null)

const PageContext = (props ) => {

    const [page, setPage] = useState(1)
    return (
        <>
            <PageProvider.Provider value={[page, setPage]}>
                {props.children}
            </PageProvider.Provider>
        </>


    )
}

export default PageContext