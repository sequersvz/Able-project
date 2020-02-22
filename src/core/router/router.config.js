import Home from "../views/home/index.page"
import MapView from "../views/mapview/index.page"
import ExplorePage from "../views/explore/index.page"
import KitchenPage from "../views/kitchen/index.page"
import SatisfactionPage from "../views/satisfaction/index.page"
import OrdersPage from "../views/orders/index.page"
import PeoplePage from "../views/people/index.page"
import SettingsPage from "../views/settings/index.page"

const routerConfig = () => {
  return [
    {
      path: "/",
      component: Home,
      name: "Home",
      exact: true,
      strict: true
    },
    {
      path: "/map-view",
      component: MapView,
      name: "Map View",
      exact: true,
      strict: true
    },
    {
      path: "/explore",
      component: ExplorePage,
      name: "Explore",
      exact: true,
      strict: true
    },
    {
      path: "/explore/:id",
      component: KitchenPage,
      name: "Kitchen",
      strict: true,
      exact: true
    },
    // {
    //   path: "/explore/kitchen/:id",
    //   component: KitchenPage,
    //   name: "Kitchen",
    //   strict: true,
    //   exact: true
    // },
    {
      path: "/satisfaction",
      component: SatisfactionPage,
      name: "Satisfaction",
      exact: true,
      strict: true
    },
    {
      path: "/orders",
      component: OrdersPage,
      name: "Orders",
      exact: true,
      strict: true
    },
    {
      path: "/people",
      component: PeoplePage,
      name: "People",
      exact: true,
      strict: true
    },
    {
      path: "/settings",
      component: SettingsPage,
      name: "Settings",
      exact: true,
      strict: true
    }
  ]
}

export default routerConfig
