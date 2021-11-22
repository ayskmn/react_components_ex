function App() {
	return (
	  <div>
	    <Person
	      name="Ayse"
	      age={32}
	      hobbies={["reading", "cats", "drinking beer"]}
	    />
	    <Person 
	      name="Pam" 
	      age={34} 
	      hobbies={["roulette", "derby"]} 
	    />
	    <Person
	      name="Tim"
	      age={10}
	      hobbies={["skateboarding", "making memes"]}
	    />
	    <Person
	      name="Emanuelle"
	      age={8}
	      hobbies={["streaming", "gaming"]}
	    />
	  </div>
	);
      }
      
ReactDOM.render(<App />, document.getElementById("root"));