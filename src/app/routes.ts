import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projetos/add", "routes/projects/create.tsx"),
] satisfies RouteConfig;
