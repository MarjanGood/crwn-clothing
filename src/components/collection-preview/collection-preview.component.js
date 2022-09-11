import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (item) => (

    <div className='collection-preview'>
        
    <h1 className='title'>
     {item.title.toUpperCase()}
    </h1>

    <div className='preview'>
    {item.items
    .filter((item,idx)=>idx < 4)
    .map((i)=>(
        <CollectionItem key={i.id} {...i} >
       
        </CollectionItem>
    ))}
    </div>
</div> 

);
export default CollectionPreview;


