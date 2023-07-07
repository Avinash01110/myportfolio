export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
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
        name: 'author',
        type: 'object',
        fields: [
          {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
          }
        ]
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At'
      },

    ]
  }