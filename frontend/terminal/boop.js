/* global Terminal */
/**
* Instance of Terminal
*/

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = factory(require('./terminal.js'), 'node')
  } else {
    // Browser globals (root is window)
    root.initTerminal = factory(root.Terminal, 'browser')
  }
}(this, function (Terminal, mode) {
  var commands = {}
  var state = {}

  commands.ls = function (args) {
    return "homework        test"
  }

  commands.echo = function (args) {
    args.shift()
    return args.join(' ')
  }

  /**
   * Doom emulator
   */
  commands.iddqd = function () {
    if (!state.iddqd) {
      state.iddqd = true
      return 'Degreelessness mode on'
    } else {
      state.iddqd = false
      return 'Degreelessness mode off'
    }
  }

  /**
   * Zork emulator
   */
  commands.look = function (args) {
    if (args.length <= 1) {
      return 'You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.<br><br>'
    } else {
      return 'I don\'t know the word "' + args[1] + '".<br><br>'
    }
  }

  commands.su = function (args) {
    if (args.length > 1) {
      Terminal.user = args[1]
    }
    return ''
  }

  commands.exit = function (args) {
    Terminal.exit()
    console.log('[Process completed]')
  }

  function initTerminal() {
    console.log('Terminal access granted.')

    Terminal.init(document.body, {
      commands: commands,
      prompt: '\\u@' + findGetParameter("container") + '~$ ',
      intro: '<p>Welcome to autocontainerd. </p>'
    })
  }

  // Return a value to define the module export.
  if (mode === 'node') {
    return {
      initTerminal: initTerminal,
      Terminal: Terminal
    }
  } else {
    return initTerminal
  }
}))
