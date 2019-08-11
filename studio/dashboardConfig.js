export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d50685ef6bacc410746fd84',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rts15rek',
                  apiId: '5a350b19-67ad-4a03-9be9-e9895d359fac'
                },
                {
                  buildHookId: '5d50685e9ab1a6d97275b809',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p9x9tpf9',
                  apiId: 'd3d54640-d109-4002-ae4a-800a7600efa6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JasonRStJohn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p9x9tpf9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
