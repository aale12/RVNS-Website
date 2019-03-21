module.exports = {
    bucket: {
      slug: 'rvns',
      read_key: process.env.COSMIC_READ_KEY,
      write_key: process.env.COSMIC_WRITE_KEY
    },
    env: {
      SENDGRID_FUNCTION_ENDPOINT: process.env.SENDGRID_FUNCTION_ENDPOINT || 'your-sendgrid-email-function-url'
    }
}
