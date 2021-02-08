function getDependencies(tree) {
  let out = [];

  for (let dependency in tree.dependencies) {
    let dep = dependency + "@" + tree.dependencies[dependency].version;

    if (!out.includes(dep)) out.push(dep);

    let deps = getDependencies(tree.dependencies[dependency]);

    deps.forEach((_dep) => {
      if (!out.includes(_dep)) out.push(_dep);
    }, this);
  }

  return out.sort();
}

module.exports = getDependencies;
