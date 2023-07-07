export default {
    name: 'certificates',
    type: 'document',
      title: 'Certificates',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'index',
        type: 'number',
        title: 'Indexing',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'metadesc',
        type: 'string',
        title: 'Meta Description'
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'height',
            type: 'number',
            title: 'Height',
          },
          {
            name: 'width',
            type: 'number',
            title: 'Width',
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
        ]
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At'
      },

    ],
    orderings: [
      {
        title: 'Index',
        name: 'releaseDateDesc',
        by: [
          {field: 'index', direction: 'asc'}
        ]
      },
    ]
  }