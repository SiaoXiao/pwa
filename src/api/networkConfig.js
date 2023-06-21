export const networkConfig = {
  baseURL:
    import.meta.env.VITE_USER_NODE_ENV === "production"
      ? "https://~~~"
      : "/api",
  requestTimeout: 30000,
};
