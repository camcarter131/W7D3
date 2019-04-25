import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from "./util/api_util";
import { receiveAllPokemon } from "./actions/pokemon_actions";
import configureStore from "./store/store";

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h2>Pokedex</h2>, root);
});