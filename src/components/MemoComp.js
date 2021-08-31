import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}


// use React.memo()
export default  React.memo(MemoComp)
