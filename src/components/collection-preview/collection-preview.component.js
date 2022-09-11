import './collection-preview.style.sass';

const CollectionPreview = (item) => (

    <div className='collection-preview'>
    <h1 className='title'>
        {item.title.toUpperCase()}
    </h1>
    <div className='preview'>

    {item.items
    .filter((item,idx)=>idx < 3)
    .map((i)=>(
        <div key={i.id}>
            {i.name}
        </div>
    ))}
    </div>
</div> 

);
export default CollectionPreview;


