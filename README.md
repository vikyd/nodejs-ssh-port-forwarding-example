# nodejs-ssh-port-forwarding-example

Nodejs example to create ssh port forwarding from local to remote

# Requirement

- you can ssh from local to the remote server
  - local host should contain `~/.ssh/id_rsa`
- remote server should running a http example service

```sh
# start simple http server by Python 2 listen on port 9999
python2 -m SimpleHTTPServer 9999

# start simple http server by Python 3 listen on port 9999
python3 -m http.server 9999
```

# Forwarding Usage

Change variables in `main.js` to fit your environment, then run on local machine:

```sh
npm install
node main.js
```

then open http://localhost:8000 in local browser.
