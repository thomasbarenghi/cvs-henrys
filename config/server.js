APP_KEYS=['hufaLk7DhIsJ5UddAceHuQ','uP1xoPCD0qJDBh3T2371sw']
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

keys: [['hufaLk7DhIsJ5UddAceHuQ','uP1xoPCD0qJDBh3T2371sw']]