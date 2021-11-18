import React from 'react';

import MenuItem from '../menu-item/menu-item.compont';

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                { title: 'hats', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_680727-MLA25689030617_062017-O.webp', id: 1 },
                { title: 'hats', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_680727-MLA25689030617_062017-O.webp', id: 1 },
                { title: 'hats', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_680727-MLA25689030617_062017-O.webp', id: 1 },                
                { title: 'jackest', size: 'large', imageUrl: 'https://www.contreebute.com/hs-fs/hubfs/photo-1512436991641-6745cdb1723f.jpeg?width=800&name=photo-1512436991641-6745cdb1723f.jpeg', id: 2 },
                { title: 'Sneakers', size: 'large', imageUrl: 'https://media.revistagq.com/photos/5ea701f67cd6bf0008ceebbc/master/w_1600%2Cc_limit/moda-hombre-4.jpg', id: 3 }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory