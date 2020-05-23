export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec978da40c162ddab5de8b0',
                  title: 'Sanity Studio',
                  name: 'gatsby-blog-studio-6wgcdjnw',
                  apiId: 'c2757ae2-1b08-406a-b278-33e7f49acf21'
                },
                {
                  buildHookId: '5ec978da40c162b1035decbd',
                  title: 'Blog Website',
                  name: 'gatsby-blog-web-cwhqbd25',
                  apiId: 'd3dc632d-df9b-4bb8-a66a-1d709d383d37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vgmartinez/gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-blog-web-cwhqbd25.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
