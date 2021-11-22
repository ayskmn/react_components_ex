function App() {
	return (
	  <div>
	    <Tweet
	      name="Ayse Sokmen"
	      username="sokus"
	      date={new Date().toDateString()}
	      message="I love my cat."
	    />
	    <Tweet
	      name="Elie Schoppik"
	      username="eschoppik"
	      date={new Date().toDateString()}
	      message="#Ilovehashtags"
	    />
	    <Tweet
	      name="Tim Garcia"
	      username="TimGarcia0"
	      date={new Date().toDateString()}
	      message="Follow me on Twitter!"
	    />
	  </div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"))
