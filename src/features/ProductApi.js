import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { getDoc, doc, collection, getDocs, addDoc, deleteDoc, updateDoc, query, where, orderBy } from "firebase/firestore";
import { fireDB } from "../firebase/firebase";


const ProductApi = createApi({
    reducerPath: "productApi",
    baseQuery: {
        baseUrl: fakeBaseQuery(),
    },
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            queryFn: async (params) => {
                const category = params?.category;
                const name = params?.name;
                const price = params?.price;


                try {
                    let q = collection(fireDB, "products");
                    if (category) {
                        q = query(q, where("category", "==", category.toString()))
                    }
                    if (name) {
                        q = query(q, orderBy("title", name.toString()));
                    }
                    if (price) {
                        q = query(q, orderBy("price", price.toString()));
                    }
                    const productDoc = await getDocs(q);

                    const finalProductData = productDoc.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    return { data: finalProductData };
                } catch (error) {
                    return { error: error.message };
                }
            },
            providesTags: ["products"],
        }),
        addProduct: builder.mutation({
            queryFn: async (product) => {
                try {
                    const productRef = collection(fireDB, "products");
                    await addDoc(productRef, product);
                    return { data: product };
                } catch (error) {
                    return { error: error.message };
                }
            },
            invalidatesTags: ["products"],
        }),
        removeProduct: builder.mutation({
            queryFn: async (productId) => {
                try {
                    const productRef = doc(fireDB, "products", productId);
                    await deleteDoc(productRef);
                    return { productId };
                } catch (error) {
                    return { error: error.message };
                }
            },
            invalidatesTags: ["products"],
        }),
        updateProduct: builder.mutation({
            queryFn: async ({ product, productId }) => {

                try {
                    const productRef = doc(fireDB, "products", productId);
                    const updatedProduct = await updateDoc(productRef, product);

                    return { updatedProduct };
                } catch (error) {
                    return { error: error.message };
                }
            },
            invalidatesTags: ["products"],
        }),
        getProduct: builder.query({
            queryFn: async (productId) => {
                try {
                    const productRef = doc(fireDB, "products", productId);
                    const productData = await getDoc(productRef);
                    const finalProduct = productData.data();
                    return { data: finalProduct };

                } catch (error) {
                    return { error: error.message };

                }
            }
        }),

    }),
})

export const { useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation,
    useGetProductQuery,
} = ProductApi;

export default ProductApi;