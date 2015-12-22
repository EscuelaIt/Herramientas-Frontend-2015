module.exports = {
  production: {
    HACKER_NEWS_HOST: 'https://news.ycombinator.com',
    SECTIONS: {
      NEWS: 'news'
    },
    PAGES: {
      FIRST: 1
    }
  }
}[process.env.NODE_ENV || 'production']
