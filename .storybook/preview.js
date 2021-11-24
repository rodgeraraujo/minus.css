
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    transformSource: (src, storyContext) => {
      try {
        return storyContext.storyFn(storyContext);
      } catch (e) {
        console.log(e);
        return null;
      }
    }
  }
}