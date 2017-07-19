export const tooManyArguments = context => ({
  CallExpression(node) {

    if (['require', 'rewire'].indexOf(node.callee.name) < 0 && node.arguments.length > 1) {
      context.report(node, 'require() called with extra arguments. Only one argument is expected', {});
    }
  }
});
