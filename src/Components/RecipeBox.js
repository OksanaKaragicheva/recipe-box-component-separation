import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import ModalWindow from '../Components/ModalWindow';
import MainAddButton from '../Components/MainAddButton';
import ListOfRecipes from '../Components/ListOfRecipes';

library.add(faTimes, faPencilAlt, faTrashAlt);

class RecipeBox extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);

    this.state = {
      index: 0,
      show: false,
      open: false,
      validated: false,
      title: "",
      ingredients: "",
      modalHeader: "Add a Recipe",
      addButHeader: "Add",
      recipes: JSON.parse(localStorage.getItem("_oksanakaragicheva_recipes"))
    };
  }

  componentWillMount() {
    if (localStorage.getItem("_oksanakaragicheva_recipes") === null) {
      localStorage.setItem(
        "_oksanakaragicheva_recipes",
        JSON.stringify([
          {
            title: "Borsch",
            ingredients: "potato, meat, cabbage, onion, carrot, beet"
          }
        ])
      );
      this.setState({
        recipes: JSON.parse(localStorage.getItem("_oksanakaragicheva_recipes"))
      });
    }
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleIngredients(e) {
    this.setState({ ingredients: e.target.value });
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true, show: true});
  }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true, validated: false });
    }

    handleCollapse() {
      this.setState({ open: !this.state.open })
    }

    addRecipeButModal() {
    this.setState({
      show: false,
      title: this.state.title,
      ingredients: this.state.ingredients,
      modalHeader: "Add a Recipe",
      addButHeader: "Add",
      recipes:
        this.state.addButHeader === "Add"
          ? [
              ...this.state.recipes,
              { title: this.state.title, ingredients: this.state.ingredients }
            ]
          : this.state.recipes
              .slice(0, this.state.index)
              .concat(
                {
                  title: this.state.title,
                  ingredients: this.state.ingredients
                },
                this.state.recipes.slice(this.state.index + 1)
              )
    });
    this.setState({
      title: "",
      ingredients: ""
    });

    localStorage.setItem(
      "_oksanakaragicheva_recipes",
      JSON.stringify(
        this.state.addButHeader === "Add"
          ? [
              ...this.state.recipes,
              { title: this.state.title, ingredients: this.state.ingredients }
            ]
          : this.state.recipes
              .slice(0, this.state.index)
              .concat(
                {
                  title: this.state.title,
                  ingredients: this.state.ingredients
                },
                this.state.recipes.slice(this.state.index + 1)
              )
      )
    );
  }

  openCardForEdit(i) {
    this.setState({
      index: i,
      show: true,
      title: this.state.recipes[i].title,
      ingredients: this.state.recipes[i].ingredients,
      modalHeader: "Edit a Recipe",
      addButHeader: "Edit"
    });
  }

  render() {
    return(
    <>
    <MainAddButton
    handleShow={this.handleShow}/>
    <ModalWindow
    handleSubmit={this.handleSubmit}
    handleClose={this.handleClose}
    validated={this.state.validated}
    show={this.state.show} />
    <ListOfRecipes open={this.state.open} handleCollapse={this.handleCollapse}/>
    </>
  );
}
}

export default RecipeBox;
