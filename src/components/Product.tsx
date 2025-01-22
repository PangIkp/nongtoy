import React from 'react'
import '../Styles/Product.scss'

function Product() {
    return (
        <div>
            console.log(object)
            console.log('first', first)
            console.time('first')
            console.timeEnd('first')
            console.clear()
            console.count(label)
            console.error(object)
            console.warn(object)
            console.log('first', JSON.stringify(first, null, 2))
        </div>
    )
}

export default Product
