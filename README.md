# gclnk
JavaScript library for gclnk.com
```js
async function main(){
    const {gclnk} = require('./gclnk');
    const link= new gclnk();
    let req=await link.short_url("http://t.me/hdhdbdnd")
    console.log(req)
}
main()
```
