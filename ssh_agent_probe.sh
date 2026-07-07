#!/bin/bash
# Start ssh-agent and add key with passphrase
eval $(ssh-agent -s)

# Use expect just for adding the key to the agent
expect << 'EOF'
set timeout 10
spawn ssh-add ssh_key.pem
expect "Enter passphrase*"
send "Sq;LfI)?~5O?\r"
expect eof
EOF

# Now run direct SSH commands (no expect needed, key is cached)
echo "=== TESTING CONNECTION ==="
ssh -o StrictHostKeyChecking=no root@strapi.wegov.nyc "echo CONNECTION_OK"

echo "=== FINDING .ENV FILES ==="
ssh -o StrictHostKeyChecking=no root@strapi.wegov.nyc "find /root /home /var /opt -name '.env' -maxdepth 4 2>/dev/null | head -10"

echo "=== DONE ==="
