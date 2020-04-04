module.exports = {
  isAuthed: (req, res, next) => {
    // fix that
    if (req.isAuthenticated()) next()
    else next()
  },
  hasRole: (role) => (req, res, next) => {
    // fix that
    // const check = req.user.roles.indexOf(role) > -1
    // if (req.isAuthenticated() && check) next()
    next()
  }
}