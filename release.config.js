const config = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/git', {
      'assets': ['dist/*.js', 'dist/*.js.map'],
      'message': 'chore(release): ${nextRelese.version} [skip ci]\n\n${nextRelese.notes}'
    }],
    '@semantic-release/github'
  ]
}

module.exports = config

