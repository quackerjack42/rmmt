module.exports = {
  apps: [{
    name: 'roommate',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-195-150-108.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/testKey.pem',
      ref: 'origin/master',
      repo: 'https://github.com/quackerjack42/rmmt.git',
      path: '/home/ubuntu/roommate',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
