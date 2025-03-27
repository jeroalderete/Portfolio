const paths = [
  "/dvrc38ei4/image/upload/v1724621731/**",
  "/dvrc38ei4/image/upload/v1724795514/**",
  "/dvrc38ei4/image/upload/v1724628343/**",
  "/dvrc38ei4/image/upload/v1724629452/**",
  "/dvrc38ei4/image/upload/v1724629803/**",
  "/dvrc38ei4/image/upload/v1724630025/**",
  "/dvrc38ei4/image/upload/v1724630226/**",
  "/dvrc38ei4/image/upload/v1724630518/**",
  "/dvrc38ei4/image/upload/v1724631256/**",
  "/dvrc38ei4/image/upload/v1724631389/**",
  "/dvrc38ei4/image/upload/v1724636157/**",
  "/dvrc38ei4/image/upload/v1724639017/**",
  "/dvrc38ei4/image/upload/v1731886152/1_jpjqe7.jpg",
  "/extra/path/**",
  // Agrega más rutas aquí
];

module.exports = {
  images: {
    remotePatterns: paths.map((path) => ({
      protocol: "https",
      hostname: "res.cloudinary.com", // Aquí pones el mismo host para todas las rutas
      port: "",
      pathname: path, // Usamos el array de paths dinámicamente
    })),
  },
};
