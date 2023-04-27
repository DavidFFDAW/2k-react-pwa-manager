import React from 'react'

export default function WrestlerCustomSelectList({ list, image, name, select }) {
    return (
        <div className='custom-select-result-listing'>
            {list.map((item, index) => {
                const imageItem = item[image];
                const nameItem = item[name];
                const img = imageItem ? imageItem : '/noimage.jpg';

                return (
                    <div key={index} className='custom-select-result pointer' onClick={_ => select(item)}>
                        <div className='custom-select-result-image flex start al-center gap-small'>
                            <div className='backgroundimg' style={{ backgroundImage: `url(${img})` }}></div>
                            <p>{nameItem}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
