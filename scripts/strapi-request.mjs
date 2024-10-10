import qs from 'qs';

const url = 'http://localhost:1337/api/blogs' 
+ '?' + qs.stringify({
    fields: ['slug', 'title', 'publishedAt','body'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 6 },
  }, { encodeValuesOnly: true });
console.log('url:', url);
const data = await fetch(url)
const body = await data.json()
const formatted = JSON.stringify(body,null,2)
console.log(formatted)