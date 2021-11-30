export class TransformService {
    static fbObjectToArray(fbData) {
        return Object.keys(fbData).map(key => {
            // console.log('Key: ', key);
            const item = fbData[key]
            item.id = key
            // console.log('item', item);
            return item
        })
    }
}