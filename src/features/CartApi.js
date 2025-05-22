import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "../firebase/firebase";

const CartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["cart"],

  endpoints: (builder) => ({
    getCartItems: builder.query({
      queryFn: async (userId) => {
        try {
          const cartItemsRef = collection(fireDB, "carts", userId, "cartItems");
          const querySnapshot = await getDocs(cartItemsRef);
          const cartItems = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: cartItems };
        } catch (error) {
          return { error: error.message };
        }
      },
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      queryFn: async ({ userId, item }) => {
        try {
          const cartItemId = `${item.productId}_${item.selectedColor}_${item.selectedSize}`;
          const cartItemRef = doc(
            fireDB,
            "carts",
            userId,
            "cartItems",
            cartItemId
          );

          await setDoc(cartItemRef, item, { merge: true });

          return { data: { success: true } };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["cart"],
    }),
    deleteCartItem: builder.mutation({
      queryFn: async ({ userId, cartItemId }) => {
        try {
          const cartItemRef = doc(
            fireDB,
            "carts",
            userId,
            "cartItems",
            cartItemId
          );
          await deleteDoc(cartItemRef);
          return { data: { success: true } };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddToCartMutation,
  useDeleteCartItemMutation,
} = CartApiSlice;

export default CartApiSlice;
