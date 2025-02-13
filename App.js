import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "Heading1"),
		React.createElement("h2", {}, "Heading2"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "Heading1"),
		React.createElement("h2", {}, "Heading2"),
	]),
]);

const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
