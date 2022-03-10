webpackChunkdiscord_app.push([
  ["wp_isdev_patch"],
  {},
  (e) => {
    for (let c in e.c)
      if (e.c[c].exports?.default?.isDeveloper === false)
        Object.defineProperty(e.c[c].exports.default, "isDeveloper", {
          get: () => true,
        });
  },
]);
