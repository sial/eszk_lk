import React from 'react'

const router: Array<Record<string, any>> = [
  {
    component: 'hz',
    path: '/about',
    routes: [
      {
        component: () => {
          return <div>hello</div>
        },
        path: '/about/ggg'
      }
    ]
  }
]

export default router
