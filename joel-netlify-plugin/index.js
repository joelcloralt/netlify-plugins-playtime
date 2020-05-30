module.exports = {
  onPreBuild: () => {
    console.log('we are about to build');
  },

  onPostBuild: ({ constants}) => {
    console.log('we are done building', constants)
  }
}