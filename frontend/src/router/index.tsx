import Home from '../components/pages/home'
import Roles from '../components/pages/roles'
import Privileges from '../components/pages/privileges'

const router: Array<Record<string, any>> = [
  {
    path: '//',
    component: Home
  },
  {
    path: '/roles',
    component: Roles
  },
  {
    path: '/privileges',
    component: Privileges
  }
]

export default router
