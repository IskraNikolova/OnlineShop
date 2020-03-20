
export function language (state) {
  return state.language
}

export function constants (state) {
  return require(`./../../statics/languages/${state.language}`)
}
