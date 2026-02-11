import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projetos/novo", "routes/projetos.novo.tsx")
] satisfies RouteConfig;

