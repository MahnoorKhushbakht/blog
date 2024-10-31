import qs from 'qs';

export async function getBlogs() {
    const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
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
    const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
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

// https://strapicms-production-f0e2.up.railway.app/api/categories

export async function getCategories(){
    const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
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
//     const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
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
// https://strapicms-production-f0e2.up.railway.app/api/bloggs?categories=food

export async function getCategory(slug, page = 1) {
  const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const url = `${CMS_URL}/api/${slug}?` + qs.stringify({
      fields: ['slug', 'title', 'publishedAt', 'details', 'subtitle'],
      populate: { image: { fields: ['url'] } },
      sort: ['publishedAt:desc'],
      pagination: { page, pageSize: 2 },
  }, { encodeValuesOnly: true });

  const response = await fetch(url, {
      next: { revalidate: 10 },
  });

  const json = await response.json();
  const { data, meta } = json; 

  console.log('data', data);

  return {
      blogs: data.map((blog) => ({
          id: blog.id,
          slug: blog.slug,
          title: blog.title,
          subtitle: blog.subtitle,
          details: blog.details,
          date: blog.publishedAt.slice(0, 'yyyy-mm-dd'.length),
          image: CMS_URL + blog.image.url,
      })),
      totalCount: meta?.pagination?.total || 0, 
  };
}



export async function getSearchData() {
  const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const url = `${CMS_URL}/api/categories?` +
    '&' + qs.stringify({
      fields: ['slug', 'title'],
      sort: ['publishedAt:desc'],
    }, { encodeValuesOnly: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();
  const { data } = json;

  return data.map((blog) => ({
    slug: blog.attributes.slug, // Ensure to access attributes correctly
    title: blog.attributes.title,
  }));
}



// https://strapicms-production-f0e2.up.railway.app/api/categories?filters[slug][$contains]=foods