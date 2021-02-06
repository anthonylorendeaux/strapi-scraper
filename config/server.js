module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2c3ed8c4f26d0e9f67264f6cda642a0c'),
    },
  },
  cron: {
    enabled: true,
  }
});
