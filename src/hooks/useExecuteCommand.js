const { exec } = require('child_process');

export default function useExecuteCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    callback(stdout);
  });
}
