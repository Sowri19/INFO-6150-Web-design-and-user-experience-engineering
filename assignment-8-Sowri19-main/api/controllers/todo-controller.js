import { request } from "express";
import * as todoService from "./../services/todo-service.js";

//setting up the error responses
const setErrorResponse = (error, response) => {
  response.status(500);
  response.json(error);
};

const setSuccessResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

//Create new TODO item
// POST /TODO Item
export const post = async (request, response) => {
  try {
    const payload = request.body;
    const todo = await todoService.save(payload);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

// Retrieve all contacts
// GET /TODO Item
export const all = async (request, response) => {
  try {
    const title = request.query.title;
    const description = request.query.description;
    const query = {};
    if (title) {
      query.title = title;
    }
    if (description) {
      query.description = description;
    }
    const todo = await todoService.search(query);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Retrieve a single TODO by id.
// GET /TODO Item/:id
export const get = async (request, response) => {
  try {
    const id = request.params.id;
    const todo = await todoService.get(id);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Update a single TODO by id
// PUT /TODO Item/:id
export const modify = async (request, response) => {
  try {
    const id = request.params.id;
    const updated = { ...request.body };
    updated.id = id;
    const todo = await todoService.modify(updated);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

//Remove a single TODO by id
// DELETE /TODO Item/:id
export const remove = async (request, response) => {
  try {
    const id = request.params.id;
    const todo = await todoService.remove(id);
    setSuccessResponse(
      { message: `todo item successfully removed ${id}` },
      response
    );
  } catch (error) {
    setErrorResponse(error, response);
  }
};
