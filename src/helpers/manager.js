const manager = {
    translation: (selectedRadiobtn, word, setResult) => {
        fetch("/translation/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ selectedRadiobtn, word }), //passing instance for translation here
          })
          .then(res => res.json())
          .then((response) => {
            setResult(response)
            console.log(console.log("DEBUG TRANSLATION API", response));
          })
      },

      searching: (word, dict, setCounter, setResult) => {
        fetch("/search/" + word + "/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dict),
        })
        .then(res => res.json())
            .then((response) => {
                setResult(response)
                setCounter(0)
                console.log("DEBUG SEARCH API CALL", response)
            });
      },
};

export default manager;