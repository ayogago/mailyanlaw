module.exports = {
  apps: [{
    name: 'mailyanlaw',
    script: './node_modules/.bin/next',
    args: 'start -p 3001',
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    // Auto-restart settings
    min_uptime: '3s',
    max_restarts: 10,
    restart_delay: 5000,

    // Monitoring settings to detect hangs
    kill_timeout: 10000,

    // Logs
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,

    // Additional health monitoring
    exp_backoff_restart_delay: 100,

    // Crash monitoring
    ignore_watch: ['node_modules', 'logs', '.next']
  }]
};
