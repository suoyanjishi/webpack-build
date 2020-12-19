const assert = require("assert");

describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base.js");

  it("enty", () => {
    assert.equal(
      baseConfig.entry.index,
      "C:/Users/L/Desktop/gitlab/learn/learn-webpack/my-project/builder-webpack/test/smoke/template/src/index/index.js"
    );
    assert.equal(
      baseConfig.entry.search,
      "C:/Users/L/Desktop/gitlab/learn/learn-webpack/my-project/builder-webpack/test/smoke/template/src/search/index.js"
    );
  });
});
