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
    this.openCardForEdit = this.openCardForEdit.bind(this);
    this.delete = this.delete.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
    this.addRecipeButModal = this.addRecipeButModal.bind(this);


    this.state = {
      index: 0,
      show: false,
      validated: false,
      isRecipeCollapsed: false,
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
            ingredients: "potato, meat, cabbage, onion, carrot, beet",
            isRecipeCollapsed: 'false'
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
      this.setState({
        show: false,
        modalHeader: "Add a Recipe",
        title: "",
        ingredients: "",
        addButHeader: "Add"
      });
    }

    handleShow() {
      this.setState({ show: true, validated: false });
    }

    handleCollapse(i) {
      console.log(this.state.title);
        console.log(this.state.ingredients);
      this.setState({
        index: i,
        recipes: this.state.recipes
            .slice(0, i)
            .concat(
              {
                title: this.state.recipes[i].title,
                ingredients: this.state.recipes[i].ingredients,
                isRecipeCollapsed: String(!JSON.parse(this.state.recipes[i].isRecipeCollapsed))
              },
              this.state.recipes.slice(i + 1)
            )
      });

      localStorage.setItem(
        "_oksanakaragicheva_recipes",
        JSON.stringify(this.state.recipes)
      );

    }

    addRecipeButModal() {
    this.setState({
      show: false,
      title: this.state.title,
      ingredients: this.state.ingredients,
      modalHeader: "Add a Recipe",
      addButHeader: "Add",
      recipes: this.state.validated !== false ?
      (
        this.state.addButHeader === "Add"
          ? [
              ...this.state.recipes,
              { title: this.state.title, ingredients: this.state.ingredients, isRecipeCollapsed: "false" }
            ]
          : this.state.recipes
              .slice(0, this.state.index)
              .concat(
                {
                  title: this.state.title,
                  ingredients: this.state.ingredients,
                  isRecipeCollapsed: this.state.isRecipeCollapsed
                },
                this.state.recipes.slice(this.state.index + 1)
              )): this.state.recipes
    });

    localStorage.setItem(
      "_oksanakaragicheva_recipes",
      JSON.stringify(
        this.state.addButHeader === "Add"
          ? [
              ...this.state.recipes,
              { title: this.state.title, ingredients: this.state.ingredients, isRecipeCollapsed: "false" }
            ]
          : this.state.recipes
              .slice(0, this.state.index)
              .concat(
                {
                  title: this.state.title,
                  ingredients: this.state.ingredients,
                  isRecipeCollapsed: "false"
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

  delete(i) {
    this.state.recipes.splice(i, 1);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem(
      "_oksanakaragicheva_recipes",
      JSON.stringify(this.state.recipes)
    );
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
    show={this.state.show}
    modalHeader={this.state.modalHeader}
    addButHeader={this.state.addButHeader}
    addRecipeButModal={this.addRecipeButModal}
    title={this.state.title}
    ingredients={this.state.ingredients}
    handleTitle={this.handleTitle}
    handleIngredients={this.handleIngredients}
    isRecipeCollapsed={this.state.isRecipeCollapsed}/>
    <ListOfRecipes
    handleCollapse={this.handleCollapse}
    recipes={this.state.recipes}
    index={this.state.index}
    openCardForEdit={this.openCardForEdit}
    delete={this.delete}/>
    </>
  );
}
}

export default RecipeBox;
