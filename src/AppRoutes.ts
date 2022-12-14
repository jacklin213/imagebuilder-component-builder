interface AppRoute {
  text: string;
  location: string;
  href: string;
};

interface AppRoutes {
  [key: string]: AppRoute
}

const Routes: AppRoutes = {
  home: {
    text: "Home", location: "home", href: "#/"
  },
  editor: {
    text: "Editor", location: "editor", href: "#/editor"
  },
  error: {
    text: "Error", location: "error", href: "#/error"
  }
};

export const isValidRoute = (route: string) => {
  const routesArr = Object.values(Routes).map((routeObj) => routeObj.location);
  return routesArr.includes(route);
};

export default Routes;