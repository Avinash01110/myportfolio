export default {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'skillname',
      type: 'string',
      title: 'Skill Name',
    },
    {
      name: 'completed',
      type: 'number',
      title: 'Completed',
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
          source: 'skillname',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
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
