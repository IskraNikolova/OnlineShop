module.exports = {
  isAuthed: (req, res, next) => {
    if (req.isAuthenticated()) next()
  },
  hasRole: (role) => (req, res, next) => {
    const check = req.user.roles.indexOf(role) > -1
    if (req.isAuthenticated() && check) next()
  }
}