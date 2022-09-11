import React from 'react'
import Shop_Data from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            collections: Shop_Data
        }

        console.log( 'this.state', this.state);
    }

    render(){
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                this.state.collections.map((post) => (
               
                     <CollectionPreview key={post.id} {...post} ></CollectionPreview>
                    ))
            }
        </div>)
    }

}
export default ShopPage;