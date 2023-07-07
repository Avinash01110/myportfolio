export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
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
      title: 'Meta Description',
    },
    {
      name: 'projectimage',
      title: 'ProjectImage',
      type: 'array',
      of: [{type: 'image',options: {
        hotspot: true // <-- Defaults to false
      }}]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'array',
      of: [{type: 'image',options: {
        hotspot: true // <-- Defaults to false
      }}],
    },
    {
      name: 'weburl',
      type: 'string',
      title: 'Web URL',
    },
    {
      name: 'giturl',
      type: 'string',
      title: 'Git URL',
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
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
