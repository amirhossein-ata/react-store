//get_visible_items

export default (items,{itemName , itemPrice ,itemProducer,itemCategory,itemRate,sortBy}) => {
    return items.filter((item)=>{
        const producerMatch =itemProducer === "" || item.producer.toLowerCase() === itemProducer.toLowerCase() ;
        const nameMatch = item.name.toLowerCase().includes(itemName.toLowerCase());
        const categoryMatch = item.category.toLowerCase().includes(itemCategory.toLowerCase());

        // const categoryMatch = itemCategory === "" || item.category.toLowerCase() === itemCategory.toLowerCase();
        const priceMatch = typeof itemPrice !== 'number' || item.price <= itemPrice;
        const RateMatch = typeof itemRate !== 'number' || item.rating >= itemRate;

        return nameMatch && priceMatch && producerMatch && categoryMatch && RateMatch;
     })
     .sort((a,b) => {
        if(sortBy ==='price'){
            return a.price < b.price ? 1 : -1;
        }
        else{
            return a.rating < b.rating ? 1 : -1;
        }
    }) 
};
