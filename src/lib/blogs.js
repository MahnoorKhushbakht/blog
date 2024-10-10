import qs from 'qs';

export async function getBlogs() {
    const CMS_URL = 'http://localhost:1337';
    const url = `${CMS_URL}/api/blogs?` + qs.stringify({
        fields: ['slug', 'title', 'publishedAt', 'details','subtitle'],
        populate: { image: { fields: ['url'] }},
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 },
    }, { encodeValuesOnly: true });

    const response = await fetch(url, {
        next: { revalidate: 10 },
      });
    const json = await response.json(); 
    const { data } = json; 
    console.log('data',data)
    return data.map((blog) => ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        subtitle: blog.subtitle,
        details: blog.details, 
        date: blog.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: CMS_URL + blog.image.url,
    }));
}


export async function getBlog(slug,type) {
    const CMS_URL = 'http://localhost:1337';
    const url = `${CMS_URL}/api/${type}?` + qs.stringify({
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'publishedAt', 'details','subtitle'],
        populate: { image: { fields: ['url'] }},
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 },
    }, { encodeValuesOnly: true });

    const response = await fetch(url, {
        next: { revalidate: 10 },
      });
    const json = await response.json(); 
    const { data } = json; 
    console.log('data',data)
    return data.map((blog) => ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        subtitle: blog.subtitle,
        details: blog.details, 
        date: blog.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: CMS_URL + blog.image.url,
    }));
}

// http://localhost:1337/api/categories

export async function getCategories(){
    const CMS_URL = 'http://localhost:1337';
    const url = `${CMS_URL}/api/categories?` + qs.stringify({
        fields: ['slug', 'Name','highlight'],
        populate: { image: { fields: ['url'] }},
    }, { encodeValuesOnly: true });

    const response = await fetch(url, {
        next: { revalidate: 10 },
      });
    const json = await response.json(); 
    const { data } = json; 
    console.log('data',data)
    return data.map((blog) => ({
        slug: blog.slug,
        name: blog.Name,
        highlight: blog.highlight,
        image: CMS_URL + blog.image.url,
    }));
}


// export async function getCategory(slug){
//     const CMS_URL = 'http://localhost:1337';
//     const url = `${CMS_URL}/api/` + qs.stringify({
//         fields: ['slug', 'Name','highlight'],
//         populate: { image: { fields: ['url'] }},
//     }, { encodeValuesOnly: true });

//     const response = await fetch(url, {
//         next: { revalidate: 10 },
//       });
//     const json = await response.json(); 
//     const { data } = json; 
//     console.log('data',data)
//     return data.map((blog) => ({
//         slug: blog.slug,
//         name: blog.Name,
//         highlight: blog.highlight,
//         image: CMS_URL + blog.image.url,
//     }));
// }
// http://localhost:1337/api/bloggs?categories=food

export async function getCategory(slug){
    const CMS_URL = 'http://localhost:1337';
    const url = `${CMS_URL}/api/${slug}?` + qs.stringify({
        fields: ['slug', 'title', 'publishedAt', 'details','subtitle'],
        populate: { image: { fields: ['url'] }},
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 },
    }, { encodeValuesOnly: true });

    const response = await fetch(url, {
        next: { revalidate: 10 },
      });
    const json = await response.json(); 
    const { data } = json; 
    console.log('data',data)
    return data.map((blog) => ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        subtitle: blog.subtitle,
        details: blog.details, 
        date: blog.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: CMS_URL + blog.image.url,
    }));
}
