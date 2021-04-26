module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "src/styles/base/base.scss";
            `
      }
    }
  }
};
