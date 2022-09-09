import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layout';
import config from '~/config';
import Search from '~/layout/components/Search/Search';
import Live from '~/pages/Live';
import { LoginPhoneOrEmail, LoginQr, LoginRegular } from '~/components/Modal/Login';
//Public Routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.live,
    component: Live,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
