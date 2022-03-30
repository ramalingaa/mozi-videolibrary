import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
export const getNoteItemsHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  // const userNotes = schema.users.findBy({ _id: user }).notes;
  return new Response(200, {}, { notes: user.notes });
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {product}
 * */

export const addItemToNotesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const { video } = JSON.parse(request.requestBody);
    if (user.notes.some((item) => item._id === video._id)) {
     
      return new Response(
        409,
        {},
        {
          errors: ["The video is already in your liked videos"],
        }
      );
    }
    user.notes.push(video);
    return new Response(201, {}, { notes: user.notes });
  }
  return new Response(
    404,
    {},
    {
      errors: ["The email you entered is not Registered. Not Found error"],
    }
  );
};

/**
 * This handler handles removing items to user's cart.
 * send DELETE Request at /api/user/cart/:productId
 * */


export const removeItemFromNotesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const filteredNotes = user.notes.filter((item) => item._id !== videoId);
    this.db.users.update({ notes: filteredNotes });
    return new Response(200, {}, { notes: filteredNotes });
  }
  return new Response(
    404,
    {},
    { errors: ["The user you request does not exist. Not Found error."] }
  );
};


/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart/:productId
 * body contains {action} (whose 'type' can be increment or decrement)
 * */
 export const updateNotesItemHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const { action } = JSON.parse(request.requestBody);
    if (action.type === "update") {
        user.notes.forEach((notes) => {
        if (notes._id === videoId) {
          notes.notes = action.payload;
        }
      });
    } 

    this.db.users.update({ notes: user.notes });
    return new Response(200, {}, { notes: user.notes });
  }
  return new Response(
    404,
    {},
    { errors: ["The user you request does not exist. Not Found error."] }
  );
};