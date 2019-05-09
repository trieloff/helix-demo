const App = (title) => (
  <div className="App">
    <img className="App-Logo" src="foo.jpg" alt="{title}" />
    <h1 className="App-Title">{title}</h1>
  </div>
);

module.exports.main = (context) => {
	return {
		response: {
			body: App(context.content.title).outerHTML
		}
	}
};
