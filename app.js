
    // Initial  state
    const heading1 = React.createElement("h1", {
        id: "H1",
    }, "Heading 1 !");

    // Initial  state
    const heading2 = React.createElement("h2", {
        id: "H2",
    }, "Heading 2!");

    const container = React.createElement("div",{
        id: "container"
    }, [heading1, heading2]);


    // Render heading
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element inside the root

    //async defer
    root.render(container);