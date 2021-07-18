// Forward from local port 8000 to remote port 9999

const { SSHConnection } = require("node-ssh-forward")

/**
 * Example
 * - A: your local machine
 *   - local host
 * - B: a frontend service running on port 9999
 *   - target host
 * - If you want to access B frontend service by localhost:8000
 * - the settings below is what you want
 */
const localPort = 8000

// your remote service
const targetHost = "targetHostIP"
const targetPort = 9999

/**
 * - can be the same as your target host port
 * - port: default 22
 * - user: change to the user in remote who trust your local
 */
const tunnelHost = "tunnelHostIP"
const tunnelPort = 22
const tunnelUser = "tunnelHostUser"

const sshConnection = new SSHConnection({
  endHost: tunnelHost,
  endPort: tunnelPort,
  username: tunnelUser,

  /**
   * default:
   * - first will try private key in `~/.ssh/id_rsa`
   * - second will try ssh agent from env var SSH_AUTH_SOCK
   *
   * you can also change explicitly
   */

  // ---- plan A: ssh private key ----
  // privateKey: '~/.ssh/id_rsa',

  // ---- plan B: ssh agent ----
  // agentForward: true,
  // agentSocket: 'your environment variable: SSH_AUTH_SOCK'
})
sshConnection
  .forward({
    fromPort: localPort,
    toPort: targetPort,
    toHost: targetHost,
  })
  .then(() => {
    console.log("forward success")
    console.log(`now you can access: http://localhost:${localPort}`)
  })
  .catch((e) => {
    console.log("error:")
    console.log(e)
  })
